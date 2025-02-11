// components/Auth/AuthContainer.jsx
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import { FaGoogle, FaFacebookF, FaCarSide } from 'react-icons/fa';

const AuthPage = () => {
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
          alt="Luxury Car"
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/75"></div>
      </div>

      <div className="w-full max-w-lg md:max-w-xl lg:max-w-4xl bg-white rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-2xl">

        <div className="w-full max-w-lg md:max-w-3xl min-h-[700px] bg-white rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-2xl">


          <div className="text-center mb-8 ">
            <div className="flex justify-center mb-4">
              <FaCarSide className="text-4xl text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {authMode === 'login' && 'Bienvenido a CarRent'}
              {authMode === 'signup' && 'Únete a DriveHub'}
              {authMode === 'forgot' && 'Recupera tu acceso'}
            </h2>
            <p className="text-gray-500">
              {authMode === 'login' && 'Tu viaje perfecto comienza aquí'}
              {authMode === 'signup' && 'Empieza a explorar con nosotros'}
              {authMode === 'forgot' && 'Te ayudaremos a recuperar el acceso'}
            </p>
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

          <div className="mt-8 text-center text-sm text-gray-500">
            {authMode !== 'signup' && (
              <button
                onClick={() => setAuthMode('signup')}
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Crear cuenta nueva
              </button>
            )}
            {authMode !== 'login' && (
              <button
                onClick={() => setAuthMode('login')}
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Volver a login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;