import Header from "../Header";

function StepSixteen() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <h1 className="title title--mini">Settings</h1>

        <div className="settings">
          <div className="settings__links">
            <a className="settings__link" href="#">
              <img className="settings__link-icon" width="20" height="20" src="./img/icons/mdi_account.svg" alt="account icon" />

              Manage accounts
            </a>

            <a className="settings__link" href="#">
              <img className="settings__link-icon" width="20" height="20" src="./img/icons/healthicons_ui-preferences.svg" alt="Preferences icon" />

              Preferences
            </a>

            <a className="settings__link" href="#">
              <img className="settings__link-icon" width="20" height="20" src="./img/icons/wpf_key-security.svg" alt="key icon" />

              Security & Privacy
            </a>
          </div>
        </div>

      </div>
        
      <a className="btn btn--footer" href="#">CLOSE</a>
    </div>
  )
}

export default StepSixteen;