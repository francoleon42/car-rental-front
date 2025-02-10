// components/Auth/AuthContainer.jsx
import { useState } from 'react';
import  LoginForm  from './components/LoginForm';
import  SignupForm from './components/SignupForm';
import  ForgotPasswordForm  from './components/ForgotPasswordForm';

const AuthPage = () => {
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {authMode === 'login' && 'Iniciar Sesión'}
            {authMode === 'signup' && 'Registrarse'}
            {authMode === 'forgot' && 'Recuperar Contraseña'}
          </h2>
        </div>

        {authMode === 'login' && (
          <LoginForm
            switchToSignup={() => setAuthMode('signup')}
            switchToForgot={() => setAuthMode('forgot')}
          />
        )}

        {authMode === 'signup' && (
          <SignupForm switchToLogin={() => setAuthMode('login')} />
        )}

        {authMode === 'forgot' && (
          <ForgotPasswordForm switchToLogin={() => setAuthMode('login')} />
        )}

        {/* Social Login (Opcional) */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">O continúa con</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="p-2 rounded-full border hover:bg-gray-50 transition-colors">
              {/* Icono Google */}
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-50 transition-colors">
              {/* Icono Facebook */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;