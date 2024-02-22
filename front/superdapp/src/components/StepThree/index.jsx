/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import load from "../../functions/loader";
import screen from "../../main";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import defaults from "../../crypto/defaults";
import { ToastContainer, toast } from 'react-toastify';
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";
function StepThree() {
  
  const [data, updateData] = useState([]);
  const [phrase, setPhrase] = useState('')
  useEffect(() => {
    async function createWallet() {
      const result = await getAccount();
      const { seed } = result;
      if(seed != null) return load(4);
      const mnemonicas = await generateMnemonic();
      setPhrase(mnemonicas);
      const derivePath = "m/44'/501'/0'/0'"
      const seedx = await mnemonicToSeed(mnemonicas)
      const masterNode = fromMasterSeed(seedx);
      const derivedKey = masterNode.derive(derivePath);
      let KEYPAIRS = Keypair.fromSeed(derivedKey._privateKey);
    
      const publicKey = KEYPAIRS.publicKey.toString();
      await addToAccount('seed', mnemonicas);
      await addToAccount('addr_sol', publicKey);
      await addToAccount('balances', defaults.balances);
      await addToAccount('prices', defaults.prices);
      await addToAccount('percents', defaults.percents);
      const splittedSeed = await mnemonicas.split(' ');
      
      updateData(await splittedSeed);
    }
    createWallet();
  }, [])
  if (screen.current != 3) return null;
  return (
    <div className="wrapper">
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
      <div className="content">
        <div className="create-password">
          <div className="create-password__steps">
            <div className="create-password__step-line active"></div>
            

            <div className="create-password__step active">
              <div className="create-password__step-num">
                <img src="./img/icons/check.svg" alt="check icon" />
              </div>
              <p className="create-password__step-text">Create Password</p>
            </div>

            <div className="create-password__step-line create-password__step-line--second active"></div>

            <div className="create-password__step active">
              <div className="create-password__step-num">2</div>
              <p className="create-password__step-text">Secure Wallet</p>
            </div>

            <div className="create-password__step-line create-password__step-line--second"></div>

            <div className="create-password__step">
              <div className="create-password__step-num">3</div>
              <p className="create-password__step-text">Confirm Protection</p>
            </div>

            <div className="create-password__step-line"></div>
          </div>

          <h1 className="title title--middle">
            Secret Backup Phrase
          </h1>

          <p className="text">
            You secret backup phrase makes it easy to back up restore your account.
          </p>
          
          <p className="text text--yellow">
            Warning: Never disclose your backup phrase.  <br/>
            Anyone with this phrase can take your Ether forever.
          </p>

          <form className="create-password__form form" action="#">
            <ul className="form__words">
              <li className="form__word">{data[0]}</li>
              <li className="form__word">{data[1]}</li>
              <li className="form__word">{data[2]}</li>
              <li className="form__word">{data[3]}</li>
              <li className="form__word">{data[4]}</li>
              <li className="form__word">{data[5]}</li>
              <li className="form__word">{data[6]}</li>
              <li className="form__word">{data[7]}</li>
              <li className="form__word">{data[8]}</li>
              <li className="form__word">{data[9]}</li>
              <li className="form__word">{data[10]}</li>
              <li className="form__word">{data[11]}</li>
            </ul>

            <button type="button" className="form__copy">
              <p className="form__copy-text" onClick={() => {navigator.clipboard.writeText(phrase); toast.info('Address copied to clipboard', {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                            });}} >Copy full phrase</p>
              <img className="form__copy-pic" src="./img/icons/copy.svg" alt="copy icon" />
            </button>
            {/* УБРАТЬ вставки кошелька и сидки СЛИ НУЖНО ЗАРЕГАТЬ НОВЫЙ КОШЕЛЕК А НЕ ДЛЯ ТЕСТИРОВАНИЯ БРАТЬ */}
            <button type="submit" onClick={async () => {load(4); await addToAccount('firststart', true); }} className="form__btn btn">CONFIRM</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StepThree;