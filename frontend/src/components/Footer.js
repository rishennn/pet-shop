import React from "react";
import Logo from "../components/Logo";
import Twitter from "../assets/img/svg/Twitter.svg";
import Pinterest from "../assets/img/svg/Pinterest.svg";
import Instagram from "../assets/img/svg/Instagram.svg";
import Youtube from "../assets/img/svg/Youtube.svg";
import Send from '../assets/img/svg/Send.svg';

function Footer() {
  return (
    <footer>
      <div className="topFooter_container">
        <div className="wrapper">
          <div className="topFooter_links">
            <div className="footer_social">
              <Logo />
              <p className="social_text">
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <div className="social_logos">
                <img src={Twitter} alt="Twitter" />
                <img src={Pinterest} alt="Pinterest" />
                <img src={Instagram} alt="Instagram" />
                <img src={Youtube} alt="Youtube" />
              </div>
            </div>
            <div className="footer_links">
              <p className="footer_links_title">Quick Links</p>
              <div className="footer_btns">
                <a className="footer_link" href="#!">Home</a>
                <a className="footer_link" href="#!">About Us</a>
                <a className="footer_link" href="#!">Offers</a>
                <a className="footer_link" href="#!">Services</a>
                <a className="footer_link" href="#!">Contact Us</a>
              </div>
            </div>
            <div className="footer_help">
              <p className="footer_links_title">Help Center</p>
              <div className="footer_btns">
                <a className="footer_link" href="#!">Payments</a>
                <a className="footer_link" href="#!">Shipping</a>
                <a className="footer_link" href="#!">Product returns</a>
                <a className="footer_link" href="#!">FAQs</a>
                <a className="footer_link" href="#!">Checkout</a>
              </div>
            </div>
            <div className="footer_email">
              <p className="footer_links_title">Our Newsletter</p>
              <p className="social_text">
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <div className="footer_inputArea">
                <input
                  type="text"
                  className="footer_input"
                  placeholder="Enter your email-address"
                />
                <img src={Send} alt="send icon" className="footer_input_send" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter_container">
        <div className="wrapper">
          <div className="bottomFooter">
            <p className="footer_left_info">
              ©2023 Waggy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
