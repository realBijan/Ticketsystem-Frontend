import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './TicketListPage.css';
import { UserContext } from '../UserContext';

function TicketListPage() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Fehler im Skript Kapitel 3',
      email: 'student1@example.com',
      module: 'DLBWIEWI',
      material: 'Lernskript',
      description: 'Ein Tippfehler im dritten Absatz. könen anstatt können',
      status: 'offen',
    },
    {
      id: 2,
      title: 'Unklare Formulierung in Übung 5',
      email: 'student2@example.com',
      module: 'DLBINGOPJ',
      material: 'Übungsheft',
      description: 'Die Aufgabenstellung ist nicht klar verständlich.',
      status: 'in Bearbeitung',
    },
    {
      id: 3,
      title: 'Veraltete Literaturangabe',
      email: 'student3@example.com',
      module: 'IOBP01',
      material: 'Literaturliste',
      description: 'Eine der Quellen ist nicht mehr aktuell.',
      status: 'geschlossen',
    },
    {
      id: 4,
      title: 'Veraltete Literaturangabe',
      email: 'student3@example.com',
      module: 'IOBP01',
      material: 'Literaturliste',
      description: 'Eine der Quellen ist nicht mehr aktuell.',
      status: 'geschlossen',
    },
    {
      id: 5,
      title: 'Veraltete Literaturangabe',
      email: 'student3@example.com',
      module: 'IOBP01',
      material: 'Literaturliste',
      description: 'Eine der Quellen ist nicht mehr aktuell.',
      status: 'geschlossen',
    },
    {
      id: 6,
      title: 'Veraltete Literaturangabe',
      email: 'student3@example.com',
      module: 'IOBP01',
      material: 'Literaturliste',
      description: 'Eine der Quellen ist nicht mehr aktuell.',
      status: 'geschlossen',
    },
  ]);

  const [filteredTickets, setFilteredTickets] = useState(tickets);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredTickets(tickets);
    } else {
      setFilteredTickets(tickets.filter(ticket => ticket.module.toLowerCase().includes(searchTerm.toLowerCase())));
    }
  }, [searchTerm, tickets]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Ticketliste</h1>
      <div className="filterContainer">
        <label htmlFor="moduleSearch">Suche nach Modul: </label>
        <input
          id="moduleSearch"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Modul eingeben"
          className="input"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Titel</th>
            <th className="th">Email</th>
            <th className="th">Modul</th>
            <th className="th">Material</th>
            <th className="th">Beschreibung</th>
            <th className="th">Status</th>
            <th className="th">Aktionen</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {filteredTickets.map(ticket => (
            <tr key={ticket.id} className="tr">
              <td className="td">{ticket.title}</td>
              <td className="td">{ticket.email}</td>
              <td className="td">{ticket.module}</td>
              <td className="td">{ticket.material}</td>
              <td className="td">{ticket.description}</td>
              <td className="td">{ticket.status}</td>
              <td className="td">
                {user ? <Link to={`/edit/${ticket.id}`}>Bearbeiten</Link> : 'Keine Berechtigung'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketListPage;
