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
function StepTwelve() {
  if (screen.current != 12) return null;
  const smena = parseInt(localStorage.frs);
  const tx = JSON.parse(localStorage.currentTx)
  const prof = tx.source;
  const resultf = prof.match(/^.{5}/g)
  const result = prof.match(/.{4}(?=($|\r|\n))/g);
  const srs = `${resultf}...${result}`;
  return (
    <div>
    <Fade duration={500}>
    <Slide direction="left" fraction="0" duration={150}>
    <div className="wrapper">
     <Header actionType="back" />

      <div className="content">
        <h1 className="title title--mini">Sent</h1>

        <div className="info-pay">
          <div className="info-pay__currency">
            <div className="info-pay__currency-pic">
              <img src={tx.token_png} width="35" height="57" alt="solana" />
            </div>

            <p className="info-pay__currency-text red">-{tx.summ} {tx.token_name.toUpperCase()}</p>
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
            <a href={`https://solscan.io/tx/${tx.tx}`} target="_blank" className="info-pay__info-link" rel="noreferrer">View on Explorer</a>
            </div>
          </div>

        </div>

      </div>
      <a onClick={() => load(smena)} className="btn btn--footer" href="#">BACK</a>
    </div>
    </Slide>
      </Fade>
    </div>
  )
}

export default StepTwelve;