function StepOne() {
  return (
    <div className="wrapper">
      <div className="start-screen">
        <img className="start-screen__img" src="./img/logo.svg" alt="logo" />

        <h1 className="title">
          WELCOME<br />
          TO  <i>super</i>
        </h1>

        <p className="text">
        Super Browser Extension it's a secure wallet that allows you to store, withdraw and deposit cryptocurrencies from your browser.
        </p>

        <a className="btn" href="#">START</a>

        <div className="start-screen__footer">
           built on   <a className="start-screen__footer-link" href="#">XBANKING</a>
        </div>
      </div>
    </div>
  )
}

export default StepOne;