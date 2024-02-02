/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import load from "../../functions/loader";
import screen from "../../main";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import defaults from "../../crypto/defaults";
import { mnemonicToSeed, generateMnemonic, validateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";
import { ToastContainer, toast } from 'react-toastify';
import Header from "../Header";
function StepThreeImportWallet() {
  const [data, updateData] = useState([]);

  async function resetWallet() {
    const seedInputs = document.querySelectorAll('input[type="seed"]');
    let resultString = '';
    let usedInputsCount = 0;
    seedInputs.forEach(input => {
      const inputValue = input.value.trim();
      if (inputValue !== '') {
        resultString += `${inputValue} `;
        usedInputsCount++;
      }
    });
    // if (usedInputsCount !== 12) {
    //   return toast.error('Wrong seed phrase', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    // })
    // }
    resultString = resultString.trim();

    const isSeed = validateMnemonic(resultString);
    if(!isSeed) {
      return toast.error('Wrong seed phrase', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
    } else {
    
      const mnemonicas = resultString
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
      await addToAccount('firststart', true);
      await addToAccount('isImport', true);
      await load(2);
    }
  }

  useEffect(() => {
    async function createWallet() {
      // const result = await getAccount();
      // const { seed } = result;
      // if(seed != null) return load(4);
    
      // const mnemonicas = window.bitcoin.bip39.generateMnemonic();
      // const derivePath = "m/44'/501'/0'/0'"
      // const seedx = await window.bitcoin.bip39.mnemonicToSeed(mnemonicas)
      // const masterNode = window.bitcoin.bip32.fromSeed(seedx);
      // const derivedKey = masterNode.derivePath(derivePath);
      // let KEYPAIRS = Keypair.fromSeed(derivedKey.__D);
    
      // const publicKey = KEYPAIRS.publicKey.toString();
      // await addToAccount('seed', mnemonicas);
      // await addToAccount('addr_sol', publicKey);
      // await addToAccount('balances', defaults.balances);
      // await addToAccount('prices', defaults.prices);
      // await addToAccount('percents', defaults.percents);
      // const splittedSeed = await mnemonicas.split(' ');
      // updateData(await splittedSeed);
    }
    createWallet();
  }, [])
  if (screen.current != 'import') return null;
  return (
    <div className="wrapper">
      <div className="content">
        <div className="create-password">

        <Header screen="import"/>

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

          <h1 className="title title--middle">
            Secret Backup Phrase
          </h1>

          <p className="text">
            Write or paste here your secret (seed) phrase for wallet recovery.
          </p>

          <form className="create-password__form form" action="#">
            <ul className="form__words">
              <li className="form__seed__word">                  <input type="seed" className="form__seed__input" id="address1" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address2" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address3" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address4" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address5" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address6" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address7" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address8" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address9" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address10" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address11" /> </li>
              <li className="form__seed__word">                  <input type="seed"  className="form__seed__input" id="address12" /> </li>
            </ul>

            {/* УБРАТЬ вставки кошелька и сидки СЛИ НУЖНО ЗАРЕГАТЬ НОВЫЙ КОШЕЛЕК А НЕ ДЛЯ ТЕСТИРОВАНИЯ БРАТЬ */}
            <button type="submit" onClick={async () => { await resetWallet(); }} className="form__btn btn">IMPORT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StepThreeImportWallet;