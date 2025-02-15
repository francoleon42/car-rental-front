// components/Documents/DocumentUpload.jsx
import { useState } from 'react';
import { uploadDocument } from '../../../services/documentService';
import { useAuth } from '../../auth/AuthContext';

const DocumentUpload = ({ onDocumentUpload }) => {
  const { token } = useAuth();
  const [documentData, setDocumentData] = useState({
    title: '',
    description: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return; // Validar que hay un archivo seleccionado

    setLoading(true);
    try {

      const newDocument = await uploadDocument(
        file,
        documentData.title,
        documentData.description,
        token
      );

      onDocumentUpload(newDocument);
      setDocumentData({ title: '', description: '' });
      setFile(null);
    } catch (error) {
      console.error('Error uploading document:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cargar Documento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input para el archivo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Seleccionar archivo
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>

        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            value={documentData.title}
            onChange={(e) => setDocumentData({ ...documentData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            value={documentData.description}
            onChange={(e) => setDocumentData({ ...documentData, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        {/* Botón de submit */}
        <button
          type="submit"
          disabled={loading || !file}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 w-full"
        >
          {loading ? 'Subiendo...' : 'Subir Documento'}
        </button>
      </form>
    </div>
  );
};

export default DocumentUpload;