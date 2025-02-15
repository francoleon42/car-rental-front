// components/Documents/DocumentList.jsx
const DocumentList = ({ documents }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Documentos Subidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc) => (
            <div key={doc.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              {doc.src && (
                <img 
                  src="data:image/png;base64,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" 
                  alt="Preview" 
                  className="w-full h-48 object-cover mb-3 rounded-md"
                />
              )}
              <h3 className="font-medium">{doc.title}</h3>
              <p className="text-sm text-gray-600">{doc.description}</p>
              <a 
                href={doc.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Ver Documento
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DocumentList;