import { useState, useEffect } from 'react';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import { getCars, createCar, updateCar } from '../../../services/carService';
import { useAuth } from '../../auth/AuthContext';

const CarsManagementPage = () => {
  const { token } = useAuth();
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [resetFrame, setResetFrame] = useState(false);


  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCars(token);
        setCars(response);
      } catch (error) {
        console.log("Error al obtener los cars:", error);
      }
    };
    setResetFrame(false);
    fetchCars();
  }, [resetFrame]);

  const handleCreateCar = async (carData) => {
    console.log(carData);

    try {
      const response = await createCar(carData, token);
      setCars(prev => [...prev, response]);
      setResetFrame(true);
      setSelectedCar(null);
    } catch (error) {
      console.error("Error al crear el auto:", error);
    }

  };

  const handleUpdateCar = async (carData) => {
    try {
      console.log(carData)
      const response = await updateCar(carData.id, carData, token);
      setCars(prev =>
        prev.map(car => (car.id === selectedCar.id ? response : car))
      );
      setSelectedCar(null);
      setResetFrame(true);
    } catch (error) {
      console.error("Error al actualizar el auto:", error);
    }

  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Gestión de Autos</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <CarList cars={cars} onSelectCar={setSelectedCar} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">
            {selectedCar ? 'Editar Auto' : 'Crear Nuevo Auto'}
          </h2>
          <CarForm
            key={selectedCar?.id || "new"}
            initialData={selectedCar}
            onSubmit={selectedCar ? handleUpdateCar : handleCreateCar}
          />
        </div>
      </div>
    </div>
  );
};

export default CarsManagementPage;