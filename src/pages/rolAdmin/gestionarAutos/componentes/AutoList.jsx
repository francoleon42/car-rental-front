const AutoList = ({ cars, onSelectCar }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Lista de Autos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Marca</th>
                <th className="text-left py-2 px-4">Modelo</th>
                <th className="text-left py-2 px-4">Color</th>
                <th className="text-left py-2 px-4">Precio/día</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr
                  key={car.id}
                  onClick={() => onSelectCar(car)}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <td className="py-2 px-4">{car.brand}</td>
                  <td className="py-2 px-4">{car.model}</td>
                  <td className="py-2 px-4">{car.color}</td>
                  <td className="py-2 px-4">${car.pricePerDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default AutoList;