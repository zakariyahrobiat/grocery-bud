import React from "react";
import { data } from "./data";
import "./style.css";
const Business = () => {
  return (
    <div className="business">
      <div className="business-text">
        <h1>Keeping your money safe is our business.</h1>
        <p>
          Trust is our currency. We are committed to the security of your money
          and the protection of your account.
        </p>

        <a href="">LEARN MORE</a>
      </div>
      <div className="infoEl">
        {data.map((info) => {
          const { heading, text, id } = info;
          return (
            <div key={id} className="info">
              <h2>{heading}</h2>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Business;
