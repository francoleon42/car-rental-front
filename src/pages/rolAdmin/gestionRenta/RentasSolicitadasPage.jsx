// pages/RequestsPage.jsx
import { useState } from 'react';
import RequestsList from '../gestionRenta/componentes/RequestsList';

const RentasSolicitadasPage = () => {
  // Mock data
  const [requests, setRequests] = useState([
    {
        "id": 1,
        "pricePerDay": 50,
        "acceptedDate": null,
        "rejected": false,
        "startingDate": "2024-03-01T00:00:00.000Z",
        "dueDate": "2026-03-05T00:00:00.000Z",
        "endDate": null,
        "createdAt": "2025-02-11T20:03:30.134Z",
        "updatedAt": "2025-02-11T20:03:30.134Z"
    },
    {
        "id": 2,
        "pricePerDay": 50,
        "acceptedDate": null,
        "rejected": false,
        "startingDate": "2024-04-01T00:00:00.000Z",
        "dueDate": "2026-03-05T00:00:00.000Z",
        "endDate": null,
        "createdAt": "2025-02-11T20:03:30.140Z",
        "updatedAt": "2025-02-11T20:03:30.140Z"
    }
  ]);

  const handleAccept = async (id) => {
    console.log('Aceptando solicitud:', id);
    // Aquí iría la llamada a la API /rent/aceptar/id
  };

  const handleReject = async (id) => {
    console.log('Rechazando solicitud:', id);
    // Aquí iría la llamada a la API /rent/rechazar/id
  };

  return (
    <RequestsList
      requests={requests}
      onAccept={handleAccept}
      onReject={handleReject}
    />
  );
};

export default RentasSolicitadasPage;