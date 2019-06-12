import React from 'react';
import './style.scss';

export default function ContractBox({ property }) {
  return (
    <div className="data">
      {property.map(r => (
        <div className="databox" key={r.id}>
          <span>{r.gb_amount}GB</span>
          <span>Redes sociais Ilimitadas</span>
          <button type="button">contratar</button>
        </div>
      ))}
    </div>
  );
}
