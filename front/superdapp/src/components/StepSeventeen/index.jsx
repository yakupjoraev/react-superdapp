/* eslint-disable no-unused-vars */
import Header from "../Header";
import load from "../../functions/loader";
import screen from "../../main";
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { getAccount, addToAccount } from "../../systems/storage/store";

function StepSeventeen() {
  if (screen.current != 17) return null;
  async function later() {
    toast.info('Soon', {
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
return (
<div className="wrapper">
<Header actionType="back" />

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

  <div className="content">
    <h1 className="title title--mini">Manage accounts</h1>

    <div className="settings">
      <form className="settings__form form" action="#">
        <div className="form__accounts">
          <div className="form__account">
            <img className="form__account-icon" width="24" height="24" src="./img/icons/mdi_account.svg"
              alt="account icon" />

            <input className="form__account-input" type="text" value="wallet" disabled />

            <button onClick={later} type="button" className="form__account-btn">
              <img className="form__account-btn-icon" width="24" height="24" src="./img/icons/material-symbols_edit.svg"
                alt="pen icon" />
            </button>
          </div>
        </div>

        <button onClick={later} type="button" className="form__btn--add">
          <img width="24" height="24" src="./img/icons/outline-plus.svg" alt="outline-plus icon" />

          Add/New account
        </button>
      </form>
    </div>


  </div>

  <a onClick={() => {load(16)}} className="btn btn--footer" href="#">BACK</a>
</div>
)
}

export default StepSeventeen;