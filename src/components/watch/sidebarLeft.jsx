import "./sidebarLeft.css";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { useContext } from "react";
import { YoutubeContext } from "../../context/context";
import Comment from "./Comment";

const SidebarLeft = () => {
  const [youtubeState] = useContext(YoutubeContext);

  return (
    <section className="watch-left">
      <div className="watch-container">
        <div id="watch-player">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${youtubeState.idVideo}`}
            controls={true}
          />
        </div>
        <span id="titleVideo">{youtubeState.dataItems[1]}</span>

        <div className="info-video">
          <div className="views">
            <a href="">9.999.999 visualizações...</a>
          </div>
          <div className="items">
            <div className="likes">
              <a href="" id="items">
                <AiFillLike id="icon-like" />
                999 MIL
              </a>
            </div>
            <div className="dontLikes">
              <a href="" id="items">
                {" "}
                <BiDislike id="icon-dontLike" /> NÃO GOSTEI
              </a>
            </div>
            <div className="share">
              <a href="" id="items">
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                  style={{
                    pointerEvents: "none;",
                    display: "block;",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <g mirror-in-rtl="" className="style-scope yt-icon">
                    <path
                      d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>{" "}
                COMPARTILHAR
              </a>
            </div>
            <div className="download">
              <a href="" id="items">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                  style={{
                    pointerEvents: "none;",
                    display: "block;",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                DOWNLOAD
              </a>
            </div>
            <div className="cut">
              <a href="" id="items">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                  style={{
                    pointerEvents: "none;",
                    display: "block;",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                CORTAR
              </a>
            </div>
            <div className="save">
              <a href="" id="items">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                  style={{
                    pointerEvents: "none;",
                    display: "block;",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                SALVAR
              </a>
            </div>
            <div className="threePoints">
              <a href="">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                  style={{
                    pointerEvents: "none;",
                    display: "block;",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <br />
        <div id="lineWatch"></div>
        <br />
        <div className="timeline">
          <div className="channel">
            <div className="imgProfile">
              <img
                src="https://rotony.com.br/wp-content/uploads/2021/09/free-youtube-logo-icon-2431-thumb.png"
                alt=""
              />
            </div>
            <div className="infoChannel">
              <div className="nameProfile">
                <h1>{youtubeState.dataItems[2]}</h1>
                <span>999 mil inscritos</span>
              </div>
              <div className="descriptionProfile">
                <span>{youtubeState.dataItems[4]}</span>

                <a id="showMore" href="">
                  MOSTRAR MAIS
                </a>
              </div>
            </div>
          </div>

          <div className="signUp">
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${youtubeState.dataItems[3]}`}
            >
              <button>INSCREVER-SE</button>
            </a>
          </div>
        </div>
        <div style={{ marginTop: "15px" }} id="lineWatch"></div>
        <div style={{ marginBottom: "15px" }} className="comments">
          <span>3 comentários</span>
          <Comment
            img={
              "https://lh3.googleusercontent.com/ogw/AOh-ky0DqbDBqGMsBy2-8AMkDXylR6sqbJ5CfU9tN4qOXA=s32-c-mo"
            }
            author={"Maycon Douglas"}
            textComment={"Desenvolvido com ❤️"}
          />
          <Comment
            img={
              "https://rotony.com.br/wp-content/uploads/2021/09/free-youtube-logo-icon-2431-thumb.png"
            }
            author={"Youtube"}
            textComment={"Credits to me"}
          />
          <Comment
            img={
              "https://rotony.com.br/wp-content/uploads/2021/09/free-youtube-logo-icon-2431-thumb.png"
            }
            author={"Youtube"}
            textComment={
              "API: https://developers.google.com/youtube/v3/getting-started "
            }
          />
        </div>
      </div>
    </section>
  );
};
export default SidebarLeft;
