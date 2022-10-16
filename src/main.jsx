import React from "react";
import { YoutubeProvider } from "./context/context";
import ReactDOM from "react-dom/client";
import Routering from "./routes/route";

import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <YoutubeProvider>
      <Routering />
    </YoutubeProvider>
  </React.StrictMode>
);
