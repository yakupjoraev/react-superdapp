/* eslint-disable no-unused-vars */
import Header from "../Header";
import load from "../../functions/loader";
import screen from "../../main";
import { useDispatch } from 'react-redux';
import { Fade, Zoom, Slide } from 'react-awesome-reveal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { getAccount, addToAccount } from "../../systems/storage/store";
function StepSixteen() {
  if (screen.current != 16) return null;
  return (
    <div>
    <Fade cascade duration={500}>
    <div className="wrapper">
     <Header actionType="back" />

      <div className="content">
        <h1 className="title title--mini">Settings</h1>

        <div className="settings">
          <div className="settings__links">
            <a  onClick={() => {load(17)}} className="settings__link" href="#">
              <img className="settings__link-icon" width="20" height="20" src="./img/icons/mdi_account.svg" alt="account icon" />

              Manage accounts
            </a>

            <a onClick={() => {load(19)}} className="settings__link" href="#">
              <img className="settings__link-icon" width="20" height="20" src="./img/icons/healthicons_ui-preferences.svg" alt="Preferences icon" />

              Preferences
            </a>

            <a onClick={() => {load(18)}} className="settings__link" href="#">
              <img className="settings__link-icon" width="20" height="20" src="./img/icons/wpf_key-security.svg" alt="key icon" />

              Security & Privacy
            </a>
          </div>
        </div>

      </div>
    </div>
    </Fade>
    </div>
  )
}

export default StepSixteen;