function StepThree() {
  return (
    <div className="wrapper">
      <div className="create-password">
          <div className="create-password__steps">
            <div className="create-password__step-line active"></div>

            <div className="create-password__step active">
              <div className="create-password__step-num">
                <img src="./img/icons/check.svg" alt="check icon" />
              </div>
              <p className="create-password__step-text">Create <br/> Password</p>
            </div>

            <div className="create-password__step-line create-password__step-line--second active"></div>

            <div className="create-password__step active">
              <div className="create-password__step-num">2</div>
              <p className="create-password__step-text">Secure <br/> Wallet</p>
            </div>

            <div className="create-password__step-line create-password__step-line--second"></div>

            <div className="create-password__step">
              <div className="create-password__step-num">3</div>
              <p className="create-password__step-text">Confirm <br/> Protection</p>
            </div>

            <div className="create-password__step-line"></div>
          </div>

          <div className="content">
             <h1 className="title">
            Secret Backup<br/>
            Phrase
          </h1>

          <p className="text">
            You secret backup phrase makes it easy to <br/>
            back up restore your account.
          </p>
          <p className="text text--yellow">
           Warning: Never disclose your backup phrase.  <br/>
           Anyone with this phrase can take your Ether forever.
          </p>

          <form className="create-password__form form" action="#">
            <ul className="form__words">
              <li className="form__word">Pretium</li>
              <li className="form__word">Mauris</li>
              <li className="form__word">Imperdiet</li>
              <li className="form__word">Erat</li>
              <li className="form__word">Nunc</li>
              <li className="form__word">Elit</li>
              <li className="form__word">Ut</li>
              <li className="form__word">Nunc</li>
              <li className="form__word">Nascetur</li>
              <li className="form__word">Euismod</li>
              <li className="form__word">Velit</li>
              <li className="form__word">Felis</li>
            </ul>

            <button type="button" className="form__copy">
              <p className="form__copy-text" >Copy full phrase</p>
              <img className="form__copy-pic" src="./img/icons/copy.svg" alt="copy icon" />
            </button>

            <button type="submit" className="form__btn btn">CONFIRM</button>
          </form>
          </div>
      </div>
    </div>
  )
}

export default StepThree;