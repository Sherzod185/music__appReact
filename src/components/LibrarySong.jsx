import React from "react";
import { playSong } from "./PlasyUniversal";
const LibrarySong = ({
  song,
  songs,
  setCurrentsongs,
  isPlaying,
  audioRef,
  id,
  setSongs,
  labraryStatus,
  setLabraryStatus,
}) => {
  const songSelectHandler = () => {
    setCurrentsongs(song);
    playSong(isPlaying, audioRef);
    setLabraryStatus(!labraryStatus);

    // state qoshamiz
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSong);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`librarySong ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="songDisc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
