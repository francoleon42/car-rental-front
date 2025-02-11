import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import ProfilePage from "../pages/profile/ProfilePage";


export const MyRoutes = () => {
  return (
    <Router basename="/"> {} 
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};