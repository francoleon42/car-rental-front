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
                  src={doc.src} 
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