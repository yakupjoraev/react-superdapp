function StepTwo() {
return (
<div className="wrapper">
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

    <div className="content">
      <h1 className="title">
        CREATE<br />
        PASSWORD
      </h1>

      <form className="create-password__form form" action="#">
        <div className="form__group">
          <label className="form__label" htmlFor="input1">New password (minimum 8 characters)</label>

          <div className="form__input-wrapper">
            <img className="form__icon" src="/img/icons/lock.svg" alt="lock icon" />
            <input className="form__input" id="input1" type="password" placeholder="Password" />
          </div>
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="input2">Confirm password</label>

          <div className="form__input-wrapper">
            <img className="form__icon" src="/img/icons/lock.svg" alt="lock icon" />
            <input className="form__input" id="input2" type="password" placeholder="Repeat Password" />
          </div>
        </div>

        <a className="form__secret" href="#">Import with secret phrase</a>

        <button type="submit" className="form__btn btn">CREATE</button>
      </form>
    </div>

  </div>
</div>
)
}

export default StepTwo;