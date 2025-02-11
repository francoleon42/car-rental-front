import { useState, useEffect } from 'react';
import RentasCard from './components/RentasCard';

const RentasListPage = () => {
    const [rentas, setRentas] = useState([]);

    useEffect(() => {
        const fetchRentas = async () => {
            try {
                const data = [
                    {
                        "id": 1,
                        "pricePerDay": 50,
                        "acceptedDate": null,
                        "rejected": false,
                        "startingDate": "2024-03-01T00:00:00.000Z",
                        "dueDate": "2026-03-05T00:00:00.000Z",
                        "endDate": null,
                        "createdAt": "2025-02-11T18:26:02.152Z",
                        "updatedAt": "2025-02-11T18:26:02.152Z"
                    },
                    {
                        "id": 2,
                        "pricePerDay": 50,
                        "acceptedDate": null,
                        "rejected": true,
                        "startingDate": "2024-04-01T00:00:00.000Z",
                        "dueDate": "2026-03-05T00:00:00.000Z",
                        "endDate": null,
                        "createdAt": "2025-02-11T18:26:02.157Z",
                        "updatedAt": "2025-02-11T18:26:02.157Z"
                    }
                   
                ];
                
                console.log(data);
                // const data = await getRentas(); // Descomentar e implementar servicio api
                // GET {{baseUrl}}/rent/mis_solicitudes
                setRentas(data);
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