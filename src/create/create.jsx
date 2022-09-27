import React from "react";
import "./style.css";
import { image, info } from "../create/data";
const Create = () => {
  return (
    <div className="create">
      <img src={image} alt="" srcset="" />
      <div className="createEl">
        <h1>Start building wealth in 5 minutes</h1>

        {info.map((data) => {
          const { heading, number, text } = data;
          return (
            <div className="create-container">
              <div className="number-container">
                <h3>{number}</h3>
                <div className="line"></div>
              </div>
              <div className="text-container">
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
        <button>Sign Up Now</button>
      </div>
    </div>
  );
};

export default Create;
