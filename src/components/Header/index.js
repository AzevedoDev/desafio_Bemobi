import React, { useEffect, useState } from 'react';
import LogoHapz from '../../assets/images/svg/hapz-logo.svg';
import api from '../../services/api';
import './style.scss';
import ContractBox from '../ContractBox';
import DataBox from '../DataBox';
import SpinnerIcon from '../../assets/images/svg/Spinner.svg';

export default function Header() {
  const [recarga, setRecarga] = useState([]);
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState('contract');

  async function getRecarga() {
    setLoading(true);
    const response = await api.get('/recarga');
    setRecarga(response.data);
    setLoading(false);
  }
  async function getDados() {
    setLoading(true);
    const response = await api.get('/dados');
    setDados(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getDados();
    getRecarga();
  }, []);

  return (
    <div className={select === 'data' ? 'hapzheader bghapz-man' : 'hapzheader bghapz-woman'}>
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
        {loading ? (
          <img src={SpinnerIcon} alt="Carregando" />
        ) : select !== 'data' ? (
          <ContractBox props={recarga} />
        ) : (
          <DataBox props={dados} />
        )}
      </div>
      <div className="tabs">
        <button
          onClick={() => setSelect('contract')}
          type="button"
          className={select === 'contract' ? 'contractcheck' : ''}
        >
          Créditos
        </button>
        <button
          onClick={() => setSelect('data')}
          type="button"
          className={select === 'data' ? 'datacheck' : ''}
        >
          dados
        </button>
      </div>
    </div>
  );
}
