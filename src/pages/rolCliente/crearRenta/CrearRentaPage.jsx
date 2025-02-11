import { useState } from 'react';
import CarDropdown from './components/CarDropdown';
import DateInput from './components/DateInput';

const CreateRentaPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const rentaData = {
      idCarARentar: selectedCar,
      startingDate: new Date(startDate).toISOString(),
      dueDate: new Date(endDate).toISOString()
    };
    console.log('Renta creada:', rentaData);
    // Aquí iría la lógica para enviar los datos al backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Crear Nueva Renta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CarDropdown onSelect={setSelectedCar} />
          <DateInput 
            label="Fecha de Inicio" 
            onChange={(e) => setStartDate(e.target.value)} 
          />
          <DateInput 
            label="Fecha de Fin" 
            onChange={(e) => setEndDate(e.target.value)} 
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Crear Renta
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRentaPage;