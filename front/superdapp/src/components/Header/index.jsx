function Header() {
  return (
      <header className="header">
        <div className="header__inner">
          <div className="header__settings">
            <img className="header__settings-icon" src="./img/icons/settings.svg" width="24" height="24" alt="settings icon" />
          </div>

          <div className="header__select">
            <div className="header__selected">
              <span>wallet</span>
              <img src="./img/icons/header-arrow-down.svg" width="12" height="12" alt="header-arrow-down" />
            </div>
          </div>

          <div className="header__chat">
            <img className="header__chat-icon" src="./img/icons/chat.svg" width="24" height="24" alt="chat icon" />
          </div>
        </div>
      </header>
  )
}

export default Header;