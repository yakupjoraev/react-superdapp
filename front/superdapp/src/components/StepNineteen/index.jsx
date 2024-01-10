import Header from "../Header";

function StepNineteen() {
return (
<div className="wrapper">
<Header actionType="back" />

  <div className="content">
    <h1 className="title title--mini">Preferences</h1>

    <div className="settings">
      <form className="settings__form form" action="#">
        <div className="form__groups">

          <div className="form__group">
            <label className="form__label" htmlFor="">Language</label>

            <div className="form__input form__block">
              <div className="form__pic">
                <img className="form__pic-icon" width="32" height="32" src="./img/circle-flags_uk.svg"
                  alt="circle-flags_uk icon" />
              </div>

              <div className="form__infos">
                <p className="form__info text--grey">English</p>
              </div>

              <div className="form__right">
                <button type="button" className="form__right-btn">
                  <img src="./img/icons/form-arrow.svg" alt="form-arrow" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>


  </div>

  <a className="btn btn--footer" href="#">CLOSE</a>
</div>
)
}

export default StepNineteen;