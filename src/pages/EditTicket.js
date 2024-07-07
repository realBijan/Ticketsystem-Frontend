import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditTicket() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get(`/api/tickets/${id}`)
      .then(response => {
        const ticket = response.data;
        setTitle(ticket.title);
        setDescription(ticket.description);
        setStatus(ticket.status);
      })
      .catch(error => console.error('Error fetching ticket:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/tickets/${id}`, { title, description, status })
      .then(response => console.log('Ticket updated:', response.data))
      .catch(error => console.error('Error updating ticket:', error));
  };

  return (
    <div>
      <h1>Ticket bearbeiten</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titel</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Beschreibung</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)} required>
            <option value="open">Offen</option>
            <option value="in_progress">In Bearbeitung</option>
            <option value="closed">Geschlossen</option>
          </select>
        </div>
        <button type="submit">Aktualisieren</button>
      </form>
    </div>
  );
}

export default EditTicket;