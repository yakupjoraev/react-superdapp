/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import screen from "../../main";
import load from "../../functions/loader";
import { useEffect, useState } from "react";
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import data_sol from "../../crypto/sol/start";
import defaults from "../../crypto/defaults";
import { Fade } from 'react-awesome-reveal';
import { send_sol } from "../../crypto/sol/transfer";
function StepTwentyTwo() {
  const [transactionData, setTxData] = useState(defaults.transaction);
  useEffect(() => {
    async function start() {
      const account = await getAccount();
      const currentUrl = new URL(window.location.href);
      const searchParams = currentUrl.searchParams;
      const actionValue = searchParams.get('action');
      const act = JSON.parse(actionValue)
      setTxData(act);
      const tokenBalance = account.balances[0][act.token.toLowerCase()].balance
      if(parseFloat(tokenBalance) < parseFloat(act.amount)) { 
        return load(21);
      }
    }
    start()
  }, [])

  async function sendToken() {
    if(transactionData.token.toLowerCase() == 'sol') {
      const signature = await send_sol(transactionData.amount, transactionData.address, 'solana');
      window.chrome.runtime.sendMessage({ action: 'super_transaction_response', signature });
    }
  }
  
return (
<div className="wrapper">
<Fade cascade duration={500}>
  <Header actionType="back" />

  <div className="content">
    <div className="confirm">
      <div className="confirm__header">
        <a href="#" className="confirm__link">
          <img className="confirm__link-img" width="48" height="48" src="/img/confirm-link-img.svg" alt="icon" />

          <div className="confirm__link-info">
            <p className="confirm__link-name">Confirm Transaction</p>
            <p className="confirm__link-address">app.xbanking.org</p>
          </div>
        </a>
      </div>

      <div className="confirm__main">

        <div className="confirm__changes">
          <div className="confirm__label">
            Estimated Changes
          </div>

          <div className="confirm__changes-item">
            <div className="confirm__changes-item-left">
              <img className="confirm__changes-item-img" width="30" height="30" src="/img/confirm-changes-item.svg" alt="icon" />

              <p className="confirm__changes-item-name">{transactionData.token.toUpperCase()}</p>
            </div>

            <div className="confirm__changes-item-right red">-{transactionData.amount} {transactionData.token.toUpperCase()}</div>
          </div>

          {/* <p className="confirm__text">
            Account does not have anough SOL to prerform the operation
          </p> */}
        </div>

        <div className="confirm__item">
          <p className="confirm__item-name">Network Fee</p>
          <p className="confirm__item-info">0.00005 {transactionData.token.toUpperCase()}</p>
        </div>
      </div>
    </div>
  </div>


  <a className="btn btn--footer" onClick={sendToken} href="#">CONFIRM</a>
  </Fade>
</div>
)
}

export default StepTwentyTwo;