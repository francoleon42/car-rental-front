import React, { createContext, useContext, useState, useEffect } from "react";
import { FiHome, FiUsers, FiBarChart2, FiSettings, FiClipboard, FiMessageSquare, FiBook, FiInfo } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      "https://images.unsplash.com/photo-1584345604325-f5091269a0d1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm8lMjBjbCVDMyVBMXNpY298ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
      "https://media.istockphoto.com/id/176793256/es/foto/coche-rojo-al-atardecer-de-la-habana.jpg?s=612x612&w=0&k=20&c=hLVLnWy8BwbSIhU199nDF3WWU8Juq2RgirSYsqU3p6M=",
      "https://www.autoplusdigital.com.ar/wp-content/uploads/2023/04/autos-2.jpg"
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="relative w-full h-185 overflow-hidden rounded-2xl">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover"
            alt={`Auto ${currentIndex + 1}`}
          />
        </AnimatePresence>
      </div>
    );
  };
  export default  ImageCarousel;