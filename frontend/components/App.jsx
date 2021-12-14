import React from "react";
import Cube from "./Cube";
import Skills from "./Skills";
import WIP from "./WIP";

const App = () => {
  return (
    <>
      <h1 id="name">&lt;BryceChampaign /&gt;</h1>
      <h2 className="no-margin-bottom grow" id="name-subtitle">
        <span className="tag">&lt;h2&gt;</span> Welcome to the Metaverse{" "}
        <span className="tag">&lt;/h2&gt;</span>
      </h2>
      <Cube />
      <WIP />
    </>
  );
};

export default App;
