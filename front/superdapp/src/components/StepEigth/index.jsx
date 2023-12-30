import Footer from "../Footer";
import Header from "../Header";

function StepEigth() {
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
                    <img  src="/img/icons/search.svg" alt="search icon" />
                  </button>
                  <input className="form__input" id="" type="search" placeholder="Search Token"  />
                </div>
              </div>
            </div>
          </form>

          <div className="staking__tokens">
            <div className="wallet__tokens-header">
              <p className="wallet__tokens-label">Tokens</p>
              <button type="button" className="wallet__tokens-sort">
                <img src="/img/icons/sort-solid.svg" alt="sort-solid" />
              </button>
            </div>

            <div className="wallet__token">
              <div className="wallet__token-infos">
                <div className="wallet__token-pic">
                  <img src="/img/ethereum.svg" width="14" height="23" alt="ethereum" />
                </div>

                <div className="wallet__token-info">
                  <p className="wallet__token-name text">Ethereum</p>
                  {/* <div className="wallet__token-bottom">
                    <div className="wallet__token-count text--grey">
                      $2.44
                    </div>

                    <div className="wallet__token-percent yellow">
                      +4.73%

                      <img className="wallet__token-arrow" src="/img/icons/percent-up.svg" alt="percent-up" />
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="wallet__token-sums">
                <p className="wallet__token-sum text">24% APR</p>
                {/* <p className="wallet__token-sum text--grey">$17,437.81</p> */}
              </div>
            </div>

            <div className="wallet__token">
              <div className="wallet__token-infos">
                <div className="wallet__token-pic">
                  <img src="/img/bitcoin.svg" width="36" height="36" alt="Bitcoin" />
                </div>

                <div className="wallet__token-info">
                  <p className="wallet__token-name text">Bitcoin</p>
                  {/* <div className="wallet__token-bottom">
                    <div className="wallet__token-count text--grey">
                      $64.723.12
                    </div>

                    <div className="wallet__token-percent red">
                      -1.22%

                      <img className="wallet__token-arrow" src="/img/icons/percent-down.svg" alt="percent-down" />
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="wallet__token-sums">
                <p className="wallet__token-sum text">24% APR</p>
                {/* <p className="wallet__token-sum text--grey">$620,372.13</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default StepEigth;