function StepOne() {
  return (
    <div className="wrapper">
      <div className="start-screen">
        <img className="start-screen__img" src="/img/logo.svg" alt="logo" />

        <h1 className="title">
          WELCOME<br />
          TO  <span>XWALLET</span>
        </h1>

        <p className="text">
          XWallet Browser Extension it's a secure wallet that allows you to store, withdraw and deposit cryptocurrencies from your browser.
        </p>

        <a className="btn" href="#">START</a>
      </div>
    </div>
  )
}

export default StepOne;