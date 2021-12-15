import React from "react";
import AboutMe from "./AboutMe";
import Cube from "./Cube";
import Skills from "./Skills";
import WIP from "./WIP";

const App = () => {
  return (
    <>
      <div>
        <h1 id="name">
          &lt;BryceChampaign <span id="romaji">シャムペーンブライス</span> /&gt;
        </h1>
        <h2 className="no-margin-bottom grow" id="name-subtitle">
          <span className="keyword">&lt;h2&gt;</span> Welcome to Bryce's
          Metaverse <span className="keyword">&lt;/h2&gt;</span>
        </h2>
      </div>
      <Cube />
      <WIP />
      <AboutMe />
    </>
  );
};

export default App;
