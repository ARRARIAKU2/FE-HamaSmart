import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateProvider from "../providers/PrivateProvider";
import Login from "../pages/Login";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateProvider />}>
            {/* <Route path="/" element={<Home />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
