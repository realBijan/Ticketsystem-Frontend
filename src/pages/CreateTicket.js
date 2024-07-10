import React, { useState } from 'react';
import axios from 'axios';

function CreateTicket() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [module, setModule] = useState('');
  const [material, setMaterial] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/tickets', { title, email, module, material, description })
      .then(response => console.log('Ticket created:', response.data))
      .catch(error => console.error('Error creating ticket:', error));
  };

  return (
    <div>
      <h1>Ticket erstellen</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titel</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>E-Mail</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Modul</label>
          <input type="text" value={module} onChange={e => setModule(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Material</label>
          <input type="text" value={material} onChange={e => setMaterial(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Beschreibung</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Erstellen</button>
      </form>
    </div>
  );
}

export default CreateTicket;
