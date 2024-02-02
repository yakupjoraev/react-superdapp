/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import screen from "../../main";
import load from "../../functions/loader";
import axios from 'axios'
import { useEffect, useState } from "react";
import { FaSpinner } from 'react-icons/fa';
import history_sol from "../../crypto/sol/history";
import { getAccount, addToAccount } from "../../systems/storage/store";
import { Fade, Zoom, Slide, Rotate } from "react-awesome-reveal";
function StepTen() { 
  const [allTransactions, setTransactions] = useState([]);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(true);

  function setTx(tr) {
    localStorage.currentTx = tr;
    const transaction = JSON.parse(tr);
    if(transaction.type == 'recieve') {
      load(11)
    } else {
      load(12)
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const acc = await getAccount();
        setLoading(true);
        if (acc.transactions != undefined) {
          const asyncTasks = acc.transactions.map(async (element) => {
            const combinedArray = [];
            for (const prop in element) {
              if (Object.hasOwnProperty.call(element, prop)) {
                combinedArray.push(...element[prop]);
              }
            }
            return combinedArray;
          });

          const transactionsArrays = await Promise.all(asyncTasks);
          const combinedArray = transactionsArrays.flat();
          setTransactions(combinedArray);
        }

        const promises = [history_sol()];
        const resultsArray = await Promise.all(promises);
        const latestData = resultsArray[resultsArray.length - 1];
        setTransactions(latestData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  if (screen.current !== 10 || load) return null;
  return (
        <div>
        <Fade cascade duration={500}>
  <div className="wrapper">
   <Header actionType="back" />

    <div className="content">
      <h1 className="title title--mini">Recent activity</h1>

      <div id="activities" className="activites">

      {loading && <Loading className="loading--top" />}

      <div id="activities" className="activities">
      {allTransactions.map((transaction, index) => (
<div key={index} onClick={async () => { await setTx(JSON.stringify(transaction)); } } className="active">
<p className="active__label">
 {transaction.date}
</p>

<div className="active__block">
<div className="active__info">
  <div>
{/* <div className={`active__pic ${transaction.type === 'recieve' ? 'yellow-bg' : 'black-bg'}`}> */}
          <img
            className="active__pic-icon"
            width="32"
            height="32"
            style={{
              borderRadius: '20px'
            }}
            src={transaction.token_png}
            alt="arrow icon"
          />
        </div>


  <div className="active__texts">
  <p className="active__text text">{transaction.type === 'recieve' ? 'Recieve' : 'Send'}</p>
    <p className="active__text text--grey yellow">Confirmed</p>
  </div>
</div>

<div className="active__sums">
  <p className="active__sum text yellow">{transaction.summ} {transaction.token_name.toUpperCase()}</p>
  <p className="active__sum text--grey">{'$'}{transaction.summ_usd}</p>
</div>
</div>
</div>
      ))}
    </div>
        
      </div>
    </div>

    <Footer showWallet={true} showActivity={true} showDashboard={false} activeItem="activity" />
  </div>
  </Fade>
  </div>
  );
}

export default StepTen;