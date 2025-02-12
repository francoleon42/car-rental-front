import { useState } from 'react';

const CrearImagenForm = ({ carId, onUpload }) => {
  const [formData, setFormData] = useState({
    src: '',
    description: '',
    title: '',
    carPicture: 'front'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload({ ...formData });
    setFormData({
      src: '',
      description: '',
      title: '',
      carPicture: 'front'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">URL de la imagen</label>
        <input
          type="text"
          value={formData.src}
          onChange={(e) => setFormData({ ...formData, src: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Título</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Tipo de imagen</label>
        <select
          value={formData.carPicture}
          onChange={(e) => setFormData({ ...formData, carPicture: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="front">FRONT</option>
          <option value="side">BACK</option>
          <option value="back">SIDE</option>
          <option value="interior">OTHER</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Subir Imagen
      </button>
    </form>
  );
};

export default CrearImagenForm;