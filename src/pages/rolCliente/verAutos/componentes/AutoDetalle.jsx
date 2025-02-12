import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AutoEspecificaciones from './AutoEspecificaciones';
import AutoImagenes from './AutoImagenes';
import { useAuth } from '../../../auth/AuthContext';
import { getCarDetails } from '../../../../servicios/carService';

const AutoDetalle = () => {
  const { id } = useParams();
  const [autoDetalle, setAutoDetalle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
         const response = await getCarDetails(id,token);
        setAutoDetalle(response);
      } catch (error) {
        console.error('Error fetching car detail:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCarDetail();
  }, [id]);

  if (loading) return <div className="text-center py-8">Cargando...</div>;
  if (!autoDetalle) return <div className="text-center py-8">Auto no encontrado</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AutoImagenes images={autoDetalle.picturesResponseDTO} />
          <AutoEspecificaciones car={autoDetalle.carResponseDTO} />
        </div>
      </div>
    </div>
  );
};

export default AutoDetalle;