import React from "react";
import { images } from "./data";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerEl">
        <div className="first-footer">
          <div className="first-box">
            <h3>company</h3>
            <p>
              <a href=""> about</a>
            </p>
            <p>
              <a href=""> press</a>
            </p>
            <p>
              <a href=""> carrers</a>
            </p>
            <p>
              <a href=""> ambassadors</a>
            </p>
            <p>
              <a href=""> privacy</a>
            </p>
            <p>
              <a href=""> terms</a>
            </p>
          </div>
          <div className="second-box">
            <h3>product</h3>
            <p>
              <a href=""> saving plan</a>
            </p>
            <p>
              <a href=""> investment plans</a>
            </p>
            <p>
              <a href=""> mutual funds</a>
            </p>
            <p>
              <a href=""> stash</a>
            </p>
            <p>
              <a href=""> embed API</a>
            </p>
            <p>
              <a href=""> sprout</a>
            </p>
            <p>
              <a href=""> circles</a>
            </p>
            <p>
              <a href=""> halal</a>
            </p>
            <p>
              <a href=""> got a suggestion?</a>
            </p>
          </div>
        </div>
        <div className="first-footer second-footer">
          <div className="first-box">
            <h3>resources</h3>
            <p>
              <a href="">customer stories</a>
            </p>
            <p>
              <a href="">media</a>
            </p>
            <p>
              <a href=""> FAQs</a>
            </p>
            <p>
              <a href="">security</a>
            </p>
            <p>
              <a href=""> estimate your interest</a>
            </p>
            <p>
              <a href="">plan education</a>
            </p>
            <p>
              <a href="blog"></a>
            </p>
            <p>
              <a href="">help center</a>
            </p>
          </div>
          <div className="second-box">
            <h3>contact</h3>
            <p>
              <a href="support@cowrywise.com">support@cowrywise.com</a>
            </p>
            <p>
              <a href="">whatsApp</a>
            </p>
          </div>
        </div>
      </div>
      <div className="address-container">
        <div className="license">
          <img src={images} alt="" srcset="" />
          <div className="flex-text">
            <h3>Licensed by the SEC</h3>
            <p>Fund Manager</p>
          </div>
        </div>
        <div className="address">
          <p className="nigeria">
            5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.
          </p>
          <p>2261 Market Street #4817 San Francisco, CA 94114</p>
        </div>
      </div>
      <footer>
        <p>
          Cowrywise Financial Technology Limited (“Cowrywise”) is a fund manager
          duly licensed by the Securities and Exchange Commission (SEC) of
          Nigeria.
        </p>
        <p>
          Our mutual funds are managed by our fund management partners and made
          available to our clients through our web and mobile applications. The
          fund manager for each mutual fund is disclosed on every mutual fund’s
          profile page. Any historical returns or expected returns are
          hypothetical in nature and may not reflect actual future performance.
          <a href="">
            {" "}
            View full list of available mutual funds on Cowrywise.↗
          </a>
        </p>
        <p>
          Stash account is a 10-digit virtual bank account number in line with
          the Nigeria Uniform Bank Account Number (NUBAN) numbering system. The
          NUBAN accounts are generated with the names of selected banks through
          our payment partners. In order for a user to be eligible for Stash
          account number, they must have completed their KYC and added their
          Bank Verification Number (BVN). Stash is used for the purpose of
          receiving money transfers in place of a regular debit card. It also
          receives the proceeds from the sale of any mutual fund on Cowrywise.
        </p>
        <p>
          The content on this website does not constitute a complete description
          of Cowrywise’s offerings and services. By using this website, you
          accept our <a href=""> Terms of Use</a> and{" "}
          <a href=""> Privacy Policy</a>.
        </p>
        <p>
          Google Play and the Google Play logo are trademarks of Google LLC.
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.
          registered in the U.S.
        </p>
        <p>©2022 Cowrywise Financial Technology. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
