/* eslint-disable no-unused-vars */
import Header from "../Header";
import screen from "../../main";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL, SystemProgram, sendAndConfirmTransaction, PublicKey,
Transaction } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import * as buffer from "buffer";
import load from "../../functions/loader";
import { ToastContainer, toast } from 'react-toastify';
import defaults, {truncateNumberDefault} from "../../crypto/defaults";
import { Fade } from "react-awesome-reveal";
import { send_sol } from "../../crypto/sol/transfer";
window.Buffer = buffer.Buffer;
function StepSix() {

  const [isFormTokensActive, setFormTokensActive] = useState(false);
  const [balances, updateBalances] = useState(defaults.balances);
  const [sending, setSending] = useState(false);
  const [percents, setPercents] = useState(defaults.percents);
  const [tokenBalance_usd, updateTokenBalance_usd] = useState(0);
  const [prices, setPrices] = useState(defaults.prices);
  const [currentToken, setToken] = useState({});
  const [tokenName, setTokenName] = useState('sol')
  const [loading, setLoading] = useState(false);

    
  function calcPerc(inp) {
    const inputsumm = parseFloat(inp);
    if (inp == '' || inp == ' ' || inputsumm <= 0 || isNaN(inp) || inp == 'NaN') {
      updateTokenBalance_usd(truncateNumberDefault(prices[0]?.[tokenName]?.usd))
      setSending(true);
      return;
    }
    setSending(false);
    updateTokenBalance_usd(truncateNumberDefault(inputsumm * prices[0]?.[tokenName]?.usd))
  }


    useEffect(() => {
      async function setBalances() {
        const result = await getAccount();
        updateBalances(result.balances);
        setPrices(result.prices);
        setPercents(result.percents);
        setToken(result.balances[0].sol);
        setTokenName('sol')
      }
      setBalances()
    }, [])

    function setmax() {
      const inputel = document.getElementById('amount');
      const tokenobj = balances[0][tokenName.toLowerCase()];
      if(tokenobj.contract != 'solana') {
        inputel.value = parseFloat(tokenobj.balance);
      } else {
        inputel.value = parseFloat(tokenobj.balance - 0.000005);
      }
    }

    const handleCallFormTokensClick = () => {
      setFormTokensActive(true);
    };
    const handleFormTokensCloseClick = () => {
      setFormTokensActive(false);
    };
    const handleWalletTokenClick = (tokenName, tokenData) => {
      setFormTokensActive(false);
      setTokenName(tokenName);
      setToken(tokenData);
    };

    async function sendnow() {
      setSending(true);
      setLoading(true);
      try {
        const address = document.getElementById("address").value.toString();
        const value = parseFloat(document.getElementById("amount").value.toString());
        const contract = currentToken.contract;
        const decimals = currentToken.decimals;
        if(isNaN(value)) {
          setSending(false);
          setLoading(false);
          return;
        }
        if(value == 0) {
          setSending(false);
          setLoading(false);
          return;
        }
        if(sending == false) {
          if(currentToken.chain == 'solana') {
            await send_sol(value, address, contract, decimals)
          }
          setLoading(false);
          await load(14)
        } else {
          return;
        }
      } catch(e) {
        setSending(false);
        setLoading(false);
        console.error(e)
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
            {loading && <Loading />}
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
                        <img className="form__pic-icon" width="24" height="23" src={currentToken.image} alt="ethereum icon" />
                      </div>

                      <div className="form__infos">
                        <p className="form__info text">{tokenName.toUpperCase()}</p>
                        <p className="form__info text--grey">Balance: {currentToken.balance} {tokenName.toUpperCase()}</p>
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

                    {balances.length > 0 &&
                Object.entries(balances[0]).map(([tokenName, tokenData], index) => (
                  tokenName !== "summ" && tokenData.image !== undefined && tokenData.image !== null && (
                      <div key={index} className="wallet__token" onClick={() => {handleWalletTokenClick(tokenName, tokenData)}}>
                      <div className="wallet__token-infos">
                        <div className="wallet__token-pic">
                          <img src={tokenData.image} width="24" height="23" alt={tokenName} />
                        </div>
                        <div className="wallet__token-info">
                          <p className="wallet__token-name text">{tokenName.toUpperCase()}</p>
                          <div className="wallet__token-bottom">
                            <div className="wallet__token-count text--grey">${truncateNumberDefault(prices[0]?.[tokenName]?.usd) || 0}</div>
                            {percents[0] && percents[0][tokenName] !== undefined && (
                              <div className="wallet__token-percent yellow">
                                {truncateNumberDefault(percents[0][tokenName].percent)}%
                                <img className="wallet__token-arrow" src={`./img/icons/percent-${percents[0][tokenName].percent < 0 ? 'down' : 'up'}.svg`} alt="" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="wallet__token-sums">
                        <p className="wallet__token-sum text">{truncateNumberDefault(tokenData.balance)}</p>
                        <p className="wallet__token-sum text--grey">${truncateNumberDefault(tokenData.usd) || 0}</p>
                      </div>
                    </div>
                  )
                  ))}

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
                        <img className="form__pic-icon" width="24" height="23" src={currentToken.image} alt="ethereum icon" />
                      </div>

                      <div className="form__infos">
                        <input onChange={(e) => calcPerc(e.target.value)} className="form__input_summ" id="amount" placeholder="Enter amount" />
                        <p className="form__info text--grey">${tokenBalance_usd} USD</p>
                      </div>

                      <div className="form__right">
                        <p onClick={setmax} id="max" className="form__right-text text--grey">MAX</p>
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