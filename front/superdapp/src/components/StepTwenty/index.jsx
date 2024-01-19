import Header from "../Header";

function StepTwenty() {
return (
<div className="wrapper">
  <Header actionType="back" />

  <div className="staking-process">
    <div className="content">
      <img className="staking-process__pic" src="./img/error-pic.png" width="140" height="140" alt="wrrow pic" />

      <h1 className="title title--mini">
        NOT ENOUGH SOL
      </h1>

      <p className="text">
        An account involved in this transaction does not have enough SOL. The account may be yours or someone else’s.
        This transaction will revert if submitted.
      </p>

    </div>

  </div>
  <div className="staking-process__footer">
    <p className="text">Ignore warning, proceed anyway</p>
    <a className="btn" href="#">CANCEL</a>
  </div>
</div>
)
}

export default StepTwenty;