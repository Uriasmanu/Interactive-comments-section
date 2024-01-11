// Card.js
import React, { useState } from 'react';
import './Botao.css';

import mais from '../images/icon-plus.svg'
import menos from '../images/icon-minus.svg'

export const Botao = () => {

  const [valor, setValor] = useState(12);

  const aumentar = () =>{
    setValor(valor + 1);
  };

  const diminuir = () =>{
    setValor(valor - 1);
  };

  return (
    <div className="Botao">
      <button onClick={aumentar}>
        <img src={mais} alt='botoa de mais' />
      </button>
      <input type='text' value={valor} />
      <button onClick={diminuir} >
        <img src={menos} alt='botoa de menos'/>
      </button>
    </div>
  );
};
