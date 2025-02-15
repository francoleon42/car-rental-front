import { useState, useEffect } from 'react';
import ClientCard from './components/ClientCard';
import ClientDetail from './components/ClientDetail';
import { getClients } from '../../../services/userService';
import { useAuth } from '../../auth/AuthContext';

const ViewClientsPages = () => {
  const [clients,setClients] = useState([]);
  const { token, logout } = useAuth();
  const [selectedClient, setSelectedClient] = useState(null);


  useEffect(() => {
  
    const fetchClients = async () => {
      try {
        const response = await getClients(token); 
        setClients(response); 
      } catch (error) {
        console.log("Error al obtener los clientes:", error);
      }
    };

    fetchClients(); 
  }, []); 

  return (
    <div className="flex min-h-screen bg-gray-50">

      <div className="w-80 border-r bg-white p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Clientes</h2>
        {clients.map(client => (
          <ClientCard
            key={client.id}
            client={client}
            isSelected={selectedClient?.id === client.id}
            onClick={() => setSelectedClient(client)}
          />
        ))}
      </div>

 
      <ClientDetail
        client={selectedClient}
      />
    </div>
  );
};

export default ViewClientsPages;