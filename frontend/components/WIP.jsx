import React, { useState, useEffect } from "react";

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const WIP = () => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    setInterval(() => setColor(getRandomColor()), 400);
  }, []);

  return (
    <div
      style={{
        borderWidth: "2px 0 2px 0",
        borderStyle: "dashed",
        borderColor: color,
        width: "100%",
      }}
    >
      <h1 style={{ color }}>!UNDER CONSTRUCTION!</h1>
    </div>
  );
};

export default WIP;
