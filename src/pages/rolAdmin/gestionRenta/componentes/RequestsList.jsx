import RequestCard from './RequestCard';

const RequestsList = ({ requests, onAccept, onReject }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Solicitudes de Renta</h1>
      <div className="space-y-4">
        {requests.length === 0 ? (
          <p className="text-gray-500">No tienes solicitudes por el momento.</p>
        ) : (
          requests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onAccept={onAccept}
              onReject={onReject}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RequestsList;