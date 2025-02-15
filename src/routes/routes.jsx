import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import ProfilePage from "../pages/profile/ProfilePage";
import MenuPage from "../pages/menu/MenuPage";

import CreateRentPage from "../pages/rolCliente/createRent/CreateRentPage";
import RentListPage from "../pages/rolCliente/myRequestRent/RentListPage";
import CarListPage from "../pages/rolCliente/viewCars/CarListPage";
import CarDetail from "../pages/rolCliente/viewCars/components/CarDetail";

import RequestedRentsPage from "../pages/rolAdmin/RentsManagement/RequestedRentsPage";
import ViewClientsPages from "../pages/rolAdmin/viewClientsHistory/ViewClientsPages";
import CarsManagementPage from "../pages/rolAdmin/CarsManagement/CarsManagementPage";
import ImageCarsManagementPage from "../pages/rolAdmin/ImageneCarsManagement/ImageCarsManagementPage";
import { AuthProvider } from "../pages/auth/AuthContext";
export const MyRoutes = () => {
  return (
    <AuthProvider>
      <Router basename="/"> { }
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/cliente/solicitar-renta" element={< CreateRentPage />} />
          <Route path="/cliente/mis-solicitudes" element={< RentListPage />} />
          <Route path="/cliente/auto-list" element={< CarListPage />} />
          <Route path="/auto/detalle/:id" element={< CarDetail />} />

          <Route path="/admin/clientes/" element={< ViewClientsPages />} />
          <Route path="/admin/renta/solicitadas" element={< RequestedRentsPage />} />
          <Route path="/admin/autos/" element={< CarsManagementPage />} />
          <Route path="/admin/imagenes/" element={< ImageCarsManagementPage />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
};