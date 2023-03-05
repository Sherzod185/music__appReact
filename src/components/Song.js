import React from 'react'

const Song = ({ currentsongs }) => {
  return (
    <div className="song_container">
      <img src={currentsongs.cover} alt={currentsongs.name} />
      <h2>{currentsongs.name}</h2>
      <h3>{currentsongs.artist}</h3>
    </div>
  );
};

export default Song