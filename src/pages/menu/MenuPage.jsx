import React, { createContext, useContext, useState, useEffect } from "react";
import {FiHome, FiUsers, FiBarChart2, FiSettings, FiClipboard, FiMessageSquare, FiBook, FiInfo, FiClock, FiImage } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "./components/ImageCarousel.jsx"

import { MdDirectionsCar } from "react-icons/md";


// Create Authentication Context
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

// Authentication Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "cliente",
    name: "John Doe",
    avatar: "https://e7.pngegg.com/pngimages/130/10/png-clipart-management-organization-logo-person-retail-clothing-accessories-service-retail.png"
  });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Menu Configuration
const menuConfig = {
  admin: [
    { icon: FiSettings, label: "Gestionar perfil", path: "/dashboard" },
    { icon: FiClock, label: "Ver historial de clientes", path: "/dashboard" },
    { icon: FiClipboard, label: "Gestionar rentas", path: "/dashboard" },
    { icon: MdDirectionsCar, label: "Gestionar autos", path: "/users" },
    { icon: FiImage, label: "Gestionar imagenes de autos", path: "/analytics" },
  ],
  cliente: [
    { icon: FiSettings, label: "Gestionar perfil", path: "/dashboard" },
    { icon: FiClipboard, label: "Solicitar renta", path: "/tasks" },
    { icon: FiMessageSquare, label: "Ver mis solicitudes", path: "/messages" },
    { icon: MdDirectionsCar, label: "Ver autos disponibles", path: "/messages" }
  ]
};

// Sidebar Component
const Sidebar = () => {
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = menuConfig[user?.role] || menuConfig.guest;

  return (
    <motion.div
      initial={{ width: 720 }}
      animate={{ width: isCollapsed ? 80 : 820 }}
      className="h-screen bg-white shadow-lg fixed left-0 top-0 z-20 transition-all duration-300"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-gray-800"
            >
              Menu
            </motion.h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiBook className="w-5 h-5" />
          </button>
        </div>
        <nav>
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center p-3 mb-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              {!isCollapsed && (
                <span className="ml-3 text-gray-700">{item.label}</span>
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

// TopNavigation Component
const TopNavigation = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-16 bg-white shadow-sm fixed top-0 right-0 left-240 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg font-medium text-gray-500">
            Role: {user?.role}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={user?.avatar}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-lg font-medium text-gray-700">{user?.name}</span>
          <button
            onClick={logout}
            className="px-4 py-2 text-lg font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};


const MenuPage = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="ml-240 transition-all duration-300">
          <TopNavigation />
          <main className="p-6 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-full">
                <ImageCarousel />
              </div>
            </div>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
};

export default MenuPage;