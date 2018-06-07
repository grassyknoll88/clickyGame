import React from "react";
import FadeIn from "./transitions/fade-in";

const Header = () => {
  return (
    <header className="App-header">
      <FadeIn in={true} duration={600} length={"50px"} direction={"bottom"}>
        <h1>Rugrat Clicky Game</h1>
      </FadeIn>
    </header>
  );
};

export default Header;
