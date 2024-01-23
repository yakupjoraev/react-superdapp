/* eslint-disable no-unused-vars */
import Header from "../Header";
import load from "../../functions/loader";
import screen from "../../main";
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { getAccount, addToAccount } from "../../systems/storage/store";

function StepNineteen() {
  if (screen.current != 19) return null;
return (
<div className="wrapper">
<Header actionType="back" />

  <div className="content">
    <h1 className="title title--mini">Preferences</h1>

    <div className="settings">
      <form className="settings__form form" action="#">
        <div className="form__groups">

          <div className="form__group">
            <label className="form__label" htmlFor="">Language</label>

            <div className="form__input form__block">
              <div className="form__pic">
                <img className="form__pic-icon" width="32" height="32" src="./img/circle-flags_uk.svg"
                  alt="circle-flags_uk icon" />
              </div>

              <div className="form__infos">
                <p className="form__info text--grey">English</p>
              </div>

              <div className="form__right">
                <button type="button" className="form__right-btn">
                  <img src="./img/icons/form-arrow.svg" alt="form-arrow" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>


  </div>

  <a onClick={() => {load(16)}} className="btn btn--footer" href="#">BACK</a>
</div>
)
}

export default StepNineteen;