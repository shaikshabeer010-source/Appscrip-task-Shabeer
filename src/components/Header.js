import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      {/* ===== TOP BAR ===== */}
      <div className="header-top">

        {/* Left Icon */}
        <div className="header-left">
          <img
            src="https://via.placeholder.com/24"
            alt="menu-icon"
            className="icon-img"
          />
        </div>

        {/* Center Logo */}
        <div className="header-center">
          <h1 className="logo-text">LOGO</h1>
        </div>

        {/* Right Icons */}
        <div className="header-right">
          <span className="icon">🔍</span>
          <span className="icon">♡</span>
          <span className="icon">👜</span>
          <span className="icon">👤</span>
          <span className="lang">ENG ⌄</span>
        </div>

      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="header-nav">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;