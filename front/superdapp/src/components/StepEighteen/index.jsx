import Header from "../Header";

function StepEighteen() {
return (
<div className="wrapper">
  <Header />

  <div className="content">
    <h1 className="title title--mini">Security & Privacy</h1>

    <div className="settings">
      <form className="settings__form form" action="#">
        <div className="form__privacy">
          <input className="form__privacy-input" type="text" placeholder="Secret recovery (seed) phrase" />
        </div>

        <button type="button" className="form__btn--reset">Reset App</button>
      </form>
    </div>


  </div>

  <a className="btn btn--footer" href="#">CLOSE</a>
</div>
)
}

export default StepEighteen;