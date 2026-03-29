import React from "react";
import { FiMenu, FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      {/* ===== TOP BAR ===== */}
      <div className="header-top">

        {/* Left Icon */}
        <div className="header-left">
          <FiMenu className="header-icon" />
        </div>

        {/* Center Logo */}
        <div className="header-center">
          <h1 className="logo">LOGO</h1>
        </div>

        {/* Right Icons */}
        <div className="header-icons">
          <FiSearch className="header-icon" />
          <FiHeart className="header-icon" />
          <FiShoppingBag className="header-icon" />
          <FiUser className="header-icon" />
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
