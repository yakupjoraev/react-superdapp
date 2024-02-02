/* eslint-disable no-unused-vars */
import Header from "../Header";
import load from "../../functions/loader";
import screen from "../../main";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import defaults from "../../crypto/defaults";
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";
function StepTwentyThree() {
  if (screen.current != 23) return null;
  return (
  <div className="wrapper">
    <Header actionType="back" />

    <div className="content">
      <div className="confirm">
        <div className="confirm__block confirm__block--center">
          <img className="confirm__block-img" width="80" height="80" src="/img/confirm-block-logo.svg" alt="logo icon" />

          <h1 className="confirm__block-title">
            XBANKING | Staking |
            Stake your crypto with 
            high APR
          </h1>

          <a className="confirm__block-address" href="#">app.xbanking.org</a>
        </div>

        <div className="confirm__block">
          <p className="confirm__block-label">This app would like to:</p>

          <ul className="confirm__block-list">
            <li className="confirm__block-item">View your wallet balance & activity</li>
            <li className="confirm__block-item">Request approval for transaction</li>
          </ul>
        </div>
      </div>
    </div>


    <a className="btn btn--footer" href="#">CONFIRM</a>
  </div>
  )
}

export default StepTwentyThree;