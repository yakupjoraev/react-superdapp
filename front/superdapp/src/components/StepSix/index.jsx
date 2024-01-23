/* eslint-disable no-unused-vars */
import Header from "../Header";
import screen from "../../main";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL, SystemProgram, sendAndConfirmTransaction, PublicKey,
Transaction } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import * as buffer from "buffer";
import load from "../../functions/loader";
import { ToastContainer, toast } from 'react-toastify';
import defaults from "../../crypto/defaults";
import { Fade } from "react-awesome-reveal";
window.Buffer = buffer.Buffer;
function StepSix() {


    // Состояние для отслеживания видимости form__tokens
    const [isFormTokensActive, setFormTokensActive] = useState(false);

    // Обработчик клика на элементе с классом call-form-tokens
    const handleCallFormTokensClick = () => {
      setFormTokensActive(true);
    };
  
    // Обработчик клика на элементе с классом form__tokens-close
    const handleFormTokensCloseClick = () => {
      setFormTokensActive(false);
    };
  
    // Обработчик клика на элементе с классом wallet__token
    const handleWalletTokenClick = () => {
      setFormTokensActive(false);
    };



const [balances, updateBalances] = useState(defaults.balances);
const [sending, setSending] = useState(false);
useEffect(() => {
async function setBalances() {
const result = await getAccount();
updateBalances(result.balances);
}
setBalances()
}, [])

async function sendnow() {
setSending(true);
const connection = new Connection(
'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
'confirmed',
);
const result = await getAccount();
const derivePath = "m/44'/501'/0'/0'"
const sd = await window.bitcoin.bip39.mnemonicToSeed(result.seed)
const masterNode = window.bitcoin.bip32.fromSeed(sd);
const derivedKey = masterNode.derivePath(derivePath);
const keypairs = Keypair.fromSeed(derivedKey.__D);
try {
const address = document.getElementById("address").value.toString();
const value = document.getElementById("amount").value.toString();
const ammo = parseFloat(value) * 1000000000;
if(isNaN(ammo)) return setSending(false);
if(ammo == 0) return setSending(false);
if(sending == false) {
const transaction = new Transaction().add(
SystemProgram.transfer({
fromPubkey: keypairs.publicKey,
toPubkey: new PublicKey(address),
lamports: ammo,
}),
);

const signature = await sendAndConfirmTransaction(
connection,
transaction,
[keypairs],
);
await load(14)
} else {
return;
}

} catch(e) {
setSending(false);
if(e.message.includes('public key')) {
return toast.warn('Invalid address', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
} else {
if(e.message.includes('NaN')) {
return toast.warn('Invalid amount', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
}
}
}


}
if (screen.current != 6) return null;
return (
<div>
  <Fade cascade duration={500}>

    <div className="wrapper">
      <Header screen="5" actionType="back" />

      <div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick
          rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </div>

      <div className="content">
        <h1 className="title title--mini">
          SEND
        </h1>

        <div className="send">
          <form className="send__form form" action="#">
            <div className="form__groups">
              <div className="form__group">
                <label className="form__label" htmlFor="">Address</label>

                <div className="form__input-wrapper">
                  <img className="form__icon" src="./img/icons/link-outline.svg" alt="link-outline icon" />
                  <input className="form__input" id="address" placeholder="Enter address" />
                </div>
              </div>

              <div className="form__group call-form-tokens" onClick={handleCallFormTokensClick}>
                <label className="form__label" htmlFor="">Asset</label>

                <div className="form__input form__block">
                  <div className="wallet__token-pic">
                    <img className="form__pic-icon" width="24" height="23" src="./img/solana.svg" alt="ethereum icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text">Solana</p>
                    <p className="form__info text--grey">Balance: {balances[0].sol.balance} SOL</p>
                  </div>

                  <div className="form__right">
                    <button type="button" className="form__right-btn">
                      <img src="./img/icons/form-arrow.svg" alt="form-arrow" />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`form__tokens ${isFormTokensActive ? 'active' : ''}`}>
                <div className="form__tokens-inner">
                  <div className="wallet__token" onClick={handleWalletTokenClick}>
                  <div className="wallet__token-infos">
                    <div className="wallet__token-pic">
                      <img src="./img/solana.svg" width="24" height="23" alt="sol" />
                    </div>
                    <div className="wallet__token-info">
                      <p className="wallet__token-name text">SOL</p>
                      <div className="wallet__token-bottom">
                        <div className="wallet__token-count text--grey">$79.55</div>
                        <div className="wallet__token-percent yellow">
                          -8.60%
                          <img className="wallet__token-arrow" src="./img/icons/percent-down.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wallet__token-sums">
                    <p className="wallet__token-sum text">0.05986</p>
                    <p className="wallet__token-sum text--grey">$4.76</p>
                  </div>
                </div>

                <div className="wallet__token" onClick={handleWalletTokenClick}>
                  <div className="wallet__token-infos">
                    <div className="wallet__token-pic">
                      <img src="./img/solana.svg" width="24" height="23" alt="sol" />
                    </div>
                    <div className="wallet__token-info">
                      <p className="wallet__token-name text">SOL</p>
                      <div className="wallet__token-bottom">
                        <div className="wallet__token-count text--grey">$79.55</div>
                        <div className="wallet__token-percent yellow">
                          -8.60%
                          <img className="wallet__token-arrow" src="./img/icons/percent-down.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wallet__token-sums">
                    <p className="wallet__token-sum text">0.05986</p>
                    <p className="wallet__token-sum text--grey">$4.76</p>
                  </div>
                </div>

                <div className="wallet__token" onClick={handleWalletTokenClick}>
                  <div className="wallet__token-infos">
                    <div className="wallet__token-pic">
                      <img src="./img/solana.svg" width="24" height="23" alt="sol" />
                    </div>
                    <div className="wallet__token-info">
                      <p className="wallet__token-name text">SOL</p>
                      <div className="wallet__token-bottom">
                        <div className="wallet__token-count text--grey">$79.55</div>
                        <div className="wallet__token-percent yellow">
                          -8.60%
                          <img className="wallet__token-arrow" src="./img/icons/percent-down.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wallet__token-sums">
                    <p className="wallet__token-sum text">0.05986</p>
                    <p className="wallet__token-sum text--grey">$4.76</p>
                  </div>
                </div>

                <div className="wallet__token" onClick={handleWalletTokenClick}>
                  <div className="wallet__token-infos">
                    <div className="wallet__token-pic">
                      <img src="./img/solana.svg" width="24" height="23" alt="sol" />
                    </div>
                    <div className="wallet__token-info">
                      <p className="wallet__token-name text">SOL</p>
                      <div className="wallet__token-bottom">
                        <div className="wallet__token-count text--grey">$79.55</div>
                        <div className="wallet__token-percent yellow">
                          -8.60%
                          <img className="wallet__token-arrow" src="./img/icons/percent-down.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wallet__token-sums">
                    <p className="wallet__token-sum text">0.05986</p>
                    <p className="wallet__token-sum text--grey">$4.76</p>
                  </div>
                </div>

                <div className="wallet__token" onClick={handleWalletTokenClick}>
                  <div className="wallet__token-infos">
                    <div className="wallet__token-pic">
                      <img src="./img/solana.svg" width="24" height="23" alt="sol" />
                    </div>
                    <div className="wallet__token-info">
                      <p className="wallet__token-name text">SOL</p>
                      <div className="wallet__token-bottom">
                        <div className="wallet__token-count text--grey">$79.55</div>
                        <div className="wallet__token-percent yellow">
                          -8.60%
                          <img className="wallet__token-arrow" src="./img/icons/percent-down.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wallet__token-sums">
                    <p className="wallet__token-sum text">0.05986</p>
                    <p className="wallet__token-sum text--grey">$4.76</p>
                  </div>
                </div>

                <div className="wallet__token" onClick={handleWalletTokenClick}>
                  <div className="wallet__token-infos">
                    <div className="wallet__token-pic">
                      <img src="./img/solana.svg" width="24" height="23" alt="sol" />
                    </div>
                    <div className="wallet__token-info">
                      <p className="wallet__token-name text">SOL</p>
                      <div className="wallet__token-bottom">
                        <div className="wallet__token-count text--grey">$79.55</div>
                        <div className="wallet__token-percent yellow">
                          -8.60%
                          <img className="wallet__token-arrow" src="./img/icons/percent-down.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wallet__token-sums">
                    <p className="wallet__token-sum text">0.05986</p>
                    <p className="wallet__token-sum text--grey">$4.76</p>
                  </div>
                </div>

                </div>
 
                <button className="form__tokens-close" onClick={handleFormTokensCloseClick}>&times;</button>
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

              <div className="form__group">
                <label className="form__label" htmlFor="">Amount</label>

                <div className="form__input form__block">
                  <div className="wallet__token-pic">
                    <img className="form__pic-icon" width="24" height="23" src="./img/solana.svg" alt="ethereum icon" />
                  </div>

                  <div className="form__infos">
                    <input className="form__input_summ" id="amount" placeholder="Enter amount" />
                    <p className="form__info text--grey">${balances[0].sol.usd} USD</p>
                  </div>

                  <div className="form__right">
                    <p className="form__right-text text--grey">MAX</p>
                  </div>
                </div>

                <p className="form__transaction">Transaction fee: 0.000005 SOL</p>
              </div>
            </div>
          </form>

        </div>

      </div>

      <div className="send__footer btn--footer">
        <a className={sending ? "btn_disabled" : "btn" } onClick={sendnow} href="#">SEND</a>
      </div>
    </div>
  </Fade>
</div>
)
}

export default StepSix;