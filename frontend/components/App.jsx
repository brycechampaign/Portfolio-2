import React from "react";
import AboutMe from "./AboutMe";
import Cube from "./Cube";
import Skills from "./Skills";
import WIP from "./WIP";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <>
      <div>
        <h1 id="name">
          &lt;BryceChampaign <span id="romaji">シャムペーンブライス</span>/&gt;
        </h1>
        <h2 className="no-margin-bottom grow" id="name-subtitle">
          <span className="keyword">&lt;h2&gt;</span> Welcome to Bryce's
          Metaverse <span className="keyword">&lt;/h2&gt;</span>
        </h2>
      </div>
      <div id="socials-container">
        <p>
          <span className="keyword">const</span>{" "}
          <span className="variable">socials</span> = [{" "}
          <a href="https://github.com/brycechampaign" target="_blank">
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="lg"
              className="social-icon"
            />
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/bryce-champaign" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="social-icon"
            />
          </a>
          ,{" "}
          <a href="https://twitter.com/ChampaignBryce" target="_blank">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="lg"
              className="social-icon"
            />
          </a>
          ,{" "}
          <a href="https://www.instagram.com/bryce_champaign/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="lg"
              className="social-icon"
            />
          </a>{" "}
          ]
        </p>
      </div>
      <Cube />
      <WIP />
      <AboutMe />
    </>
  );
};

export default App;
