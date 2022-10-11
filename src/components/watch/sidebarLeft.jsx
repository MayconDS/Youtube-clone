import "./sidebarLeft.css";

import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

const SidebarLeft = () => {
  return (
    <section className="watch-left">
      <div className="player">
        <img
          id="playerVideo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <span id="titleVideo">Caio Luccas - King of bel 👑🍬</span>

        <div className="info">
          <div className="views">
            <a href="">6.094.994 visualizações...</a>
          </div>
          <div className="likes">
            <a href="" id="items">
              <AiFillLike id="icon-like" />
              177 MIL
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
                <g mirror-in-rtl="" class="style-scope yt-icon">
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
                <g class="style-scope yt-icon">
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

        <br />
        <div id="lineWatch"></div>
        <br />
        <div className="timeline">
          <div className="channel">
            <div className="imgProfile">
              <img
                src="https://yt3.ggpht.com/YMxF1pNMtC88gUKu9WR0uLgWPuZUdjWmWfANSZuY1xaXcONEOXWwsAR8PPyZkEsKCjkJ-WEXXL0=s48-c-k-c0x00ffffff-no-nd-rj"
                alt=""
              />
            </div>
            <div className="infoChannel">
              <div className="nameProfile">
                <h1>Caio Luccas</h1>
                <span>253 mil inscritos</span>
              </div>
              <div className="descriptionProfile">
                <span>Ficha técnica:</span>
                <br />
                <span>Voze:Caio Luccas</span>
                <br />
                <span>Audio Visual:@ogreis @caioluccas @iamsadboyyyy</span>
                <br />
                <a href="">MOSTRAR MAIS</a>
              </div>
            </div>
          </div>
          <div className="signUp">
            <button>INSCREVER-SE</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SidebarLeft;
