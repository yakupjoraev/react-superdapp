import Header from "../Header";
import screen from "../../main";
import load from "../../functions/loader";
function StepFourteen() {
  if (screen.current != 14) return null;
  return (
    <div className="wrapper">
   <Header actionType="back" />

  <div className="staking-process">
    <div className="content">
      <h1 className="title title--mini">
        Transaction
      </h1>

      <div className="staking-process__result">
        <img className="staking-process__pic" src="./img/complete-pic.png" width="140" height="140" alt="complete pic" />

        <h2 className="title title--middle">COMPLETE</h2>
        <p className="text">Transaction completed successfully</p>
      </div>


      <div className="staking-process__footer">
        <a className="btn" onClick={() => {load(5)}} href="#">CLOSE</a>
        <a className="staking-process__support" href="#">Support</a>
      </div>
    </div>
  </div>

  </div>
  )
}

export default StepFourteen;