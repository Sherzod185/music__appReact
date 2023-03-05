import React from "react";
import kun from "../img/kundizgi.jpg";
import tun from "../img/darkmode.png";
import sp from "../img/spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ labraryStatus, setLabraryStatus, darks, darkMode }) => {

  return (
    <nav>
      <img src={sp} alt="" />

      <div className="kunTun">
        <img
          onClick={()=>darks(!darkMode)}
          src={darkMode ? kun : tun}
          alt="kunTun"
        />
        <button
          className={!labraryStatus ? "btnn" : ""}
          onClick={() => setLabraryStatus(!labraryStatus)}
        >
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
