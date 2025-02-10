import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Home = () => {
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState("es");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    terms: false
  });

  const translations = {
    es: {
      login: "Iniciar Sesión",
      signup: "Registrarse",
      forgotPassword: "Olvidé mi contraseña",
      email: "Correo electrónico",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      fullName: "Nombre completo",
      terms: "Acepto los términos y condiciones",
      recover: "Recuperar Contraseña",
      switchToLogin: "¿Ya tienes una cuenta? Inicia sesión",
      switchToSignup: "¿No tienes cuenta? Regístrate",
      rememberMe: "Recordarme"
    },
    en: {
      login: "Login",
      signup: "Sign Up",
      forgotPassword: "Forgot Password",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      fullName: "Full Name",
      terms: "I accept the terms and conditions",
      recover: "Recover Password",
      switchToLogin: "Already have an account? Login",
      switchToSignup: "Don't have an account? Sign up",
      rememberMe: "Remember me"
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (authMode === "login") {
        const { email, password } = formData;
        const userData = await login(email, password);
        console.log(userData);
      } else if (authMode === "signup") {
        const { fullName, email, password } = formData;
        const userData = await signup(fullName, email, password);
        console.log(userData); 
      } else if (authMode === "forgot") {
        const { email } = formData;
        const response = await recoverPassword(email);
        console.log(response);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
          alt="Luxury Car"
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/75"></div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-gray-100 overflow-y-auto max-h-screen">
        <div className="w-full max-w-md space-y-4">
          {/* Language Toggle */}
          <div className="flex justify-end">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="text-xs text-gray-600 hover:text-blue-600"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Auth Forms */}
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === "login" && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      {translations[language].email}
                    </label>
                    <div className="mt-1 relative">
                      <FaEnvelope className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                      <input
                        type="email"
                        className="pl-9 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      {translations[language].password}
                    </label>
                    <div className="mt-1 relative">
                      <FaLock className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="pl-9 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-400 text-sm"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {authMode === "signup" && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      {translations[language].fullName}
                    </label>
                    <div className="mt-1 relative">
                      <FaUser className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                      <input
                        type="text"
                        className="pl-9 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  {/* Add email and password fields similar to login */}
                </>
              )}

              {authMode === "forgot" && (
                <div>
                  <p className="text-xs text-gray-600 mb-3">
                    Enter your email to recover your password
                  </p>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                    <input
                      type="email"
                      className="pl-9 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 text-sm rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <span className="inline-block animate-spin rounded-full h-3 w-3 border-t-2 border-white"></span>
                ) : (
                  translations[language][authMode === "forgot" ? "recover" : authMode]
                )}
              </button>

              {authMode === "login" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-3 w-3" />
                      <span className="ml-2 text-xs text-gray-600">{translations[language].rememberMe}</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setAuthMode("forgot")}
                      className="text-xs text-blue-600 hover:text-blue-500"
                    >
                      {translations[language].forgotPassword}
                    </button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                </div>
              )}
            </form>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                className="text-xs text-blue-600 hover:text-blue-500"
              >
                {translations[language][authMode === "login" ? "switchToSignup" : "switchToLogin"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;