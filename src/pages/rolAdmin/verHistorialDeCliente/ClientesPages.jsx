// pages/ClientsPage.jsx
import { useState } from 'react';
import ClienteCard from './componentes/ClienteCard';
import ClienteDetalle from './componentes/ClienteDetalle'; '../verHistorialDeCliente/componentes/ClienteDetalle';

const ClientsPage = () => {
  const [clients] = useState([
    {
      id: 1,
      firstName: "Juan",
      lastName: "Pérez",
      dob: "1990-01-15",
      address: "Calle Principal 123",
      country: "México"
    },
    {
      id: 2,
      firstName: "Franco",
      lastName: "Pérez",
      dob: "2001-01-15",
      address: "Calle Principal 123",
      country: "Argentina"
    },
  ]);

  const [requests] = useState([
    // Tus datos de solicitudes mockeadas...
  ]);

  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Lista de Clientes */}
      <div className="w-80 border-r bg-white p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Clientes</h2>
        {clients.map(client => (
          <ClienteCard
            key={client.id}
            client={client}
            isSelected={selectedClient?.id === client.id}
            onClick={() => setSelectedClient(client)}
          />
        ))}
      </div>

      {/* Detalles del Cliente */}
      <ClienteDetalle
        client={selectedClient}
        // requests={requests.filter(r => r.clientId === selectedClient?.id)}
      />
    </div>
  );
};

export default ClientsPage;