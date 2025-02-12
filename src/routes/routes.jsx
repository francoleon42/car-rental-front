import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import ProfilePage from "../pages/profile/ProfilePage";
import MenuPage from "../pages/menu/MenuPage";
import CreateRentaPage from "../pages/rolCliente/crearRenta/CrearRentaPage";
import RentasListPage from "../pages/rolCliente/solicitudesDeRenta/RentaListPage";
import AutoListPage from "../pages/rolCliente/verAutos/AutoListPage";
import AutoDetalle from "../pages/rolCliente/verAutos/componentes/AutoDetalle";
import RentasSolicitadasPage from "../pages/rolAdmin/gestionRenta/RentasSolicitadasPage"
import ClientsPage from "../pages/rolAdmin/verHistorialDeCliente/ClientesPages";


export const MyRoutes = () => {
  return (
    <Router basename="/"> {} 
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cliente/crear-renta" element={< CreateRentaPage/>} />
        <Route path="/cliente/renta-list" element={< RentasListPage/>} />
        <Route path="/cliente/auto-list" element={< AutoListPage/>} />
        <Route path="/cliente/auto/detalle/:id" element={< AutoDetalle/>} />

        <Route path="/admin/renta/solicitadas" element={< RentasSolicitadasPage/>} />
        <Route path="/admin/clientes/" element={< ClientsPage/>} />
        
        
      </Routes>
    </Router>
  );
};