import React, { useState } from 'react';
import axios from 'axios';

function CreateTicket() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/tickets', { title, description })
      .then(response => console.log('Ticket created:', response.data))
      .catch(error => console.error('Error creating ticket:', error));
  };

  return (
    <div>
      <h1>Ticket erstellen</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titel</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Beschreibung</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Erstellen</button>
      </form>
    </div>
  );
}

export default CreateTicket;