// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Top row: Newsletter + Contact/Currency */}
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
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
      </div>

      {/* Middle row: Navigation links */}
      <div className="footer-links">
        <div>
          <h4>mettä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom row: Social + Payments */}
      <div className="footer-bottom-row">
        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <p>Instagram | LinkedIn</p>
        </div>
        <div className="footer-payments">
          <h4>mettä muse ACCEPTS</h4>
          <p>Apple Pay | Google Pay | Amex | Mastercard | PayPal | Shop Pay</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2026 mettä muse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
