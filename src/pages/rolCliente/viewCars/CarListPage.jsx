import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AutoCard from './components/CarCard';
import { useAuth } from '../../auth/AuthContext';
import { getCars } from '../../../services/carService';

const CarListPage = () => {
  const [cars, setCars] = useState([]);
   const { token } = useAuth();

  useEffect(() => {
    const fetchCars = async () => {
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

    fetchCars();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Vehículos Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car) => (
            <Link to={`/auto/detalle/${car.id}`} key={car.id}>
              <AutoCard car={car} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListPage;