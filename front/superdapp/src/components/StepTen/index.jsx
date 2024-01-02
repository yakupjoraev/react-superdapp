import Footer from "../Footer";
import Header from "../Header";

function StepTen() {
  return (
    <div className="wrapper">
      <Header/>

      <div className="content">
        <h1 className="title title--mini">Recent activity</h1>

        <div className="activites">
          <div className="active">
            <p className="active__label">
               Dec 19, 2023
            </p>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic yellow-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-down.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Receive</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text yellow">+0.01421 ETH</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic black-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-up.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Send</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text red">-24.12 SOL</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>
          </div>

          <div className="active">
            <p className="active__label">
               Dec 19, 2023
            </p>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic yellow-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-down.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Receive</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text yellow">+0.01421 ETH</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic black-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-up.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Send</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text red">-24.12 SOL</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>
          </div>

          <div className="active">
            <p className="active__label">
               Dec 19, 2023
            </p>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic yellow-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-down.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Receive</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text yellow">+0.01421 ETH</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic black-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-up.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Send</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text red">-24.12 SOL</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>
          </div>

          <div className="active">
            <p className="active__label">
               Dec 19, 2023
            </p>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic yellow-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-down.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Receive</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text yellow">+0.01421 ETH</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>

            <div className="active__block">
              <div className="active__info">
                <div className="active__pic black-bg">
                  <img className="active__pic-icon" width="14" height="16" src="./img/icons/active-arrow-up.svg" alt="arrow icon" />
                </div>

                <div className="active__texts">
                  <p className="active__text text">Send</p>
                  <p className="active__text text--grey yellow">Confirmed</p>
                </div>
              </div>

              <div className="active__sums">
                <p className="active__sum text red">-24.12 SOL</p>
                <p className="active__sum text--grey">$620,372.13</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer showWallet={true} showActivity={true} showDashboard={false} activeItem="activity" />
    </div>
  )
}

export default StepTen;