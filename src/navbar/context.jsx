import React, { useContext, useRef, useState } from "react";
import App from "../App";
const AppContext = React.createContext();
const Context = () => {
  const refContainer = useRef();

  function showNav() {
    refContainer.current.classList.add("active");
  }
  function closeNav() {
    refContainer.current.classList.remove("active");
  }
  return (
    <AppContext.Provider value={{ refContainer, showNav, closeNav }}>
      <App />
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
export { Context, AppContext };
