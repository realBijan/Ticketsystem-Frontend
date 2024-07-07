import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TicketListPage() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('/api/tickets')
      .then(response => setTickets(response.data))
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);

  return (
    <div>
      <h1>Ticketliste</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.title} - {ticket.status}
            <Link to={`/edit/${ticket.id}`}>Bearbeiten</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketListPage;