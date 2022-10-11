import Header from "../components/header/header";
import SidebarLeft from "../components/watch/sidebarLeft";

import "../styles/watch.css";

function Watch() {
  return (
    <>
      <Header navBottom={false} />
      <main className="watch">
        <SidebarLeft />
      </main>
    </>
  );
}
export default Watch;
