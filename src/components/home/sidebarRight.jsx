import CardShorts from "../Cards/CardShorts";
import CardVideoHome from "../Cards/CardVideoHome";
import "./sidebarRight.css";

const SidebarRight = ({ items }) => {
  return (
    <section className="right">
      {/* <!-- VIDEOS GRID-4 --> */}
      <div className="grid-4">
        {items.length > 0 &&
          items.map((item) => (
            <CardVideoHome
              description={item["snippet"].description}
              id={item["id"].videoId}
              idVideo={item["id"].videoId}
              thumb={item["snippet"]["thumbnails"].medium.url}
              channelTitle={item["snippet"].channelTitle}
              title={item["snippet"].title}
            />
          ))}
        {/* <!-- LINE --> */}
      </div>
      <br />
      <div id="line-shorts"></div>
      <div className="label">
        <a href="">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{ width: "24px", height: "24px" }}
          >
            <g
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="style-scope yt-icon"
            >
              <g className="style-scope yt-icon">
                <path
                  d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
                  fill="red"
                  className="style-scope yt-icon"
                ></path>
                <polygon
                  points="10 14.65 15 12 10 9.35 10 14.65"
                  fill="#fff"
                  className="style-scope yt-icon"
                ></polygon>
              </g>
            </g>
          </svg>
          Shorts
        </a>
      </div>
      {/* <!-- SHORTS GRID-6 --> */}
      <div className="grid-6">
        <CardShorts />
        <CardShorts />
        <CardShorts />
        <CardShorts />
        <CardShorts />
        <CardShorts />
      </div>
      <div className="arrow-down">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
          style={{ width: "24px", height: "24px" }}
        >
          <g className="style-scope yt-icon">
            <path
              d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"
              className="style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </div>
      <div id="line-shorts"></div>
      {/* <!-- VIDEOS GRID-4 --> */}
      <div style={{ marginTop: "38px" }} className="grid-4">
        {items.length > 0 &&
          items.map((item) => (
            <CardVideoHome
              id={item["id"].videoId}
              thumb={item["snippet"]["thumbnails"].medium.url}
              channelTitle={item["snippet"].channelTitle}
              title={item["snippet"].title}
            />
          ))}
      </div>
    </section>
  );
};
export default SidebarRight;
