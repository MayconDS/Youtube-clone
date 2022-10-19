import CardVideoWatch from "../Cards/CardVideoWatch";
import "./sidebarRight.css";

const SidebarRight = ({ items }) => {
  return (
    <section className="watch-right">
      <div className="right-container">
        {items.length > 0 &&
          items.map((item) => (
            <CardVideoWatch
              description={item["snippet"].description}
              id={item["id"].videoId}
              idVideo={item["id"].videoId}
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
