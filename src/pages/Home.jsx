import Header from "../components/header/header";
import SidebarLeft from "../components/home/sidebarLeft";
import SidebarRight from "../components/home/sidebarRight";

import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <SidebarLeft />
        <SidebarRight />
      </main>
    </div>
  );
}

export default Home;
