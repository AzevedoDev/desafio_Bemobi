import React, { useEffect, useState } from 'react';
import LogoHapz from '../../assets/images/svg/hapz-logo.svg';
import api from '../../services/api';
import './style.scss';
import ContractBox from '../ContractBox';

export default function Header() {
  const [recarga, setRecarga] = useState([]);
  const [dados, setDados] = useState([]);

  async function getRecarga() {
    // const response = await api.get('/recarga');
    // setRecarga(response.data);
    setRecarga([{ id: 1, amount: 15, bonus_amount: 5 }, { id: 2, amount: 20, bonus_amount: 10 }]);
  }
  async function getDados() {
    // const response = await api.get('/dados');
    setDados(response.data);
  }

  useEffect(() => {
    getDados();
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
        <ContractBox props={recarga} />
      </div>
      <div className="tabs">
        <button type="button">Créditos</button>
        <button type="button">dados</button>
      </div>
    </div>
  );
}
