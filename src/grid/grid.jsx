import React from "react";
import { info, secondInfo } from "./data";
import "./style.css";
const Grid = () => {
  return (
    <div className="grid">
      <div className="firstBox">
        <h1>Get financial freedom</h1>
        <p>
          Plan towards your dream home, fund your kid's education, travel the
          world, all in one app.
        </p>

        {info.map((data) => {
          const { topic, heading, text, url, link, image } = data;
          return (
            <div className="box-container2">
              <h4>{topic}</h4>
              <h2>{heading}</h2>
              <p>{text}</p>
              <a href={url}>{link}</a>
              <img src={image} alt="" srcset="" />
            </div>
          );
        })}
      </div>
      <div className="secondBox">
        {secondInfo.map((data) => {
          const { topic, heading, text, url, link, image } = data;
          return (
            <div className="box-container">
              <h4>{topic}</h4>
              <h2>{heading}</h2>
              <p>{text}</p>
              <a href={url}>{link}</a>
              <img src={image} alt="" srcset="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
