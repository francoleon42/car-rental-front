// components/Auth/ForgotPasswordForm.jsx
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
//import { forgotPassword } from '../../servicios/authServicio';

const ForgotPasswordForm = ({ switchToLogin }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      //await forgotPassword({ email });
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Error al enviar el email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && (
        <div className="text-green-500 text-sm">
          Se ha enviado un email con las instrucciones para restablecer tu contraseña
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            required
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Enviar Instrucciones'}
      </button>

      <div className="text-center mt-4">
        <button
          type="button"
          onClick={switchToLogin}
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          Volver al Login
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;