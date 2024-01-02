import Header from "../Header";

function StepSeven() {
  return (
    <div className="wrapper">
      <Header/>

      <div className="content">
        <div className="send">
          <h1 className="title title--mini">
            Receive
          </h1>

          <div className="send__qr">
            <img className="send__qr-pic" width="144" height="144" src="./img/qr.png" alt="qr" />
          </div>

          <form className="send__form form" action="#">
            <div className="form__groups">
              <div className="form__group">
                <div className="form__input-wrapper form__input-wrapper--right">
                  <button type="button" className="form__icon form__input-copy">
                    <img  src="./img/icons/copy.svg" alt="copy icon" />
                  </button>
                  <input className="form__input" type="text" value="UQB04pmTn...PiUyg6jk9RQQuDfA6YGP" />
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="">Asset</label>

                <div className="form__input form__block">
                  <div className="form__pic">
                    <img className="form__pic-icon" width="14" height="23" src="./img/ethereum.svg" alt="ethereum icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text">Ethereum</p>
                    <p className="form__info text--grey">Balance: 0.002568 ETH</p>
                  </div>

                  <div className="form__right">
                    <button type="button" className="form__right-btn">
                      <img src="./img/icons/form-arrow.svg" alt="form-arrow" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="">Select Network</label>

                <div className="form__input form__block">
                  <div className="form__pic">
                    <img className="form__pic-icon" width="32" height="32" src="./img/bitcoin.svg" alt="bitcoin icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text">BNB Smart Chain</p>
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

          <div className="send__footer">
            <a className="btn" href="#">CLOSE</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default StepSeven;