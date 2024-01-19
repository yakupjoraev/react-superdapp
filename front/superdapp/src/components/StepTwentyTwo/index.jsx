import Header from "../Header";

function StepTwentyTwo() {
return (
<div className="wrapper">
  <Header actionType="back" />

  <div className="content">
    <div className="confirm">
      <div className="confirm__header">
        <a href="#" className="confirm__link">
          <img className="confirm__link-img" width="48" height="48" src="/img/confirm-link-img.svg" alt="icon" />

          <div className="confirm__link-info">
            <p className="confirm__link-name">Confirm Transaction</p>
            <p className="confirm__link-address">app.xbanking.org</p>
          </div>
        </a>
      </div>

      <div className="confirm__main">

        <div className="confirm__changes">
          <div className="confirm__label">
            Estimated Changes
          </div>

          <div className="confirm__changes-item">
            <div className="confirm__changes-item-left">
              <img className="confirm__changes-item-img" width="30" height="30" src="/img/confirm-changes-item.svg" alt="icon" />

              <p className="confirm__changes-item-name">Solana</p>
            </div>

            <div className="confirm__changes-item-right red">-0.00003 SOL</div>
          </div>

          <p className="confirm__text">
            Account does not have anough SOL to prerform the operation
          </p>
        </div>

        <div className="confirm__item">
          <p className="confirm__item-name">Network Fee</p>
          <p className="confirm__item-info">0.00002 SOL</p>
        </div>
      </div>
    </div>
  </div>


  <a className="btn btn--footer" href="#">CONFIRM</a>
</div>
)
}

export default StepTwentyTwo;