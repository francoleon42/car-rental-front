import { useState } from 'react';

const UploadImagenForm = ({ carId, onUpload }) => {
  const [formData, setFormData] = useState({
    description: '',
    title: '',
    carPicture: 'front'
  });
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return; 
    const formDataToSend = new FormData();
    formDataToSend.append('file', file);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('carPicture', formData.carPicture);
    
    onUpload(formDataToSend);
    setFormData({
      description: '',
      title: '',
      carPicture: 'front'
    });
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campo para subir archivo */}
      <div>
        <label className="block text-sm font-medium mb-1">Seleccionar imagen</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          accept="image/*"
          required
        />
        {file && <p className="mt-1 text-sm text-gray-500">Archivo seleccionado: {file.name}</p>}
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
          <option value="front">Frontal</option>
          <option value="side">Lateral</option>
          <option value="back">Trasera</option>
          <option value="interior">Interior</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={!file}
      >
        Subir Imagen
      </button>
    </form>
  );
};

export default UploadImagenForm;