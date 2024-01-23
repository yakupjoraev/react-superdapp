import screen from "../../main";
import load from "../../functions/loader";
function StepFour() {
  if (screen.current != 4) return null;
  return (
  <div className="wrapper">
    <div className="content">
      <div className="create-password">
        <div className="create-password__steps">
          <div className="create-password__step-line active"></div>

          <div className="create-password__step active">
            <div className="create-password__step-num">
              <img src="./img/icons/check.svg" alt="check icon" />
            </div>
            <p className="create-password__step-text">Create <br /> Password</p>
          </div>

          <div className="create-password__step-line create-password__step-line--second active"></div>

          <div className="create-password__step active">
            <div className="create-password__step-num">
              <img src="./img/icons/check.svg" alt="check icon" />
            </div>
            <p className="create-password__step-text">Secure <br /> Wallet</p>
          </div>

          <div className="create-password__step-line create-password__step-line--second active"></div>

          <div className="create-password__step active">
            <div className="create-password__step-num">
              <img src="./img/icons/check.svg" alt="check icon" />
            </div>
            <p className="create-password__step-text">Confirm <br /> Protection</p>
          </div>

          <div className="create-password__step-line active"></div>
        </div>

        <img className="create-password__pic" src="./img/create-password-done.png" width="182" height="182"
          alt="create-password done pic" />
        <h1 className="title title--middle">
          CONGRATULATION
        </h1>

        <p className="text">
          You’ve successfully protected your wallet. Remember to keep your Secret Recovery Phrase safe, it’s your
          responsibility
        </p>

        <form className="create-password__form form" action="#">
          <button type="submit" onClick={async() => { await load(5); }}  className="btn">DONE</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default StepFour;