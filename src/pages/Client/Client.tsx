import React, { useState } from 'react';
import './Client.css';

interface Client {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

const Client: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !lastName || !email) {
      alert('Por favor, complete todos los campos');
      return;
    }

    const newClient: Client = {
      id: Date.now(),
      name,
      lastName,
      email,
    };

    const storedClients = localStorage.getItem('clients');
    const clients = storedClients ? JSON.parse(storedClients) : [];
    clients.push(newClient);
    localStorage.setItem('clients', JSON.stringify(clients));

    alert('Cliente guardado exitosamente');
    setName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div className="client-container">
      <h1 className="client-title">Nuevo Cliente</h1>
      <form onSubmit={handleSave} className="client-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Apellido:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
            placeholder="Ingrese el apellido"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Ingrese el email"
          />
        </div>
        <button type="submit" className="form-button">Guardar Cliente</button>
      </form>
    </div>
  );
};

export default Client;
