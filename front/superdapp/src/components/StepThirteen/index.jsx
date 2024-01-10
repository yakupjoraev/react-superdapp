import Header from "../Header";

function StepThirteen() {
  return (
    <div className="wrapper">
     <Header actionType="back" />

        <div className="content">
          <h1 className="title title--mini">Dashboard</h1>

        <div className="dashboard">
          <div className="dashboard__groups">
            <div className="dashboard__group">
              <h2 className="dashboard__label">Ethereum</h2>

              <div className="dashboard__columns">
                <p className="dashboard__column-label">Summ</p>
                <p className="dashboard__column-label">Earn</p>
                <p className="dashboard__column-label"></p>
              </div>

              <div className="dashboard__columns dashboard__columns--sums">
                <div className="dashboard__column">0.27365</div>
                <div className="dashboard__column">0.27365</div>
                <div className="dashboard__column dashboard__column--unstake">UNSTAKE</div>
              </div>
            </div>

            <div className="dashboard__group">
              <h2 className="dashboard__label">Bitcoin</h2>

              <div className="dashboard__columns">
                <p className="dashboard__column-label">Summ</p>
                <p className="dashboard__column-label">Earn</p>
                <p className="dashboard__column-label"></p>
              </div>

              <div className="dashboard__columns dashboard__columns--sums">
                <div className="dashboard__column">0.000632</div>
                <div className="dashboard__column">0.000632</div>
                <div className="dashboard__column dashboard__column--unstake">UNSTAKE</div>
              </div>
            </div>
          </div>

        </div>
      </div>

        <a className="btn btn--footer" href="#">CLOSE</a>
    </div>
  )
}

export default StepThirteen;