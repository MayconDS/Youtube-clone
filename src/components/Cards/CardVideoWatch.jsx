import { Link } from "react-router-dom";
import "./CardVideoWatch.css";
import { YoutubeContext } from "../../context/context";
import { useContext, useState } from "react";

const CardVideoWatch = ({
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
        <div onClick={() => setContext()} className="card-video-watch">
          <img id="thumbnail" src={thumb} alt="" />
          <div className="timeline-watch">
            <div className="title-watch">
              <span>{title}</span>
              <div className="info-watch">
                <span>{channelTitle}</span>

                <span>999 mil visualizações há 1 mês</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CardVideoWatch;
