// pages/ProfilePage.jsx
import { useState } from 'react';
import UserInfo from '../profile/components/UserInfo';
import DocumentUpload from '../profile/components/DocumentUpload';
import DocumentList from '../profile/components/DocumentList';

const ProfilePage = () => {
  const [documents, setDocuments] = useState([]);

  const handleNewDocument = (newDoc) => {
    setDocuments([...documents, newDoc]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <UserInfo />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DocumentUpload onDocumentUpload={handleNewDocument} />
          <DocumentList documents={documents} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;