/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import screen from "../../main";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL, SystemProgram, sendAndConfirmTransaction, PublicKey, Transaction } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import * as buffer from "buffer";
import load from "../../functions/loader";
import { ToastContainer, toast } from 'react-toastify';
import defaults from "../../crypto/defaults";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
window.Buffer = buffer.Buffer;
function StepEigth() {
  const [callData, setCallData] = useState([]);
  const [sol_per, setSolPercent] = useState(0);
  const [loading, setLoading] = useState(true);
  async function setToken(token) {
    const call = callData.find(find => find.ticker === token)
    await addToAccount('staking_data', call);
    await load(9);
  }
  useEffect(() => {

    async function start() {
      setLoading(true);
      const rawData = await axios.get('https://api.xbanking.org/api/v2/assets');
      const calldata = rawData.data;
      setCallData(calldata)
      setLoading(false);
    }
    start()
  }, [])
  if (screen.current != 8) return null;
  const apr = {};
  if (callData && callData.length > 0) {
    callData.forEach(token => {
      apr[token.ticker] = token.rates[0]?.apy * 100 || 0;
    });
  }
  return (
    <div>
    <Fade cascade duration={500}>
    <div className="wrapper">
   <Header actionType="back" />

      <div className="content">
        <div className="staking">
        {loading && <Loading />}
          <h1 className="title title--mini">Staking & Pools</h1>

          <form action="#" className="staking__form form">
          <div className="form__groups">
              <div className="form__group">
                <div className="form__input-wrapper form__input-wrapper--right">
                  <button type="button" className="form__icon form__input-copy">
                    <img  src="./img/icons/search.svg" alt="search icon" />
                  </button>
                  <input className="form__input" type="search" placeholder="Search Token"  />
                </div>
              </div>
            </div>
          </form>

          <div className="staking__tokens">
            <div className="wallet__tokens-header">
              <p className="wallet__tokens-label">Tokens</p>
              <button type="button" className="wallet__tokens-sort">
                <img src="./img/icons/sort-solid.svg" alt="sort-solid" />
              </button>
            </div>

            <div onClick={() => {
              const token = 'sol'
              setToken(token);
            }} className="wallet__token">
              <div className="wallet__token-infos">
                <div className="wallet__token-pic">
                  <img src="./img/solana.svg" width="24" height="24" alt="SOL" />
                </div>

                <div className="wallet__token-info">
                  <p className="wallet__token-name text">Solana</p>
                </div>
              </div>

              <div className="wallet__token-sums">
                <p className="wallet__token-sum text">{apr.sol}% APR</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer showWallet={true} showActivity={true} showDashboard={true} />
    </div>
    </Fade>
    </div>
  )
}

export default StepEigth;