import React from "react";
import Nav from "../src/navbar/nav";
import Main from "./main/main";
import Grid from "./grid/grid";
import Create from "./create/create";
import Business from "./business/business";
import Reason from "./reason/reason";
import Footer from "./footer/footer";
const App = () => {
  return (
    <div className="container">
      <Nav />
      <Main />
      <Grid />
      <Create />
      <Business />
      <Reason />
      <Footer />
    </div>
  );
};

export default App;
