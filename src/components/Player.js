import React from "react";
import { useEffect } from "react";
import { playSong } from "./PlasyUniversal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentsongs,
  timeUpdateHandler,
  setSongInfo,
  songInfo,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  setCurrentsongs,
  setSongs,
}) => {
  useEffect(()=>{
      const newSong = songs.map((song) => {
      if (song.id === currentsongs.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSong);
  },[currentsongs])
  const playSonsHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
      
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const trackHandler = (direction) => {
    let curretIndex = songs.findIndex((song) => song.id === currentsongs.id);
     if (direction === "skipBack") {
  if((curretIndex-1)%songs.length===-1){
    setCurrentsongs(songs[songs.length-1])
    playSong(isPlaying, audioRef);
    return;
  }
       setCurrentsongs(songs[curretIndex - 1 % songs.length]);
       console.log(songs[Math.abs(curretIndex - 1 % songs.length)]);
    playSong(isPlaying, audioRef);

     }
    if (direction === "forward") {
      setCurrentsongs(songs[(curretIndex+1)%songs.length])
    playSong(isPlaying,audioRef)

    }
      
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          type="range"
          min={0}
          max={songInfo.duration || "0"}
          value={songInfo.currentTime}
        />
        <p>{getTime(songInfo.duration || "0")}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon
          onClick={() => trackHandler("skipBack")}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSonsHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => trackHandler("forward")}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentsongs.audio}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
};

export default Player;
// 72darsga kelding
