import { useState, useEffect } from 'react';
import CarList from './componentes/CarList';
import ImageGallery from './componentes/ImagenGallery';
import UploadImageForm from './componentes/CrearImagenForm';

const GestionDeImagenesPage = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [carImages, setCarImages] = useState([]);

  // Mock: Obtener lista de autos
  useEffect(() => {
    // TODO: Reemplazar con fetch real
    const mockCars = [
      {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        color: "Red",
        passengers: 5,
        ac: true,
        pricePerDay: 50,
        createdAt: "2025-02-12T14:38:32.186Z"
      },
      {
        id: 2,
        brand: "Honda",
        model: "Civic",
        color: "Blue",
        passengers: 5,
        ac: true,
        pricePerDay: 45,
        createdAt: "2025-02-12T14:38:32.202Z"
      }
    ];
    setCars(mockCars);
  }, []);

  // Mock: Obtener imágenes del auto seleccionado
  useEffect(() => {
    if (!selectedCar) return;

    // TODO: Reemplazar con fetch real
    const mockImages = [
      {
        id: "1",
        src: "toyota-front.jpg",
        description: "Vista frontal",
        title: "Toyota",
        carPicture: "front"
      },
      {
        id: "2",
        src: "toyota-side.jpg",
        description: "Vista lateral",
        title: "Toyota",
        carPicture: "side"
      }
    ];
    setCarImages(mockImages);
  }, [selectedCar]);

  const handleDeleteImage = async (imageId) => {
    // TODO: Implementar borrado real
    console.log('Eliminar imagen:', imageId);
    setCarImages(prev => prev.filter(img => img.id !== imageId));
  };

  const handleUploadImage = async (newImage) => {
    // TODO: Implementar subida real
    console.log('Subir nueva imagen:', newImage);
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

export default GestionDeImagenesPage;