// obtener todos los cars disponibles 	GET {{baseUrl}}/cars

const cars = [
    { id: 1, model: 'Toyota Corolla', year: 2023 },
    { id: 2, model: 'Honda Civic', year: 2024 },
    { id: 3, model: 'Ford Mustang', year: 2022 },
  ];
  
  const CarDropdown = ({ onSelect }) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Seleccionar Auto</label>
        <select
          onChange={(e) => onSelect(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Seleccione un auto</option>
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.model} ({car.year})
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CarDropdown;