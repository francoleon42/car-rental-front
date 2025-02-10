import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";


export const MyRoutes = () => {
  return (
    <Router basename="/"> {} 
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};