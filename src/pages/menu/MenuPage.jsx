import React, { createContext, useContext, useState, useEffect } from "react";
import { FiHome, FiUsers, FiBarChart2, FiSettings, FiClipboard, FiMessageSquare, FiBook, FiInfo, FiClock, FiImage } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "./components/ImageCarousel.jsx"
import { MdDirectionsCar } from "react-icons/md";
import { getUser } from "../../servicios/userService.js";
import { useAuth } from "../../pages/auth/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';





// Menu Configuration
const menuConfig = {
  admin: [
    { icon: FiSettings, label: "Gestionar perfil", path: "/profile" },
    { icon: FiClock, label: "Ver historial de clientes", path: "/admin/clientes/" },
    { icon: FiClipboard, label: "Gestionar rentas", path: "/admin/renta/solicitadas" },
    { icon: MdDirectionsCar, label: "Gestionar autos", path: "/admin/autos/" },
    { icon: FiImage, label: "Gestionar imagenes de autos", path: "/admin/imagenes/" },
  ],
  client: [
    { icon: FiSettings, label: "Gestionar perfil", path: "/profile" },
    { icon: FiClipboard, label: "Solicitar renta", path: "/cliente/solicitar-renta" },
    { icon: FiMessageSquare, label: "Ver mis solicitudes", path: "/cliente/mis-solicitudes" },
    { icon: MdDirectionsCar, label: "Ver autos disponibles", path: "/cliente/auto-list" }
  ]
};

// Sidebar Component
const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = menuConfig[user?.role] || menuConfig.guest;
  const handleNavigation = (path) => {
    navigate(path); 
  };
  return (
    <motion.div
      initial={{ width: 520 }}
      animate={{ width: isCollapsed ? 80 : 520 }}
      className=" h-[180vh] bg-white shadow-lg fixed left-0 top-0 z-20 transition-all duration-300"
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
              onClick={() => handleNavigation(item.path)}
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
const TopNavigation = ({ user}) => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    navigate("/");
  }
  if (!user) return <div>Loading...</div>;
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
            src="https://e7.pngegg.com/pngimages/130/10/png-clipart-management-organization-logo-person-retail-clothing-accessories-service-retail.png"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-lg font-medium text-gray-700">{user?.firstName}, {user?.lastName}</span>
          <button
            onClick={handleLogout}
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
  const { token, logout } = useAuth();
  const [user, setUser] = useState(null); 

  useEffect(() => {
    if (!token) return; 

    const fetchUser = async () => {
      try {
        const response = await getUser(token); 
        setUser(response); 
      } catch (error) {
        console.log("Error al obtener usuario:", error);
      }
    };

    fetchUser(); 
  }, [token]); 

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar user={user} />
      <div className="ml-140 transition-all duration-300">
        <TopNavigation user={user} />
        <main className="p-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-full">
              <ImageCarousel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MenuPage;