/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import screen from "../../main";
import load from "../../functions/loader";
import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';

function StepTwentyFive() {
    
  if (screen.current != 25) return null;

  return (
    <div>
      <Fade cascade duration={500}>
        <div className="wrapper">
          <Header show="5" actionType="settings" />

          <div className="content">
            <div className="live-chat">
              <div className="live-chat__header">
                <h1 className="title title--mini">24/7 Live Chat Support</h1>

                <a className="live-chat__open" href="#">
                  <span>Open Chat</span>
                  <img src="./img/icons/fluent_chat-12-regular.svg" alt="chat icon" />
                </a>
              </div>

              <div className="live-chat__popular">
                <p className="live-chat__label">Popular Questions:</p>

                <ul className="live-chat__popular-list">
                  <li className="live-chat__popular-item">
                    <a className="live-chat__popular-link" href="#">
                      <img src="./img/icons/mingcute_calendar-line.svg" alt="calendar icon" />

                      <span>Undelegate periods</span>
                    </a>
                  </li>

                  <li className="live-chat__popular-item">
                    <a className="live-chat__popular-link" href="#">
                      <img src="./img/icons/grommet-icons_connect.svg" alt="connect icon" />

                      <span>The wallet does not connect</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="live-chat__links">
                <p className="live-chat__label">Links:</p>

                <ul className="live-chat__links-list">
                  <li className="live-chat__links-item">
                    <a className="live-chat__links-link" href="#">
                      <div className="live-chat__links-icon">
                        <img src="./img/icons/mdi_web.svg" alt="Website" />
                      </div>
                      <span>Website</span>
                    </a>
                  </li>

                  <li className="live-chat__links-item">
                    <a className="live-chat__links-link" href="#">
                      <div className="live-chat__links-icon">
                        <img src="./img/icons/mdi_twitter.svg" alt="Twitter" />
                      </div>
                      <span>Twitter</span>
                    </a>
                  </li>

                  <li className="live-chat__links-item">
                    <a className="live-chat__links-link" href="#">
                      <div className="live-chat__links-icon">
                        <img src="./img/icons/bxl_telegram.svg" alt="Telegram" />
                      </div>
                      <span>Telegram</span>
                    </a>
                  </li>

                  <li className="live-chat__links-item">
                    <a className="live-chat__links-link" href="#">
                      <div className="live-chat__links-icon">
                        <img src="./img/icons/bxl_telegram.svg" alt="Telegram" />
                      </div>
                      <span>Community</span>
                    </a>
                  </li>
                </ul>
              </div>

              <a className="live-chat__btn" href="#">
                <span>Rate us on</span>
                <img src="./img/trustpilot-logo.png" alt="trustpilot-logo icon" />
              </a>
            </div>
          </div>

          {/* <Footer showWallet={true} showActivity={true} showDashboard={false} activeItem="wallet" /> */}
        </div>
      </Fade>
    </div>
  );
}

export default StepTwentyFive;