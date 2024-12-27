import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import './Login.css'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const validCredentials = {
    email: 'admin@example.com',
    password: '123456',
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === validCredentials.email && password === validCredentials.password) {
      login();
      navigate('/');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Iniciar Sesión</h2>
        {error && <p className="login-error">{error}</p>}
        <div className="login-field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="login-input"
          />
        </div>
        <div className="login-field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button" onClick={handleLogin}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
