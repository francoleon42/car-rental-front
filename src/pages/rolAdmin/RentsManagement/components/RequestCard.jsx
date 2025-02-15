import { useState } from 'react';
import PropTypes from 'prop-types';

const RequestCard = ({ request, onAccept, onReject }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAction = async (action) => {
    setIsProcessing(true);
    try {
      await action(request.id);
    } finally {
      setIsProcessing(false);
    }
  };


  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Solicitud #{request.id}</h3>
          <p className="text-gray-600">
            Fecha inicio: {new Date(request.startingDate).toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            Fecha fin: {new Date(request.dueDate).toLocaleDateString()}
          </p>
          <p className="text-green-600 font-medium">
            ${request.pricePerDay} por día
          </p>
          <p className="text-blue-500 font-medium">
            Solicitada en: {new Date(request.createdAt).toLocaleString("es-ES", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleAction(onAccept)}
            disabled={isProcessing}
            className={`px-4 py-2 rounded-md transition-colors ${isProcessing
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
          >
            Aceptar
          </button>
          <button
            onClick={() => handleAction(onReject)}
            disabled={isProcessing}
            className={`px-4 py-2 rounded-md transition-colors ${isProcessing
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

RequestCard.propTypes = {
  request: PropTypes.object.isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired
};

export default RequestCard;