import Header from "../Header";
import Footer from "../Footer";

function StepFive() {
  return (
    <div className="wrapper">
      <Header/>

      <div className="wallet">
        <div className="wallet__banners">
          <div className="wallet__banner">
            <p className="wallet__banner-text">50% discount!</p>
          </div>

          <div className="wallet__banner">
            <p className="wallet__banner-text">50% discount!</p>
          </div>

          <div className="wallet__banner">
            <p className="wallet__banner-text">50% discount!</p>
          </div>
        </div>

        <div className="wallet__invoice">
          <div className="wallet__invoice-sum">
            <span>$</span><span>17.474</span>
          </div>

          <div className="wallet__invoice-actions">
            <a className="wallet__invoice-action active" href="#">
              <img src="./img/icons/wallet-arrow-up.svg" alt="wallet-arrow-up" />

              <span>Send</span>
            </a>

            <a className="wallet__invoice-action" href="#">
              <img src="./img/icons/wallet-arrow-down.svg" alt="wallet-arrow-down" />

              <span>Recive</span>
            </a>

            <a className="wallet__invoice-action" href="#">
              <img src="./img/icons/wallet-arrow-coins.svg" alt="wallet-arrow-coins" />

              <span>Earn</span>
            </a>
          </div>
        </div>

        <div className="wallet__tokens">
          <div className="wallet__tokens-header">
            <p className="wallet__tokens-label">Tokens</p>
            <button type="button" className="wallet__tokens-sort">
              <img src="./img/icons/sort-solid.svg" alt="sort-solid" />
            </button>
          </div>

          <div className="wallet__token">
            <div className="wallet__token-infos">
              <div className="wallet__token-pic">
                <img src="./img/ethereum.svg" width="14" height="23" alt="ethereum" />
              </div>

              <div className="wallet__token-info">
                <p className="wallet__token-name text">Ethereum</p>
                <div className="wallet__token-bottom">
                  <div className="wallet__token-count text--grey">
                    $2.44
                  </div>

                  <div className="wallet__token-percent yellow">
                    +4.73%

                    <img className="wallet__token-arrow" src="./img/icons/percent-up.svg" alt="percent-up" />
                  </div>
                </div>
              </div>
            </div>

            <div className="wallet__token-sums">
              <p className="wallet__token-sum text">7,153.13</p>
              <p className="wallet__token-sum text--grey">$17,437.81</p>
            </div>
          </div>

          <div className="wallet__token">
            <div className="wallet__token-infos">
              <div className="wallet__token-pic">
                <img src="./img/bitcoin.svg" width="36" height="36" alt="Bitcoin" />
              </div>

              <div className="wallet__token-info">
                <p className="wallet__token-name text">Bitcoin</p>
                <div className="wallet__token-bottom">
                  <div className="wallet__token-count text--grey">
                    $64.723.12
                  </div>

                  <div className="wallet__token-percent red">
                    -1.22%

                    <img className="wallet__token-arrow" src="./img/icons/percent-down.svg" alt="percent-down" />
                  </div>
                </div>
              </div>
            </div>

            <div className="wallet__token-sums">
              <p className="wallet__token-sum text">12.26</p>
              <p className="wallet__token-sum text--grey">$620,372.13</p>
            </div>
          </div>
        </div>
      </div>

      <Footer showWallet={true} showActivity={true} showDashboard={false} activeItem="wallet" />
    </div>
  )
}

export default StepFive;