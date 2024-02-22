/* eslint-disable no-unused-vars */
import Header from "../Header";
import load from "../../functions/loader";
import screen from "../../main";
import { useEffect, useState } from "react";
// import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
// import { getAccount, addToAccount } from "../../systems/storage/store";
// import defaults from "../../crypto/defaults";
// import { mnemonicToSeed, generateMnemonic } from "bip39";
// import { fromMasterSeed } from "hdkey";
function StepTwentySix() {
  if (screen.current != 26) return null;
  return (
  <div className="wrapper">
    <Header actionType="back" />

    <div className="content">

      <div className="signature">
        <div className="signature__header">
          <img className="signature__img" width="60" height="92" src="/img/signature-logo.svg" alt="logo icon" />

            <h1 className="signature__title title title--mini">
              Signature Request
            </h1>

          <a className="signature__address" href="#">localhost: 3000</a>
        </div>

        <div className="signature__main">
          <div className="signature__main-top">
            <p className="signature__main-label">Sign Message</p>
            <div className="signature__main-icon">
              <img width="18" height="18" src="/img/icons/iconamoon_attention-circle-light.svg" alt="attention icon" />
            </div>
          </div>
          <div className="signature__main-bottom">
          <div className="signature__main-content">
            <p>Euismod pretium vitae duis venenatis viverra odio velit vestibulum proin. Condimentum in eget laoreet diam ornare. Dui viverra vitae commodo sed tincidunt aliquet lectus volutpat fames. Convallis posuere odio quam cursus cras posuere accumsan. Malesuada ac sagittis enim tristique massa. Lectus at pretium dictum feugiat. Potenti euismod sociis diam et. Congue arcu libero egestas dis. Duis dui iaculis interdum magna porttitor enim nibh dui ut.Euismod pretium vitae duis venenatis viverra odio velit vestibulum proin. Condimentum in eget laoreet diam ornare. Dui viverra vitae commodo sed tincidunt aliquet lectus volutpat fames. Convallis posuere odio quam cursus cras posuere accumsan. Malesuada ac sagittis enim tristique massa. Lectus at pretium dictum feugiat. Potenti euismod sociis diam et. Congue arcu libero egestas dis. Duis dui iaculis interdum magna porttitor enim nibh dui ut.</p>
          </div>
          </div>

        </div>

      </div>
    </div>


    <div className="btns">
    <a className="btn--secondary" href="#">CANCEL</a>
    <a className="btn" href="#">APPROVE</a>
    </div>
  </div>
  )
}

export default StepTwentySix;