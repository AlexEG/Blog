import HomeTemplate from "../components/HomeTemplate";
import { Outlet } from "react-router-dom";
import ViteSidebarData from "../DATA/Vite/ViteSidebarData";

function ViteHome() {
  return (
    <HomeTemplate
      SidebarData={ViteSidebarData}
      LanguageName="Vite"
      outlet={<Outlet />}
    />
  );
}

export default ViteHome;
