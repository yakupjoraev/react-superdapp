/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import screen from "../../main";
import load from "../../functions/loader";
import { getAccount } from "../../systems/storage/store";
import history_sol from "../../crypto/sol/history";
import defaults from "../../crypto/defaults";
import { Fade } from 'react-awesome-reveal';

function StepTwentyFour() {
  const [balances, setBalances] = useState(defaults.balances);
  const [tokenName, setName] = useState('');
  const [tokenData, setData] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true); // Добавлено состояние для управления загрузкой

  function setTx(tr) {
    localStorage.currentTx = tr;
    localStorage.frs = 24;
    const transaction = JSON.parse(tr);
    if(transaction.type == 'recieve') {
      load(11)
    } else {
      load(12)
    }
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await getAccount();
        const tokenNameUpperCase = result.token_data[0].toUpperCase();
        setName(tokenNameUpperCase);
        setData(result.token_data[1]);
        let transactionData = await history_sol(); 
        if(transactionData == undefined) return;
        transactionData = transactionData.filter(transaction => {
          if (tokenNameUpperCase === 'SOL') {
            return transaction.token_addr === 'So11111111111111111111111111111111111111112';
          } else {
            return transaction.token_addr.toLowerCase() === result.token_data[1].contract.toLowerCase();
          }
        });
        setTransactions(transactionData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (screen.current !== 24) return null;

  return (
    <div>
      <Fade cascade duration={500}>
        <div className="wrapper">
          <Header show="5" actionType="back" />
          <div className="content">
            <div className="sol">
              <div className="sol__header">
                <div className="sol__top">
                  <h1 className="title title--mini">{tokenData.name || "Token"}</h1>
                  <p className="sol__top-sum">{tokenData.balance || "0"} {tokenName}</p>
                </div>
                <div className="sol__btns">
                  <button type="button" onClick={() => { load(7); }} className="sol__btn sol__btn--dark">
                    <span>Deposit</span>
                  </button>

                  <button type="button" onClick={() => { load(6); }} className="sol__btn sol__btn--yellow">
                    <span>Send</span>
                  </button>
                </div>
              </div>

              {/* Пример места для рекламного баннера или информации о стейкинге */}
              <div className="sol__banner" onClick={() => { load(8); }}>
                <div className="sol__banner-icon">
                  <img src="./img/game-icons_coins.svg" alt="icon" />
                </div>
                <div className="sol__banner-info">
                  <p className="sol__banner-label">STAKE {tokenName}</p>
                  <p className="sol__banner-text">Stake {tokenName} and Earn rewards</p>
                </div>
              </div>

              {/* Динамический список транзакций */}
              <div className="sol__actives">
              {transactions.map((transaction, index) => (
                <div onClick={async () => { setTx(JSON.stringify(transaction)); } } key={index} className="sol__active">
                  <div className="sol__info">
                    <img width="22" height="22" src={transaction.token_png} alt="token icon" />
                    <div className="sol__info-texts">
                      <p className="sol__info-text text">{transaction.type == 'transfer' ? 'Sent' : 'Received'}</p>
                      <p className="sol__info-text text--grey yellow">Confirmed</p>
                    </div>
                  </div>
                  <div className="sol__sums">
                    <div className="sol__sum text yellow">{transaction.summ} {transaction.token_name.toUpperCase()}</div>
                    <div className="sol__sum text--grey">{'$'}{transaction.summ_usd}</div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          <Footer showWallet={true} showActivity={true} showDashboard={false} activeItem="wallet" />
        </div>
      </Fade>
    </div>
  );
}

export default StepTwentyFour;