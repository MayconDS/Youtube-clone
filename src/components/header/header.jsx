import { Link } from "react-router-dom";
import "./header.css";
import NavBottom from "./navBottom";

const Header = ({ navBottom = true }) => {
  return (
    <header>
      <nav id="nav-top">
        {/* <!-- HEADER-LEFT LOGO --> */}
        <Link to="/">
          <a href="">
            {" "}
            <img
              src="https://logosmarcas.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              alt=""
              id="logo"
            />
          </a>
        </Link>

        {/* <!-- HEADER-CENTER  SEARCH --> */}
        <div className="search">
          <input type="search" name="" placeholder="Pesquisar" />
          <a href="">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{ width: "24px", height: "24px" }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </a>
          <div className="mic">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{ width: "24px", height: "24px" }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        {/* <!-- HEADER RIGHT --> */}
        <div className="features">
          <a href="">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{ width: "24px", height: "24px" }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                  className="style-scope yt-icon"
                />
              </g>
            </svg>
          </a>
          <a href="">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{ width: "24px", height: "24px" }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
                  className="style-scope yt-icon"
                />
              </g>
            </svg>
          </a>
          <img
            src="https://yt3.ggpht.com/yti/AJo0G0mwg7ZgiruuI9CaX7L88MtSRYveIZOYPRWKm5mmxg=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
            srcset=""
            id="profile-pic"
          />
        </div>
      </nav>
      {navBottom == true ? <NavBottom /> : null}
    </header>
  );
};
export default Header;
