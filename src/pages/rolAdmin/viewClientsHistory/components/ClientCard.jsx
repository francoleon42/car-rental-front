import PropTypes from 'prop-types';

const ClientCard = ({ client, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 mb-2 cursor-pointer rounded-lg transition-colors ${
        isSelected 
          ? 'bg-blue-50 border-2 border-blue-200'
          : 'bg-white hover:bg-gray-50 border border-gray-100'
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-800">
        {client.firstName} {client.lastName}
      </h3>
      <p className="text-sm text-gray-600">{client.country}</p>
    </div>
  );
};

ClientCard.propTypes = {
  client: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default ClientCard;