// components/Profile/UserInfo.jsx
import { useState, useEffect } from 'react';
//import { getUserInfo, updateUserInfo } from '../../servicios/userService';

const UserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    country: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
     //   const data = await getUserInfo();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo(userData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Información Personal</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-600 hover:text-blue-800"
        >
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                value={userData.firstName}
                onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Apellido</label>
              <input
                type="text"
                value={userData.lastName}
                onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => setUserData({...userData, dob: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">País</label>
              <input
                type="text"
                value={userData.country}
                onChange={(e) => setUserData({...userData, country: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Dirección</label>
            <textarea
              value={userData.address}
              onChange={(e) => setUserData({...userData, address: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Guardar Cambios
          </button>
        </form>
      ) : (
        <div className="space-y-2">
          <p><span className="font-medium">Nombre:</span> {userData.firstName} {userData.lastName}</p>
          <p><span className="font-medium">Fecha Nacimiento:</span> {new Date(userData.dob).toLocaleDateString()}</p>
          <p><span className="font-medium">País:</span> {userData.country}</p>
          <p><span className="font-medium">Dirección:</span> {userData.address}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;