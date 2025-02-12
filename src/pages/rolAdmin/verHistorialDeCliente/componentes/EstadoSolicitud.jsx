import PropTypes from 'prop-types';

const EstadoSolicitud = ({ status }) => {
  const statusColors = {
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800'
  };

  const getStatus = () => {
    if (status.acceptedDate) return 'accepted';
    if (status.rejected) return 'rejected';
    return 'pending';
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColors[getStatus()]}`}
    >
      {getStatus()}
    </span>
  );
};

EstadoSolicitud.propTypes = {
  status: PropTypes.object.isRequired
};

export default EstadoSolicitud;