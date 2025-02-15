// pages/ProfilePage.jsx
import { useState, useEffect } from 'react';
import UserInfo from '../profile/components/UserInfo';
import DocumentUpload from '../profile/components/DocumentUpload';
import DocumentList from '../profile/components/DocumentList';
import { useAuth } from "../../pages/auth/AuthContext.jsx";
import { getDocuments } from '../../services/documentService.js';

const ProfilePage = () => {
  const { token } = useAuth();
  const [documents, setDocuments] = useState([]);
  const [resetFrame, setResetFrame] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await getDocuments(token);
        setDocuments(response);
        setResetFrame(false);
      } catch (error) {
        console.log("error obtaining documents: ", error);
      }
    };
    fetchDocuments();
  }, [resetFrame]);


  const handleNewDocument = (newDoc) => {
    setDocuments([...documents, newDoc]);
    setResetFrame(true);
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