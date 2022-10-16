import { useContext, useEffect, useState } from "react";
import Header from "../components/header/header";
import SidebarLeft from "../components/home/sidebarLeft";
import SidebarRight from "../components/home/sidebarRight";
import { YoutubeContext } from "../context/context";
import searchVideo from "../services/api";

import "../styles/home.css";

function Home() {
  const [dataItems, setDataItems] = useState([]);
  const [youtubeState, dispatch] = useContext(YoutubeContext);
  console.log(dataItems);

  useEffect(() => {
    const getItems = async () => {
      const response = await searchVideo(youtubeState.search);
      setDataItems(response);
    };

    getItems();
  }, [youtubeState.search]);

  return (
    <div className="home">
      <Header />
      <main>
        <SidebarLeft />
        <SidebarRight items={dataItems} />
      </main>
    </div>
  );
}

export default Home;
