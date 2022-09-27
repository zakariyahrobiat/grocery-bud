import React from "react";
import { useAppContext } from "./context";
import logo from "./logo.png";
import { links, data, about, desktopData } from "./data";
import "./style.css";
const Nav = () => {
  const { refContainer, showNav, closeNav } = useAppContext();

  return (
    <div className="navBar">
      <div className="logo-container">
        <img src={logo} alt="" srcSet="" />

        <div className="bars" onClick={showNav}></div>
      </div>
      <div className="nav-container" ref={refContainer}>
        <div className="close" onClick={closeNav}>
          x
        </div>
        <div className="data">
          <div className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <div key={id} className="link">
                  <ul>
                    <li>
                      <a href={url}>{text}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="abouts">
            {about.map((info) => {
              const { id, url, text } = info;
              return (
                <div key={id} className="about">
                  <ul>
                    <li>
                      <a href={url}>{text}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="register">
            {data.map((info) => {
              const { id, url, text } = info;
              return (
                <div key={id} className="register">
                  <ul>
                    <li>
                      <a href={url}>{text}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          {/* <a href="/learn">learn</a> */}
          <div className="DTregister">
            <a href="">log in</a>
            <a href="">
              <button type="submit">sign up for free</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
