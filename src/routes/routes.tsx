import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateProvider from "../layouts/PrivateProvider";
import Login from "../pages/Login";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateProvider />}>
            <Route path="/" element={<h1>Home</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
