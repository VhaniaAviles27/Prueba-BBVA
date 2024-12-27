import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserPlus, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './SideBar.css';

const SideBar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Sistema Clientes</h2>
      <nav>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink to="/" end className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <FaHome className="sidebar-icon" />
              Inicio
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/client" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <FaUserPlus className="sidebar-icon" />
              Nuevo Cliente
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/query" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <FaUsers className="sidebar-icon" />
              Consultar Cliente
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/config" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <FaCog className="sidebar-icon" />
              Configuración
            </NavLink>
          </li>
          <li className="sidebar-item">
            <a href="#" onClick={handleLogout} className="sidebar-link">
              <FaSignOutAlt className="sidebar-icon" />
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
