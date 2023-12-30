import Header from "../Header";

function StepNine() {
  return (
    <div className="wrapper">
      <Header/>

      <div className="content">
      <div className="staking">
          <h1 className="title title--mini">Staking & Pools</h1>

          <form action="#" className="staking__form form">
            <div className="form__groups">
              <div className="form__group">
                <div className="form__input-wrapper form__input-wrapper--right">
                  <button type="button" className="form__icon form__input-copy">
                    <img  src="./img/icons/copy.svg" alt="copy icon" />
                  </button>
                  <input className="form__input" id="" type="text" placeholder="" value="UQB04pmTn...PiUyg6jk9RQQuDfA6YGP" />
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
                  </div>

                  <div className="form__right">
                    <p className="form__right-text text">24% APR</p>
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

              <div className="form__group">
                <label className="form__label" htmlFor="">Amount</label>

                <div className="form__input form__block">
                  <div className="form__pic">
                    <img className="form__pic-icon" width="14" height="23" src="./img/ethereum.svg" alt="ethereum icon" />
                  </div>

                  <div className="form__infos">
                    <p className="form__info text">0.002568 ETH</p>
                    <p className="form__info text--grey">$2463.12 USD</p>
                  </div>

                  <div className="form__right">
                    <p className="form__right-text text--grey">MAX</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="form__income">
              <p className="form__income-label">Income:</p>

              <div className="form__income-row">
                <p className="form__income-text text">Daily yield</p>
                <div className="form__income-dots"></div>
                <p className="form__income-text text">0.26187 ETH</p>
              </div>

              <div className="form__income-row">
                <p className="form__income-text text">Monthly yield</p>
                <div className="form__income-dots"></div>
                <p className="form__income-text text">03518 ETH</p>
              </div>

              <div className="form__income-row">
                <p className="form__income-text text">Annual yield</p>
                <div className="form__income-dots"></div>
                <p className="form__income-text text">0.62734 ETH</p>
              </div>
            </div>
          </form>

          <div className="send__footer">
            <a className="send__back" href="#">Close</a>
            <a className="btn" href="#">CONFIRM</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepNine;