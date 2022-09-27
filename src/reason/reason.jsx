import React, { useEffect, useState } from "react";
import { data, element } from "./data";
import "./style.css";
const Reason = () => {
  const [value, setValue] = useState(0);
  const { question, answer } = data[value];
  useEffect(() => {
    let set = setInterval(addValue, 3000);
    return () => {
      clearInterval(set);
    };
  }, [value]);
  const addValue = () => {
    if (value < data.length - 1) {
      setValue(value + 1);
    } else {
      setValue(0);
    }
    setTimeout(() => {
      value.remove();
    }, 1000);
  };

  return (
    <div className="reason">
      <h3>WHY COWRYWISE ?</h3>
      <div className="question-container">
        <h1>{question}</h1>
        <h1 className="answer">{answer}</h1>
      </div>
      <div className="rateEl">
        {element.map((data) => {
          const { id, number, text, heading, small, images, writer } = data;
          return (
            <div className="rate" key={id}>
              <div className="flex-container">
                <h1>{number}</h1>
                <small>/{small}</small>
              </div>
              {/* <img src={images} alt="" srcSet="" /> */}
              <h3 className="heading">{heading}</h3>
              <p>
                "{text}"-{writer}
              </p>
              <a href="">DOWNLOAD NOW</a>
            </div>
          );
        })}
      </div>
      <div className="sign-container">
        <div className="textEl">
          <h1>Sign up for free.</h1>
          <h1> Start investing today.</h1>
        </div>
        <form action="">
          <input type="text" name="" id="" placeholder="Your email..." />
          <button type="submit">Sign Up For Free</button>
        </form>
      </div>
    </div>
  );
};

export default Reason;
