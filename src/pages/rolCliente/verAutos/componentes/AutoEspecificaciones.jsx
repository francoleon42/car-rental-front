import { formatCurrency, formatDate } from '../formatters';

const AutoEspecificaciones = ({ car }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {car.brand} {car.model}
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Precio por día:</span>
          <span className="text-xl font-semibold text-blue-600">
            {formatCurrency(car.pricePerDay)}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Color:</span>
            <div 
              className="w-6 h-6 rounded-full border border-gray-200"
              style={{ backgroundColor: car.color.toLowerCase() }}
            />
          </div>
          
          <div>
            <span className="text-gray-600">Pasajeros:</span>
            <span className="ml-2 text-gray-800">{car.passengers}</span>
          </div>
          
          <div>
            <span className="text-gray-600">Aire acondicionado:</span>
            <span className="ml-2 text-gray-800">
              {car.ac ? 'Sí' : 'No'}
            </span>
          </div>
          
          <div>
            <span className="text-gray-600">Fecha de registro:</span>
            <span className="ml-2 text-gray-800">
              {formatDate(car.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoEspecificaciones;