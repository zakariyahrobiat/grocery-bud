import React, { useRef, useState } from "react";
import "./style.css";
import { icon, data } from "./data";
const Main = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  const divContainer = useRef();
  const { images, id, text, name, url, displayName } = data[value];
  if (show) {
    divContainer.current.classList.add("active");
  }

  return (
    <div className="main">
      <div className="text-container">
        <h1>Put your money to work.</h1>
        <p>
          Build discipline, access financial tools that steadily grow your
          finaces.
        </p>
        <form action="">
          <input type="text" name="" id="input" placeholder="email" />
          <button type="submit">Start Investing</button>
        </form>
      </div>
      <div className="button-container">
        <button>
          <img src={icon[0]} alt="" srcSet="" />
          <span>
            <p>Get it on</p> <h2>Play Store</h2>
          </span>
        </button>
        <button>
          <img src={icon[1]} alt="" srcSet="" />
          <span>
            <p>Download on the</p> <h2>App Store</h2>
          </span>
        </button>
      </div>
      <div className="image-wrapper">
        <div className="image-container">
          <div>
            <div className="displayImage">
              <img src={images} alt="" srcSet="" ref={divContainer} />
              <div className="text-container">
                <p>{text}</p>
                <div className="text-flex">
                  <h4>{name}</h4>
                  <a href={url}>{displayName}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="smallImg">
            {data.map((image, index) => {
              const { images } = image;
              return (
                <div key={index}>
                  <img
                    src={images}
                    alt=""
                    srcSet=""
                    onClick={() => {
                      setValue(index);
                      setShow(!show);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
