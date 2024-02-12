/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import screen from "../../main";
import load from "../../functions/loader";
import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';

function StepTwentyFour() {
    
  if (screen.current != 24) return null;

  return (
    <div>
      <Fade cascade duration={500}>
        <div className="wrapper">
          <Header show="5" actionType="settings" />

          <div className="content">
            <div className="sol">
              <div className="sol__header">
                <div className="sol__top">
                  <h1 className="title title--mini">SOLANA</h1>
                  <p className="sol__top-sum">0.11011 SOL</p>
                </div>
                <div className="sol__btns">
                  <button type="button" className="sol__btn sol__btn--yellow">
                    <span>Deposit</span>
                    <img src="./img/icons/arrow-top-black.svg" alt="arrow top icon" />
                  </button>

                  <button type="button" className="sol__btn sol__btn--dark">
                    <span>Send</span>
                    <img src="./img/icons/arrow-bottom-white.svg" alt="arrow bottom icon" />
                  </button>
                </div>
              </div>

              <div className="sol__banner">
                <div className="sol__banner-icon">
                  <img src="./img/game-icons_coins.svg" alt="icon" />
                </div>

                <div className="sol__banner-info">
                  <p className="sol__banner-label">Start staking SOL</p>
                  <p className="sol__banner-text">Stake tokens and earn rewards</p>
                </div>
              </div>

              <div className="sol__actives">
                <div className="sol__actives-data">12.02.2024</div>

                <div className="sol__active">
                  <div className="sol__info">
                    <div className="sol__info-picture">
                      <div className="sol__info-icon">
                        <img width="22" height="22" src="./img/formkit_solana.svg" alt="token icon" />
                      </div>

                      <div className="sol__info-xwallet">
                        <img width="16" height="16" src="./img/xwallet-icon.svg" alt="xwallet icon" />
                      </div>
                    </div>
                    <div className="sol__info-texts">
                      <p className="sol__info-text text">Swapped</p>
                      <p className="sol__info-text text--grey yellow">Confirmed</p>
                    </div>
                  </div>
                  <div className="sol__sums">
                    <div className="sol__sum text yellow">+88.68231 XB</div>
                    <div className="sol__sum text--grey">-0.1 SOL</div>
                  </div>
                </div>

                <div className="sol__active">
                  <div className="sol__info">
                    <div className="sol__info-picture">
                      <div className="sol__info-icon">
                        <img width="22" height="22" src="./img/formkit_solana.svg" alt="token icon" />
                      </div>

                      <div className="sol__info-xwallet">
                        <img width="16" height="16" src="./img/xwallet-icon.svg" alt="xwallet icon" />
                      </div>
                    </div>
                    <div className="sol__info-texts">
                      <p className="sol__info-text text">Swapped</p>
                      <p className="sol__info-text text--grey yellow">Confirmed</p>
                    </div>
                  </div>
                  <div className="sol__sums">
                    <div className="sol__sum text yellow">+88.68231 XB</div>
                    <div className="sol__sum text--grey">-0.1 SOL</div>
                  </div>
                </div>

                <div className="sol__active">
                  <div className="sol__info">
                    <div className="sol__info-picture">
                      <div className="sol__info-icon">
                        <img width="22" height="22" src="./img/formkit_solana.svg" alt="token icon" />
                      </div>

                      <div className="sol__info-xwallet">
                        <img width="16" height="16" src="./img/xwallet-icon.svg" alt="xwallet icon" />
                      </div>
                    </div>
                    <div className="sol__info-texts">
                      <p className="sol__info-text text">Swapped</p>
                      <p className="sol__info-text text--grey yellow">Confirmed</p>
                    </div>
                  </div>
                  <div className="sol__sums">
                    <div className="sol__sum text yellow">+88.68231 XB</div>
                    <div className="sol__sum text--grey">-0.1 SOL</div>
                  </div>
                </div>

                <div className="sol__active">
                  <div className="sol__info">
                    <div className="sol__info-picture">
                      <div className="sol__info-icon">
                        <img width="22" height="22" src="./img/formkit_solana.svg" alt="token icon" />
                      </div>

                      <div className="sol__info-xwallet">
                        <img width="16" height="16" src="./img/xwallet-icon.svg" alt="xwallet icon" />
                      </div>
                    </div>
                    <div className="sol__info-texts">
                      <p className="sol__info-text text">Swapped</p>
                      <p className="sol__info-text text--grey yellow">Confirmed</p>
                    </div>
                  </div>
                  <div className="sol__sums">
                    <div className="sol__sum text yellow">+88.68231 XB</div>
                    <div className="sol__sum text--grey">-0.1 SOL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer showWallet={true} showActivity={true} showDashboard={false} activeItem="wallet" />
        </div>
      </Fade>
    </div>
  );
}

export default StepTwentyFour;