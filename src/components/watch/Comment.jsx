import "./Comment.css";

const Comment = ({ author, textComment, img }) => {
  return (
    <div className="area-comment">
      <img src={img} alt="" />
      <div className="comment">
        <div className="texts">
          <span id="comment-name">
            {author} <a href=""> há 1 minuto</a>
          </span>
          <span id="comment-text">{textComment}</span>
        </div>

        <div className="comment-icons">
          <div className="like">
            <svg
              viewBox="0 0 16 16"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{
                pointerEvents: "none",
                display: "block",
                width: " 16px",
                height: "16px",
              }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span>1</span>
          </div>
          <div className="dislike">
            <svg
              viewBox="0 0 16 16"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{
                pointerEvents: "none",
                display: "block",
                width: " 16px",
                height: "16px",
              }}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
          <div className="answer">
            <span>RESPONDER</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
