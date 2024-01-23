/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import load from "../../functions/loader";
import screen from "../../main";
import { ToastContainer, toast } from 'react-toastify';
import { Fade } from "react-awesome-reveal";
import { getAccount } from "../../systems/storage/store";
import { useEffect, useState } from "react";

function LockScreen() {
  const [account, getAcc] = useState()
  useEffect(() => {
    async function start() {
        getAcc(await getAccount());
    }
    start()
  })
  if (screen.current != 'lock') return null;
  return (
    <div className="wrapper">
            <div>
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
      </div>
      <div className="start-screen">
      <Fade duration={2500}>
        <div>
        <img className="start-screen__img" src="./img/logo.svg" alt="logo" />
      </div>
      </Fade>

        <h1 className="title">
          WELCOME<br />
          TO  <i>super</i>
        </h1>

        <div className="form__input-wrapper">
        <img className="form__icon" src="./img/icons/password.svg" alt="link-outline icon" />
                  <input className="form__input" id="address" placeholder="Enter your password" />
                </div>
              
&nbsp;
        <a className="btn" onClick={() => { 
            console.log(account.value)
            console.log(document.getElementById('address').value)
            if(document.getElementById('address').value != account.value) {
                return toast.error('Wrong password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            load(5) 
        }} href="#">UNLOCK</a>

        <div className="start-screen__footer">
           built on   <a className="start-screen__footer-link" href="#">XBANKING</a>
        </div>
      </div>
    </div>
  )
}

export default LockScreen;