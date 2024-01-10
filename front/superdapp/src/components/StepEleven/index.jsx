import Header from "../Header";

function StepEleven() {
  return (
    <div className="wrapper">
     <Header actionType="back" />

      <div className="content">
        <h1 className="title title--mini">Received</h1>

        <div className="info-pay">
          <div className="info-pay__currency">
            <div className="info-pay__currency-pic">
              <img src="./img/ethereum.svg" width="35" height="57" alt="ethereum" />
            </div>

            <p className="info-pay__currency-text yellow">+0.01421 ETH</p>
          </div>

          <div className="info-pay__info">
            <div className="info-pay__row">
              <span>Date</span>
              <span>20 Dec, 2023 at 3.24 pm</span>
            </div>

            <div className="info-pay__row">
              <span>Status</span>
              <span className="yellow">Succeeded </span>
            </div>

            <div className="info-pay__row">
              <span>From</span>
              <span>5srA...kxEi</span>
            </div>

            <div className="info-pay__row">
              <span>Network</span>
              <span>Ethereum ERC-20</span>
            </div>

            <div className="info-pay__row info-pay__row--center">
              <a className="info-pay__info-link" href="#">View on Explorer</a>
            </div>
          </div>

        </div>
      </div>

      <a className="btn btn--footer" href="#">DONE</a>
    </div>
  )
}

export default StepEleven;