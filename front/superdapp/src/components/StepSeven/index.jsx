/* eslint-disable no-unused-vars */
import Header from "../Header";
import screen from "../../main";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL, SystemProgram, sendAndConfirmTransaction, PublicKey, Transaction } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import * as buffer from "buffer";
import load from "../../functions/loader";
import { ToastContainer, toast } from 'react-toastify';
import QRCode from "react-qr-code";
import { Fade } from "react-awesome-reveal";
function StepSeven() {
  const [balance_sol, updateBalance_sol] = useState(0);
  const [address_sol, setaddress_sol] = useState('0');
  useEffect(() => {
    async function setBalances() {
      const result = await getAccount();
      updateBalance_sol(result.balances[0].sol.balance);
      setaddress_sol(result.addr_sol)
    }
    setBalances()
  }, [])
  if (screen.current != 7) return null;
  const prof = address_sol;
  const resultf = prof.match(/^.{5}/g)
  const rr = prof.match(/.{4}(?=($|\r|\n))/g);
  const srs = `${resultf}...${rr}`;
  
  return (
    <div>
              <Fade cascade duration={500}>
    <div className="wrapper">
    <Header actionType="back" />

    <div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </div>

      <div className="content">
        <h1 className="title title--mini">
          Receive
        </h1>

        <div className="send">
          <div className="send__qr">
          <QRCode
    size={120}
    style={{ height: "auto", maxWidth: "40%", width: "100%" }}
    value={address_sol}
    viewBox={`0 0 32 32`}
    />
          </div>

          <form className="send__form form" action="#">
            <div className="form__groups">
              <div className="form__group">
                <div className="form__input-wrapper form__input-wrapper--right">
                  <button onClick={() => { navigator.clipboard.writeText(address_sol); toast.info('Address copied to clipboard', {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                            }); }} type="button" className="form__icon form__input-copy">
                    <img  src="./img/icons/copy.svg" alt="copy icon" />
                  </button>
                  <div className="form__input" type="text" value={srs}>
                  {srs}
                  </div>
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="">Asset</label>

                <div className="form__input form__block">
                  <div className="wallet__token-pic">
                    <img className="form__pic-icon" width="24" height="23" src="./img/solana.svg" alt="ethereum icon" />
                  </div>
                  <div className="form__infos">
                    <p className="form__info text">Solana</p>
                    <p className="form__info text--grey">Balance: {balance_sol} SOL</p>
                  </div>

                  <div className="form__right">
                    <button type="button" className="form__right-btn">
                      <img src="./img/icons/form-arrow.svg" alt="form-arrow" />
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="form__group">
                <label className="form__label" htmlFor="">Select Network</label>

                <div className="form__input form__block">
                  <div className="form__pic">
                    <img className="form__pic-icon" width="32" height="32" src="./img/bitcoin.svg" alt="bitcoin icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text text--grey">BNB Smart Chain</p>
                  </div>

                  <div className="form__right">
                    <button type="button" className="form__right-btn">
                      <img src="./img/icons/form-arrow.svg" alt="form-arrow" />
                    </button>
                  </div>
                </div>
              </div> */}

            </div>
          </form>

        </div>
        
      </div>

      <div className="send__footer btn--footer">
        <a className="btn" onClick={() => {load(5)}} href="#">CLOSE</a>
      </div>
    </div>
    </Fade>
    </div>
  )
}

export default StepSeven;