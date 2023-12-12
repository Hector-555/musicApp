import { useContext } from "react";
import { AudioContext } from "../AudioContext/AudioContext";
import "./Track.css";
import play from "./../../icons/playButton.svg";
import pause from "./../../icons/pauseButton.svg";
import timeConvector from "./../../utils/timeConvector";

function Track(track) {
  const { id, preview, duration, title, artists } = track;

  const { handleToggleAudio, currentTrack, isPlaying } =
    useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === id;

  const trackTime = timeConvector(duration);

  return (
    <div className={isCurrentTrack ? "track playing" : "track"}>
      <button className="button" onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? (
          <img src={pause} alt="" />
        ) : (
          <img src={play} alt="" />
        )}
      </button>
      <img className="preview" src={preview} alt="" />
      <div className="credits">
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{trackTime}</p>
    </div>
  );
}

export default Track;
