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
import GestionAutosPage from "../pages/rolAdmin/gestionarAutos/GestionAutosPage";
import GestionDeImagenesPage from "../pages/rolAdmin/gestionarImagenesAutos/GestionDeImagenesPage";
import { AuthProvider } from "../pages/auth/AuthContext";
export const MyRoutes = () => {
  return (
    <AuthProvider>
      <Router basename="/"> { }
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cliente/crear-renta" element={< CreateRentaPage />} />
          <Route path="/cliente/renta-list" element={< RentasListPage />} />
          <Route path="/cliente/auto-list" element={< AutoListPage />} />
          <Route path="/cliente/auto/detalle/:id" element={< AutoDetalle />} />

          <Route path="/admin/renta/solicitadas" element={< RentasSolicitadasPage />} />
          <Route path="/admin/clientes/" element={< ClientsPage />} />

          <Route path="/admin/autos/" element={< GestionAutosPage />} />
          <Route path="/admin/imagenes/" element={< GestionDeImagenesPage />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
};