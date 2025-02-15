import { useState } from 'react';

const CarImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={images[selectedImage]?.src} 
          alt={images[selectedImage]?.description}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-md overflow-hidden border-2 ${
              selectedImage === index ? 'border-blue-500' : 'border-transparent'
            }`}
          >
    
            <img 
              src={img.src} 
              alt={img.description}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarImages;