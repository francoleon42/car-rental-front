import { formatCurrency, formatDate } from '../formatters';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow h-full">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {car.brand} {car.model}
        </h3>
        <div className="flex-1 space-y-2">
          <p className="text-lg text-blue-600 font-medium">
            {formatCurrency(car.pricePerDay)}/día
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Color:</span>
            <div 
              className="w-6 h-6 rounded-full border border-gray-200"
              style={{ backgroundColor: car.color.toLowerCase() }}
            />
          </div>
        </div>
        <div className="mt-4 border-t border-gray-100 pt-3">
          <p className="text-sm text-gray-500">
            Disponible desde: {formatDate(car.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;