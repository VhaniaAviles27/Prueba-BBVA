import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Navigation/Layout';
import Home from './pages/Home/Home';
import Client from './pages/Client/Client';
import Query from './pages/Query/Query';
import Config from './pages/Config/Config';
import Login from './pages/Login/Login';
import ProtectedRoute from './Navigation/ProtectedRoute'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="client" element={<Client />} />
          <Route path="query" element={<Query />} />
          <Route path="config" element={<Config />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

