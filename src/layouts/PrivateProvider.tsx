import { Outlet } from "react-router";
import PrivateProvider from "../pages/PrivateProvider";

function Layout() {
  return (
    <PrivateProvider>
      <Outlet />
    </PrivateProvider>
  );
}

export default Layout;
