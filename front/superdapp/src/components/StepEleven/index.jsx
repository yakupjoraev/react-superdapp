/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import screen from "../../main";
import load from "../../functions/loader";
import axios from 'axios'
import { useEffect, useState } from "react";
import history_sol from "../../crypto/sol/history";
import { getAccount, addToAccount } from "../../systems/storage/store";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

function StepEleven() {
  if (screen.current != 11) return null;
  const tx = JSON.parse(localStorage.currentTx)
  const prof = tx.source;
  const resultf = prof.match(/^.{5}/g)
  const result = prof.match(/.{4}(?=($|\r|\n))/g);
  const srs = `${resultf}...${result}`;
  return ( 
    <div className="wrapper">
     <Header actionType="back" />

      <div className="content">
        <h1 className="title title--mini">Received</h1>

        <div className="info-pay">
          <div className="info-pay__currency">
            <div className="info-pay__currency-pic">
              <img src="./img/solana.svg" width="35" height="57" alt="solana" />
            </div>

            <p className="info-pay__currency-text yellow">+{tx.summ} SOL</p>
          </div>

          <div className="info-pay__info">
            <div className="info-pay__row">
              <span>Date</span>
              <span>{tx.date}</span>
            </div>

            <div className="info-pay__row">
              <span>Status</span>
              <span className="yellow">Succeeded </span>
            </div>

            <div className="info-pay__row">
              <span>From</span>
              <span>{srs}</span>
            </div>

            <div className="info-pay__row">
              <span>Network</span>
              <span>Solana Network</span>
            </div>

            <div className="info-pay__row info-pay__row--center">
              <a href={`https://solscan.io/tx/${tx.tx}?cluster=testnet`} className="info-pay__info-link">View on Explorer</a>
            </div>
          </div>

        </div>
      </div>

      <a onClick={() => load(10)} className="btn btn--footer" href="#">BACK</a>
    </div>
  )
}

export default StepEleven;