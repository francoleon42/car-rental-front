import { getCars } from "../../../../servicios/carService";
import { useAuth } from "../../../auth/AuthContext";
import React, { useState, useEffect } from "react";

const CarDropdown = ({ onSelect }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    const getCarsRequest = async () => {
      try {
        const response = await getCars(token);
        setCars(response);
      } catch (error) {
        console.error("Error al obtener cars:", error);
        setError("Error al cargar los autos");
      } finally {
        setLoading(false);
      }
    };

    getCarsRequest();
  }, [token]); 

  if (loading) return <p>Cargando autos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Seleccionar Auto</label>
      <select
        onChange={(e) => onSelect(Number(e.target.value))}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="">Seleccione un auto</option>
        {cars.length > 0 ? (
          cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.model} - {car.brand}
            </option>
          ))
        ) : (
          <option disabled>No hay autos disponibles</option>
        )}
      </select>
    </div>
  );
};

export default CarDropdown;
