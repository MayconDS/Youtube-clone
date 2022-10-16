import { useContext, useEffect, useState } from "react";
import Header from "../components/header/header";
import SidebarLeft from "../components/watch/sidebarLeft";
import SidebarRight from "../components/watch/sidebarRight";
import { YoutubeContext } from "../context/context";
import searchVideo from "../services/api";

import "../styles/watch.css";

function Watch() {
  const [dataItems, setDataItems] = useState([]);
  const [youtubeState, dispatch] = useContext(YoutubeContext);

  useEffect(() => {
    const getItems = async () => {
      const response = await searchVideo(youtubeState.search);
      setDataItems(response);
    };

    getItems();
  }, [youtubeState.search]);
  return (
    <>
      <Header navBottom={false} />
      <main className="watch">
        <SidebarLeft />
        <SidebarRight items={dataItems} />
      </main>
    </>
  );
}
export default Watch;
