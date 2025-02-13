import { useState, useEffect } from 'react';
import RequestsList from '../gestionRenta/componentes/RequestsList';
import { requestedRents, aceptRent, rejectRent } from '../../../servicios/rentService';
import { useAuth } from '../../auth/AuthContext';

const RentasSolicitadasPage = () => {
  const { token } = useAuth();
  const [requests, setRequests] = useState([]);
  const [resetFrame, setResetFrame] = useState(false);


  useEffect(() => {
    const fetchRequestedRents = async () => {
      try {
        const response = await requestedRents(token);
        setRequests(response);
      } catch (error) {
        console.log("Error al obtener usuario:", error);
      }
      setResetFrame(false);
    };

    fetchRequestedRents();
  }, [resetFrame]);

  const handleAccept = async (id) => {
    try {
      const response = await aceptRent(id,token);
      setResetFrame(true);
    } catch (error) {
      console.log("Error al obtener usuario:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await rejectRent(id,token); 
      setResetFrame(true);
    } catch (error) {
      console.log("Error al obtener usuario:", error);
    }
  };

  return (
    <RequestsList
      requests={requests || []}
      onAccept={handleAccept}
      onReject={handleReject}
    />
  );
};

export default RentasSolicitadasPage;