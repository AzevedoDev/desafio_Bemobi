import React, { useEffect, useState } from 'react';
import LogoHapz from '../../assets/images/svg/hapz-logo.svg';
import api from '../../services/api';

export default function Header() {
  const [recarga, setRecarga] = useState([]);
  // const [dados, setDados] = useState([]);
  // const [sva, setSva] = useState([]);

  async function getRecarga() {
    const response = await api.get('/recarga');
    setRecarga(response.data);
  }
  // async function getDados() {
  //   const response = await api.get('/dados');
  //   setDados(response.data);
  // }
  // async function getSVA() {
  //   const response = await api.get('/sva');
  //   setSva(response.data);
  // }
  useEffect(() => {
    // getDados();
    // getSVA();
    getRecarga();
  }, []);

  return (
    <div className="hapzheader">
      <h1>
        <a href="home">
          <img src={LogoHapz} alt="HAPZ logo" />
        </a>
      </h1>
      <div className="container">
        <h2>
          <small>VOCÊ ESTÁ SEM SALDO</small>
        </h2>
        <h2>recarregue agora</h2>
        <div className="contract">
          {recarga.map(r => (
            <div className="contractbox" key={r.id}>
              <span>R${r.amount}</span>
              <span>E ganhe R${r.bonus_amount} de bônus</span>
              <button type="button">contratar</button>
            </div>
          ))}
        </div>
      </div>
      <div className="tabs">
        <button type="button">Créditos</button>
        <button type="button">dados</button>
      </div>
    </div>
  );
}
