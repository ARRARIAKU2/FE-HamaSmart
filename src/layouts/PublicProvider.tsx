import { Outlet } from "react-router";
import PublicProvider from "../pages/PublicProvider";

function Layout() {
  return (
    <PublicProvider>
      <Outlet />
    </PublicProvider>
  );
}

export default Layout;
