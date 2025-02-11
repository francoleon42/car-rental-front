// components/Documents/DocumentUpload.jsx
import { useState } from 'react';
//import { createDocument } from '../../servicios/documentService';

const DocumentUpload = ({ onDocumentUpload }) => {
  const [documentData, setDocumentData] = useState({
    title: '',
    description: '',
    url: '',
    src: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
  //    const newDocument = await createDocument(documentData);
      onDocumentUpload(newDocument);
      setDocumentData({ title: '', description: '', url: '', src: '' });
    } catch (error) {
      console.error('Error uploading document:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cargar Documento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            value={documentData.title}
            onChange={(e) => setDocumentData({...documentData, title: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            value={documentData.description}
            onChange={(e) => setDocumentData({...documentData, description: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL del Documento</label>
          <input
            type="url"
            value={documentData.url}
            onChange={(e) => setDocumentData({...documentData, url: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL de la Vista Previa</label>
          <input
            type="url"
            value={documentData.src}
            onChange={(e) => setDocumentData({...documentData, src: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Subiendo...' : 'Subir Documento'}
        </button>
      </form>
    </div>
  );
};

export default DocumentUpload;