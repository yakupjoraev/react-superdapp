/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import load from "../../functions/loader";
import screen from "../../main";

import { Fade } from "react-awesome-reveal";

function StepOne() {
  if (screen.current != 1) return null;
  return (
    <div className="wrapper">
      <div className="start-screen">
      <Fade duration={2500}>
        <div>
        <img className="start-screen__img" src="./img/logo.svg" alt="logo" />
      </div>
      </Fade>
      <Fade duration={4000}>
        <h1 className="title">
          WELCOME<br />
          TO  <i>super</i>
        </h1>
        </Fade>
        <p className="text">
        Super Browser Extension it's a secure wallet that allows you to store, withdraw and deposit cryptocurrencies from your browser.
        </p>

        {/* <a className="btn" onClick={() => { load(2) }} href="#">START</a> */}
        <a className="btn" onClick={() => { load(2) }}  href="#"><b>Create new wallet</b></a>
        <a onClick={() => { load('import') }} className="btn--transparent " href="#">Import wallet</a>

        <div className="start-screen__footer">
           built on   <a className="start-screen__footer-link" href="#">XBANKING</a>
        </div>
      </div>
    </div>
  )
}

export default StepOne;