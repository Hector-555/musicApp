import { useContext, useState, useEffect } from "react";
import { AudioContext } from "../AudioContext/AudioContext";
import timeConvector from "../../utils/timeConvector";
import "./Playbar.css";
import play from "../../icons/playButton.svg";
import pause from "../../icons/pauseButton.svg";

const TimeControls = () => {
  const { audio, currentTrack } = useContext(AudioContext);

  const { duration } = currentTrack;

  const [currentTime, setCurrentTime] = useState(0);
  const formattedCurrentTime = timeConvector(currentTime);
  const progressCurrentTime = Math.round((currentTime / duration) * 100);

  const handleChangeTrackTime = (e) => {
    const time = Math.round((e.target.value / 100) * duration);
    setCurrentTime(time)
    audio.currentTime = time
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <p>{formattedCurrentTime}</p>
      <input
        className="progress"
        type="range"
        min={0}
        max={100}
        step={1}
        value={progressCurrentTime}
        onChange={handleChangeTrackTime}
      />
    </>
  );
};

function Playbar() {
  const { currentTrack, handleToggleAudio, isPlaying } =
    useContext(AudioContext);

  const { title, artists, preview, duration } = currentTrack;

  const trackTime = timeConvector(duration);

  return (
    <div className="playbar">
      <img className="preview" src={preview} alt="" />
      <button
        className="button"
        onClick={() => handleToggleAudio(currentTrack)}
      >
        {isPlaying ? <img src={pause} alt="" /> : <img src={play} alt="" />}
      </button>
      <div className="credits">
        <h4>{title}</h4>
        <p>{artists}</p>
      </div>
      <div className="slider">
        <TimeControls />
        <p>{trackTime}</p>
      </div>
    </div>
  );
}

export default Playbar;
