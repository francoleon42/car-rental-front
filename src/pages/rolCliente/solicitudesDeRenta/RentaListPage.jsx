import { useState, useEffect } from 'react';
import RentasCard from './components/RentasCard';
import { myRents } from '../../../servicios/rentService';
import { useAuth } from '../../auth/AuthContext.jsx';

const RentasListPage = () => {
    const [rentas, setRentas] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        const fetchRentas = async () => {
            try {
               
                const response = await myRents(token);
                console.log(response);
                setRentas(response);
            } catch (error) {
                console.error('Error fetching rentas:', error);
            }
        };
    
        fetchRentas();
    }, []);
    

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Mis Solicitudes de Renta</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rentas.map((renta) => (
                        <RentasCard key={renta.id} renta={renta} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RentasListPage;