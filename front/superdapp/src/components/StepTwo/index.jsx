/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import load from "../../functions/loader";
import screen from "../../main";
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { getAccount, addToAccount } from "../../systems/storage/store";
import { useState } from "react";

function StepTwo() {
  const [isImport, setImport] = useState(false);
  useEffect(() =>{
    async function start() {
      const account = await getAccount()
      if(account) {
        if(!account.isImport) {
          return load(3)
        } else {
          setImport(true);
        }
      }
    }
    start()
  }, [])
  if (screen.current != 2) return null;
  const validatePassword = password => {
    const re = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/
    return re.test(password)
  }
  return (
  <div className="wrapper">
    <div className="content">
    <div className="create-password">
      <div className="create-password__steps">
        <div className="create-password__step-line active"></div>

        <div className="create-password__step active">
          <div className="create-password__step-num">1</div>
          <p className="create-password__step-text">Create <br /> Password</p>
        </div>

        <div className="create-password__step-line create-password__step-line--second"></div>

        <div className="create-password__step">
          <div className="create-password__step-num">2</div>
          <p className="create-password__step-text">Secure <br /> Wallet</p>
        </div>

        <div className="create-password__step-line create-password__step-line--second"></div>

        <div className="create-password__step">
          <div className="create-password__step-num">3</div>
          <p className="create-password__step-text">Confirm <br /> Protection</p>
        </div>

        <div className="create-password__step-line"></div>
      </div>

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

        <h1 className="title">
          CREATE<br />
          PASSWORD
        </h1>

        <form className="create-password__form form" action="#">
          <div className="form__group">
            <label className="form__label" htmlFor="input1">New password (minimum 8 characters)</label>

            <div className="form__input-wrapper">
              <img className="form__icon" src="./img/icons/lock.svg" alt="lock icon" />
              <input className="form__input" id="password" type="password" placeholder="Password" />
            </div>
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="input2">Confirm password</label>

            <div className="form__input-wrapper">
              <img className="form__icon" src="./img/icons/lock.svg" alt="lock icon" />
              <input className="form__input" id="password2" type="password" placeholder="Repeat Password" />
            </div>
          </div>

          <a className="form__secret" href="#" onClick={() => { load('import') }}>Import with secret phrase</a>

          <button type="submit" onClick={async () => { 
            const value = document.getElementById("password").value.toString();
            const pass = validatePassword(value);
            if(!pass) return toast.warn('Password less than 8 characters', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            const key = 'value';
            await addToAccount(key, await value);
            if(isImport) {
              return await load(4);
            }
            await load(3) 
          }} 
            className="form__btn btn">CREATE</button>
        </form>
      </div>

    </div>
  </div>
  )
}

export default StepTwo;