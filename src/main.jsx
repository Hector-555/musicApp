import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AudioProvider from "./components/AudioContext/AudioContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioProvider>
    <App />
  </AudioProvider>
);
