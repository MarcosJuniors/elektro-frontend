import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Error404 from "../pages/Error404";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/home" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/not-found" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;