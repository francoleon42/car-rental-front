import { useState, useEffect } from 'react';
import RentasCard from './components/RentCard.jsx';
import { myRents } from '../../../services/rentService.js';
import { useAuth } from '../../auth/AuthContext.jsx';

const RentListPage = () => {
    const [rents, setRents] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        const fetchRents = async () => {
            try {
               
                const response = await myRents(token);
                setRents(response);
            } catch (error) {
                console.error('Error al obtener las rentas:', error);
            }
        };
    
        fetchRents();
    }, []);
    

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Mis Solicitudes de Renta</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rents.map((rent) => (
                        <RentasCard key={rent.id} renta={rent} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RentListPage;