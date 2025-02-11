import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import ProfilePage from "../pages/profile/ProfilePage";
import MenuPage from "../pages/menu/MenuPage";


export const MyRoutes = () => {
  return (
    <Router basename="/"> {} 
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};