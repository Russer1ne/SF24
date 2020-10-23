import React from "react";
import { NavLink, HashRouter } from "react-router-dom";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <header className="header__frame">
            <nav className="menu__frame">
              <NavLink className="menu__frame-link is-animated menu__frame-logo" to="/">SkillDrive</NavLink>
              <NavLink className="menu__frame-link is-animated" to="/">О нас</NavLink>
              <NavLink className="menu__frame-link is-animated" to="/">Условия</NavLink>
              <NavLink className="menu__frame-link is-animated" to="/faq">Частые вопросы</NavLink>
              <button className="is-animated">Войти</button>
            </nav>
          </header>
        </HashRouter>
      </>
    )
  }
}

export default Header;