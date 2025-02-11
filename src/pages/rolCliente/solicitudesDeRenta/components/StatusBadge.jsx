const StatusBadge = ({ isRejected, acceptedDate }) => {
    let status = 'Pendiente';
    let color = 'bg-gray-100 text-gray-800';
  
    if (isRejected) {
      status = 'Rechazada';
      color = 'bg-red-100 text-red-800';
    } else if (acceptedDate) {
      status = 'Aceptada';
      color = 'bg-green-100 text-green-800';
    }
  
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color}`}>
        {status}
      </span>
    );
  };
  
  export default StatusBadge;