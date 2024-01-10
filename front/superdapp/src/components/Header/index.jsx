import React from "react";

function Header({actionType}) {
  const getActionContent = () => {
    switch (actionType) {
      case "back":
        
      return (
        <button type="button" className="header__action-back">
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFDD2E" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>
        </button>
      );

      case "settings":
        return(
          <button type="button" className="header__action-settings">
          <img src="./img/icons/settings.svg" width="24" height="24" alt="settings icon" /> 
        </button>
        );

        default:
          return null;
    }
  };
  return (
      <header className="header">
        <div className="header__inner">
          <div className="header__actions">
            <div className="header__action">
              {getActionContent()}
            </div>
{/* 
            <div className="header__action">

            </div> */}
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