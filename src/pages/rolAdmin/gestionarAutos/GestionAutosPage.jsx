import { useState, useEffect } from 'react';
import CarList from './componentes/AutoList';
import CarForm from './componentes/AutoForm';

const GestionAutosPage = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    // Simular llamada API REMPLAZAR POR CARS/
    const mockCars = [
      {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        color: "Red",
        passengers: 5,
        ac: true,
        pricePerDay: 50,
        createdAt: "2025-02-12T12:53:27.242Z"
      },
      {
        id: 2,
        brand: "Honda",
        model: "Civic",
        color: "Blue",
        passengers: 5,
        ac: true,
        pricePerDay: 45,
        createdAt: "2025-02-12T12:53:27.258Z"
      }
    ];
    setCars(mockCars);
  }, []);

  const handleCreateCar = (carData) => {
    // Simular POST API REMPLAZAR POR CARS/CREAR
    const newCar = {
      ...carData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    setCars(prev => [...prev, newCar]);
    setSelectedCar(null);
    /*
      try {
    const newCar = await createCar(carData); // Llamar al backend

    setCars(prev => [...prev, newCar]); // Agregar el auto a la lista

    setSelectedCar(null);
  } catch (error) {
    console.error("Error al crear el auto:", error);
  }
    */
  };

  const handleUpdateCar = (carData) => {
    // Simular PATCH API REMPLAZAR POR CARS/ACTUALIZAR/:ID
    setCars(prev =>
      prev.map(car =>
        car.id === selectedCar.id
          ? { ...carData, id: car.id, updatedAt: new Date().toISOString() }
          : car
      )
    );
    setSelectedCar(null);

    /*
      try {
    const updatedCar = await updateCar(selectedCar.id, carData);

    setCars(prev =>
      prev.map(car => (car.id === selectedCar.id ? updatedCar : car))
    );

    setSelectedCar(null);
  } catch (error) {
    console.error("Error al actualizar el auto:", error);
  }
    */
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
            initialData={selectedCar}
            onSubmit={selectedCar ? handleUpdateCar : handleCreateCar}
          />
        </div>
      </div>
    </div>
  );
};

export default GestionAutosPage;