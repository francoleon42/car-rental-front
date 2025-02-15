import PropTypes from 'prop-types';
import StatusRent from './StatusRent';



const RequestClient = ({ request }) => {

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm mb-3 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-800">Renta #{request.id}</h4>
          <p className="text-sm text-gray-600">
            Fecha de solcitud:  {new Date(request.createdAt).toLocaleDateString()}   
          </p>
          <p className="text-sm text-gray-600">
            Desde:  {new Date(request.startingDate).toLocaleDateString()}   
          </p>
          <p className="text-sm text-gray-600">
            Hasta :{new Date(request.dueDate).toLocaleDateString()}
          </p>
          <p className="text-blue-600 font-medium mt-1">
            ${request.pricePerDay}/día
          </p>
        </div>
        <StatusRent status={request} />
      </div>
    </div>
  );
};
RequestClient.propTypes = {
  request: PropTypes.object.isRequired
};

export default RequestClient;