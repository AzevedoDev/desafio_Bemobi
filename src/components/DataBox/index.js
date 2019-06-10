import React from 'react';
import './style.scss';

export default function ContractBox({ props }) {
  return (
    <div className="data">
      {props.map(r => (
        <div className="databox" key={r.id}>
          <span>{r.gb_amount}GB</span>
          <span>Redes sociais Ilimitadas</span>
          <button type="button">contratar</button>
        </div>
      ))}
    </div>
  );
}
