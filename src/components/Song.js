import React, { useEffect, useRef, useState } from "react";
const Song = ({ currentsongs }) => {
  const rotate = useRef();
  const colors = ["red", "green", "yellow", "pink", "blue", "white", "orange"];
  let [count, setCount] = useState(0);
  setInterval(() => {
    count += 1;
    setCount(count);
  }, 600);
  useEffect(() => {
    rotate.current.style.border = `3px solid ${
      colors[Math.floor(Math.random() * colors.length)]
    }`;
  }, [count]);

  return (
    <div className="song_container">
      <img ref={rotate} src={currentsongs.cover} alt={currentsongs.name} />
      <h2>{currentsongs.name}</h2>
      <h3>{currentsongs.artist}</h3>
    </div>
  );
};

export default Song;
