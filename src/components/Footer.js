import React from "react";
import "./Footer.css";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { SiApplepay, SiGooglepay } from "react-icons/si";

const Footer= () => {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <div>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className="footer-currency">
            <h4>CURRENCY</h4>
            <p>USD 🇺🇸</p>
            <small>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </small>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="footer-middle">

        {/* LEFT COLUMN */}
        <div className="footer-col">
          <h4>mettä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>

      
        </div>

        {/* CENTER COLUMN */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="footer-col footer-follow">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedinIn />
          </div>
              <h4 className="accepts-title">mettä muse ACCEPTS</h4>
          <div className="payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcPaypal />
            <SiApplepay />
            <SiGooglepay />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>Copyright © 2026 mettä muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
