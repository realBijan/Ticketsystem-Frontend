// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TicketListPage from './pages/TicketListPage';
import CreateTicket from './pages/CreateTicket';
import EditTicket from './pages/EditTicket';
import Header from './components/Header'; // Importieren Sie die Header-Komponente

function App() {
  return (
    <div className="App">
      <Header /> {/* Fügen Sie die Header-Komponente hinzu */}
      <main>
        <Routes>
          <Route path="/" element={<TicketListPage />} />
          <Route path="/create" element={<CreateTicket />} />
          <Route path="/edit/:id" element={<EditTicket />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
