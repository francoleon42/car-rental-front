import { useState, useEffect } from 'react';
import RequestsList from './components/RequestsList';
import { requestedRents, aceptRent, rejectRent } from '../../../services/rentService';
import { useAuth } from '../../auth/AuthContext';

const RequestedRentsPage = () => {
  const { token } = useAuth();
  const [requests, setRequests] = useState([]);
  const [resetFrame, setResetFrame] = useState(false);


  useEffect(() => {
    const fetchRequestedRents = async () => {
      try {
        const response = await requestedRents(token);
        setRequests(response);
      } catch (error) {
        console.log("Error al obtener las rentas solicitadas:", error);
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
      console.log("Error al aceptar la renta:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await rejectRent(id,token); 
      setResetFrame(true);
    } catch (error) {
      console.log("Error al rechazar la renta:", error);
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

export default RequestedRentsPage;