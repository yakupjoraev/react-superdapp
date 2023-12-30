import Header from "../Header";

function StepFifteen() {
  return (
    <div className="wrapper">
      <Header/>

    <div className="staking-process">
      <div className="content">
        <h1 className="title title--mini">
          Staking process
        </h1>

        <div className="staking-process__result">
          <img className="staking-process__pic" src="./img/error-pic.png" width="140" height="140" alt="wrrow pic" />

          <h2 className="title title--middle">ERROR</h2>
          <p className="text">Please contact support</p>
        </div>

  
        <div className="staking-process__footer">
          <a className="btn" href="#">CLOSE</a>
          <a className="staking-process__support" href="#">Support</a>
        </div>
      </div>
    </div>

    </div>
  )
}

export default StepFifteen;