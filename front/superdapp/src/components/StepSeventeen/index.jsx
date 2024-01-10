import Header from "../Header";

function StepSeventeen() {
return (
<div className="wrapper">
<Header actionType="back" />

  <div className="content">
    <h1 className="title title--mini">Manage accounts</h1>

    <div className="settings">
      <form className="settings__form form" action="#">
        <div className="form__accounts">
          <div className="form__account">
            <img className="form__account-icon" width="24" height="24" src="./img/icons/mdi_account.svg"
              alt="account icon" />

            <input className="form__account-input" type="text" value="Account 1" disabled />

            <button type="button" className="form__account-btn">
              <img className="form__account-btn-icon" width="24" height="24" src="./img/icons/material-symbols_edit.svg"
                alt="pen icon" />
            </button>
          </div>
        </div>

        <button type="button" className="form__btn--add">
          <img width="24" height="24" src="./img/icons/outline-plus.svg" alt="outline-plus icon" />

          Add/New account
        </button>
      </form>
    </div>


  </div>

  <a className="btn btn--footer" href="#">CLOSE</a>
</div>
)
}

export default StepSeventeen;