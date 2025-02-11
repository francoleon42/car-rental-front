import StatusBadge from './StatusBadge';
import { formatDate } from '../dateUtils';

const RentasCard = ({ renta }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            ${renta.pricePerDay}/día
          </h3>
          <p className="text-sm text-gray-500">
            {formatDate(renta.startingDate)} - {formatDate(renta.dueDate)}
          </p>
        </div>
        <StatusBadge 
          isRejected={renta.rejected} 
          acceptedDate={renta.acceptedDate} 
        />
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Creada:</span>
          <span className="text-gray-700">{formatDate(renta.createdAt)}</span>
        </div>
        {renta.endDate && (
          <div className="flex justify-between">
            <span className="text-gray-500">Finalizada:</span>
            <span className="text-gray-700">{formatDate(renta.endDate)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentasCard;