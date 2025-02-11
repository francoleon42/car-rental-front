import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import ProfilePage from "../pages/profile/ProfilePage";
import MenuPage from "../pages/menu/MenuPage";
import CreateRentaPage from "../pages/rolCliente/crearRenta/CrearRentaPage";
import RentasListPage from "../pages/rolCliente/solicitudesDeRenta/RentaListPage";


export const MyRoutes = () => {
  return (
    <Router basename="/"> {} 
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cliente/crear-renta" element={< CreateRentaPage/>} />
        <Route path="/cliente/renta-list" element={< RentasListPage/>} />
        
      </Routes>
    </Router>
  );
};