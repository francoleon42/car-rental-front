import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarCard from './componentes/CarCard';
// import { getCars } from '../api/mockApi';

const AutoListPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {

        const data = [{"id":1,"brand":"Toyota","model":"Corolla","color":"Red","passengers":5,"ac":true,"pricePerDay":50,"createdAt":"2025-02-11T18:45:15.461Z"},{"id":2,"brand":"Honda","model":"Civic","color":"Blue","passengers":5,"ac":true,"pricePerDay":45,"createdAt":"2025-02-11T18:45:15.476Z"}]

        // const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
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
              <CarCard car={car} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoListPage;