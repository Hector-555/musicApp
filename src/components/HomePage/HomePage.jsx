import { useState } from "react";
import tracksList from "./../../tracks/tracksList";
import "./HomePage.css";
import Track from "../Track/Track";

const searchTrack = (query) => {
  if (!query) return tracksList;

  const lowerCaseQuery = query.toLowerCase();
  return tracksList.filter(
    (track) =>
      track.artists.toLowerCase().includes(lowerCaseQuery) ||
      track.title.toLowerCase().includes(lowerCaseQuery)
  );
};

function HomePage() {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (e) => {
    setTracks(searchTrack(e.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        className="input"
        placeholder="Найти"
        onChange={handleChange}
      />
      <div className="list">
        {tracks.map((track) => {
          return <Track key={track.id} {...track} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
