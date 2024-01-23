/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { klu4 } from "../../systems/storage/store";
import load from "../../functions/loader";
import screen from "../../main";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import defaults from "../../crypto/defaults";
function StepThreeImportWallet() {
  const [data, updateData] = useState([]);

  useEffect(() => {
    async function createWallet() {
      const result = await getAccount();
      const { seed } = result;
      if(seed != null) return load(4);
    
      const mnemonicas = window.bitcoin.bip39.generateMnemonic();
      const derivePath = "m/44'/501'/0'/0'"
      const seedx = await window.bitcoin.bip39.mnemonicToSeed(mnemonicas)
      const masterNode = window.bitcoin.bip32.fromSeed(seedx);
      const derivedKey = masterNode.derivePath(derivePath);
      let KEYPAIRS = Keypair.fromSeed(derivedKey.__D);
    
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
      <div className="content">
        <div className="create-password">

          <h1 className="title title--middle">
            Secret Backup Phrase
          </h1>

          <p className="text">
            Write or paste here your secret (seed) phrase for wallet recovery.
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

            {/* УБРАТЬ вставки кошелька и сидки СЛИ НУЖНО ЗАРЕГАТЬ НОВЫЙ КОШЕЛЕК А НЕ ДЛЯ ТЕСТИРОВАНИЯ БРАТЬ */}
            <button type="submit" onClick={async () => {load(4); await addToAccount('firststart', true); await addToAccount('seed', "rally color large soda bread need decorate super worry cup slam crouch"); await addToAccount('addr_sol', '8G9jRkMei7tMdM5n3jzRoDAJ15peDU6oL1oyMHGTYGgY'); }} className="form__btn btn">IMPORT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StepThreeImportWallet;