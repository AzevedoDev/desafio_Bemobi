import React from 'react';
import './style.scss';

export default function ContractBox({ props }) {
  return (
    <div className="contract">
      {props.map(r => (
        <div className="contractbox" key={r.id}>
          <span>R${r.amount}</span>
          <span>E ganhe R${r.bonus_amount} de bônus</span>
          <button type="button">contratar</button>
        </div>
      ))}
    </div>
  );
}
