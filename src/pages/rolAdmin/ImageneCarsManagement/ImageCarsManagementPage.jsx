import { useState, useEffect } from 'react';
import CarList from './components/CarList';
import ImageGallery from './components/ImageGallery';
import UploadImageForm from './components/UploadImagenForm';
import { getCars } from '../../../services/carService';
import { useAuth } from '../../auth/AuthContext';
import { getPictureByCar, deletePicture, uploadPicture } from '../../../services/pictureService';

const ImageCarsManagementPage = () => {
  const { token } = useAuth();
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [carImages, setCarImages] = useState([]);
  const [resetFrame, setResetFrame] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCars(token);
        setCars(response);
      } catch (error) {
        console.log("Error al obtener los cars:", error);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    const fetchPicturesByCars = async () => {
      try {
        const response = await getPictureByCar(selectedCar.id,token);
        setCarImages(response);
        setResetFrame(false);
      } catch (error) {
        console.log("Error al obtener las imagenes del auto:", error);
      }
    };
    fetchPicturesByCars();
  }, [selectedCar,resetFrame]);

  const handleDeleteImage = async (imageId) => {
    try {
      const response = await deletePicture(imageId,token);
      setResetFrame(true);
    } catch (error) {
      console.log("Error al borrar la picture:", error);
    }
     setCarImages(prev => prev.filter(img => img.id !== imageId));
  };

  const handleUploadImage = async (newImage) => {
    try {
      const response = await uploadPicture(selectedCar.id,newImage,token);
      setResetFrame(true);
    } catch (error) {
      console.log("Error al cargar la picture:", error);
    }
    setCarImages(prev => [...prev, {
      ...newImage,
      id: Date.now().toString()
    }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Gestión de Imágenes de Autos</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Lista de Autos</h2>
          <CarList cars={cars} onCarSelect={setSelectedCar} />
        </div>
        
        {selectedCar && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Imágenes del {selectedCar.brand} {selectedCar.model}
            </h2>
            
            <ImageGallery 
              images={carImages} 
              onDeleteImage={handleDeleteImage} 
            />
            
            <UploadImageForm 
              carId={selectedCar.id} 
              onUpload={handleUploadImage} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarsManagementPage;