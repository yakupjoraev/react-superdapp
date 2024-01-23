/* eslint-disable no-unused-vars */
import Header from "../Header";
import load from "../../functions/loader";
import screen from "../../main";
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { getAccount, addToAccount } from "../../systems/storage/store";
function StepEighteen() {
  if (screen.current != 18) return null;
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
    <h1 className="title title--mini">Security & Privacy</h1>

    <div className="settings">
      <form className="settings__form form" action="#">
        <div className="form__privacy">
        <a onClick={() => {load('3out')}} className="btn btn--footer" href="#">Show seed phrase</a>
        </div>

        <button  onClick={later} type="button" className="form__btn--reset">Reset App</button>
      </form>
    </div>


  </div>

  <a onClick={() => {load(16)}} className="btn btn--footer" href="#">BACK</a>
</div>
)
}

export default StepEighteen;