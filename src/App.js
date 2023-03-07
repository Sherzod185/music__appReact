import React, { useRef, useState } from "react";
import Player from "./components/Player";
import Library from "./components/Library";
import Song from "./components/Song";
import data from "./util";
import Nav from "./components/Nav";
function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data);
  const [currentsongs, setCurrentsongs] = useState(songs[0]);
  
  const [isPlaying, setIsPlaying] = useState(false);
  // vaqti uchun
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [labraryStatus, setLabraryStatus] = useState(true);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`App ${darkMode ? "darkApp" : ""}`}>
      <Nav
        labraryStatus={labraryStatus}
        darks={setDarkMode}
        darkMode={darkMode}
        setLabraryStatus={setLabraryStatus}
      />
      <Song darkMode={darkMode} currentsongs={currentsongs} />
      <Player
        darkMode={darkMode}
        setSongs={setSongs}
        songs={songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentsongs={currentsongs}
        setCurrentsongs={setCurrentsongs}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        timeUpdateHandler={timeUpdateHandler}
      />
      <Library
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setLabraryStatus={setLabraryStatus}
        labraryStatus={labraryStatus}
        audioRef={audioRef}
        songs={songs}
        setCurrentsongs={setCurrentsongs}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
