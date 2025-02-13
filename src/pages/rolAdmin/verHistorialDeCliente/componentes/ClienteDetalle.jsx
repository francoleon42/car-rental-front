import PropTypes from 'prop-types';
import SolicitudCliente from './SolicitudCliente';
import { useState, useEffect } from 'react';
import { useAuth } from '../../../auth/AuthContext';
import { rentsByUser } from '../../../../servicios/rentService';

const ClienteDetalle = ({ client }) => {
  const { token, logout } = useAuth();
  const [historial,setHistorial] = useState([]);

   useEffect(() => {
      const fetchDetailsClient = async () => {
        try {
          const response = await rentsByUser(client.id,token); 
          setHistorial(response); 
        } catch (error) {
          console.log("Error al obtener las rentas del usuario:", error);
        }
      };
  
      fetchDetailsClient(); 
    },[client?.id,token]); 

  if (!client) return (
    <div className="p-8 text-gray-500 text-center">
      Selecciona un cliente para ver su historial
    </div>
  );

  if (historial.length === 0) return (
    <div className="p-8 text-gray-500 text-center">
      No hay historial de rentas disponible.
    </div>
  );

  return (
    <div className="flex-1 p-6">
      <div className="mb-8">
      
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {client.firstName} {client.lastName}
        </h2>
        <p className="text-gray-600">Origen: {client.address}, {client.country}</p>
        <p className="text-gray-600">Nacimiento: {client.dob}</p>
    
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Historial de Rentas</h3>
      <div className="space-y-3">

        {historial.map(request => (
         <SolicitudCliente key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
};

ClienteDetalle.propTypes = {
  client: PropTypes.object,
};

export default ClienteDetalle;
