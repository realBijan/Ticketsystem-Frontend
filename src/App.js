import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TicketListPage from './pages/TicketListPage';
import CreateTicket from './pages/CreateTicket';
import EditTicket from './pages/EditTicket';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Ticketliste</Link></li>
          <li><Link to="/create">Ticket erstellen</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<TicketListPage />} />
        <Route path="/create" element={<CreateTicket />} />
        <Route path="/edit/:id" element={<EditTicket />} />
      </Routes>
    </div>
  );
}

export default App;
