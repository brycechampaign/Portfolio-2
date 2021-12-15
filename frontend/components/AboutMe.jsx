import React from "react";

const AboutMe = () => {
  return (
    <div className="section-container">
      <h2 className="section-header">About Me</h2>
      <p>
        My name is <span className="keyword">Bryce Champaign</span> and I'm a
        <span className="keyword"> full-stack software engineer</span>. I'm
        passionate about making engaging and intuitive{" "}
        <span className="keyword">frontends</span> as well as efficient and
        scalable <span className="keyword">backends</span>. I am well versed in
        <span className="white">
          {" "}
          [<span className="value">Node.js</span>,{" "}
          <span className="value">React</span>,{" "}
          <span className="value">React Native</span>,{" "}
          <span className="value">SQL</span> and
          <span className="value"> NoSQL</span> databases]
        </span>
        .
      </p>
    </div>
  );
};

export default AboutMe;
