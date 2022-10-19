import { YoutubeContext } from "../../context/context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./CardVideoHome.css";

const CardVideoHome = ({
  thumb,
  title,
  channelTitle,
  idVideo,
  description,
}) => {
  const data = [thumb, title, channelTitle, idVideo, description];
  const [youtubeState, dispatch] = useContext(YoutubeContext);

  const setContext = () => {
    dispatch({
      type: "SET_ID_VIDEO",
      payload: { idVideo: idVideo },
    });

    dispatch({
      type: "SET_DATA_ITEMS",
      payload: { dataItems: data },
    });
  };

  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/watch`}>
        <div onClick={() => setContext()} className="card-video-home">
          <img id="thumbnail" src={thumb} alt="" />
          <div className="timeline">
            <img
              id="profile-pic"
              src="https://yt3.ggpht.com/4Qib8p0Fykq_4RtxLXbQ365mVa6pGwopJ3cX34QoUhrg0aPCY3iD1Uzj2Pfjj6B1cUmtuLdgVg=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="title">
              <span>{title}</span>
              <div className="info">
                <span>{channelTitle}</span>

                <span>1 bi de visualizações há 3 anos</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CardVideoHome;
