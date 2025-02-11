import RequestCard from './RequestCard';

const RequestsList = ({ requests, onAccept, onReject }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Solicitudes de Renta</h1>
      <div className="space-y-4">
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onAccept={onAccept}
            onReject={onReject}
          />
        ))}
      </div>
    </div>
  );
};

// RequestsList.propTypes = {
//   requests: PropTypes.array.isRequired,
//   onAccept: PropTypes.func.isRequired,
//   onReject: PropTypes.func.isRequired
// };

export default RequestsList;