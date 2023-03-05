import React from "react";
import LibrarySong from "./LibrarySong";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import kun from "../img/kundizgi.jpg";
import tun from "../img/darkmode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Library = ({
  songs,
  audioRef,
  setCurrentsongs,
  isPlaying,
  labraryStatus,
  setSongs,
  setLabraryStatus,
  setDarkMode,
  darkMode,
}) => {
  return (
    <div className={labraryStatus ? "library " : "library kutubxona"}>
      <div className="libraryBlock">
        <h2>Library</h2>
        <div className="darkmods">
          <img
            onClick={() => setDarkMode(!darkMode)}
            src={darkMode ? kun : tun}
            alt="kunTun"
          />
          <button
            className={!labraryStatus ? "btnn" : ""}
            onClick={() => setLabraryStatus(!labraryStatus)}
          >
            Song
            <FontAwesomeIcon icon={faMusic} />
          </button>
        </div>
      </div>
      <div className={`librarySongs}`}>
        {songs?.map((song) => (
          <LibrarySong
            labraryStatus={labraryStatus}
            setLabraryStatus={setLabraryStatus}
            song={song}
            songs={songs}
            key={song.id}
            id={song.id}
            setCurrentsongs={setCurrentsongs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
