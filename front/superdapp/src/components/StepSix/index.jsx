import Header from "../Header";

function StepSix() {
  return (
    <div className="wrapper">
      <Header/>

      <div className="content">
        <div className="send">
          <h1 className="title title--mini">
            SEND
          </h1>

          <form className="send__form form" action="#">
            <div className="form__groups">
              <div className="form__group">
                <label className="form__label" htmlFor="">Address</label>

                <div className="form__input-wrapper">
                  <img className="form__icon" src="/img/icons/link-outline.svg" alt="link-outline icon" />
                  <input className="form__input" id="" type="email" placeholder="Enter address" />
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="">Asset</label>

                <div className="form__input form__block">
                  <div className="form__pic">
                    <img className="form__pic-icon" width="14" height="23" src="/img/ethereum.svg" alt="ethereum icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text">Ethereum</p>
                    <p className="form__info text--grey">Balance: 0.002568 ETH</p>
                  </div>

                  <div className="form__right">
                    <button type="button" className="form__right-btn">
                      <img src="/img/icons/form-arrow.svg" alt="form-arrow" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="">Select Network</label>

                <div className="form__input form__block">
                  <div className="form__pic">
                    <img className="form__pic-icon" width="32" height="32" src="/img/bitcoin.svg" alt="bitcoin icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text">BNB Smart Chain</p>
                  </div>

                  <div className="form__right">
                    <button type="button" className="form__right-btn">
                      <img src="/img/icons/form-arrow.svg" alt="form-arrow" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="">Amount</label>

                <div className="form__input form__block">
                  <div className="form__pic">
                    <img className="form__pic-icon" width="14" height="23" src="/img/ethereum.svg" alt="ethereum icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text">0.002568 ETH</p>
                    <p className="form__info text--grey">$2463.12 USD</p>
                  </div>

                  <div className="form__right">
                    <p className="form__right-text text--grey">MAX</p>
                  </div>
                </div>

                <p className="form__transaction">Transaction fee: 0.000234 ETH ($12.74)</p>
              </div>
            </div>
          </form>

          <div className="send__footer">
            <a className="send__back" href="#">Cancel</a>
            <a className="btn" href="#">SEND</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default StepSix;