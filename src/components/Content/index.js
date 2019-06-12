import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.scss';

export default function Content() {
  const [sva, setSva] = useState([]);
  async function getSVA() {
    const response = await api.get('/sva');
    setSva(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getSVA();
  }, []);
  return (
    <div className="container content">
      {sva.map(c => (
        <div className="contentcard" key={c.id}>
          <img src={c.image} alt={c.name} />
          <div>
            <h2>{c.name}</h2>
          </div>
          <p>{c.gain}</p>
          <span>{c.description}</span>
          <button type="button">assinar</button>
        </div>
      ))}
    </div>
  );
}
