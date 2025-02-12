const ImagenGallery = ({ images, onDeleteImage }) => {
    return (
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.src}
                alt={image.description}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <button
                  onClick={() => onDeleteImage(image.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                {image.title} - {image.carPicture}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImagenGallery;