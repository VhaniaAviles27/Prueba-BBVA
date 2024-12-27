import React, { useState, useEffect } from 'react';
import './Query.css'; 

interface Client {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

const Query: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [searchName, setSearchName] = useState('');
  const [searchLastname, setSearchLastname] = useState('');
  const [searchEmail, setSearchEmail] = useState('');

  useEffect(() => {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      const parsedClients = JSON.parse(storedClients);
      console.log('Clientes cargados:', parsedClients);
      setClients(parsedClients);
    }
  }, []);
  

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  
    const filledFields = [searchName, searchLastname, searchEmail].filter((field) => field.trim() !== '').length;
    if (filledFields < 2) {
      alert('Por favor, complete al menos dos campos para buscar.');
      return;
    }
  
    const results = clients.filter((client) => {
      const nameMatch = searchName
        ? client.name?.toLowerCase().includes(searchName.toLowerCase())
        : true;
      const lastNameMatch = searchLastname
        ? client.lastname?.toLowerCase().includes(searchLastname.toLowerCase())
        : true;
      const emailMatch = searchEmail
        ? client.email?.toLowerCase().includes(searchEmail.toLowerCase())
        : true;
  
      return nameMatch && lastNameMatch && emailMatch;
    });
  
    setFilteredClients(results);
  };  

  return (
    <div className="query-container">
      <h1>Consulta</h1>
      <form onSubmit={handleSearch} className="query-form">
        <div className="form-group">
          <label htmlFor="firstName">Nombres:</label>
          <input
            id="name"
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="query-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellidos:</label>
          <input
            id="lastName"
            type="text"
            value={searchLastname}
            onChange={(e) => setSearchLastname(e.target.value)}
            className="query-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="query-input"
          />
        </div>
        <button type="submit" className="query-button">Buscar</button>
      </form>

      <table className="query-table">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.lastname}</td>
                <td>{client.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="no-results">
                No se encontraron clientes.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Query;
