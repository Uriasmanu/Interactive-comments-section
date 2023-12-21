// Card.js
import React from 'react';
import './Botao.css';

import mais from '../images/icon-plus.svg'
import menos from '../images/icon-minus.svg'

export const Botao = () => {
  return (
    <div className="Botao">
      <button>
        <img src={mais}/>
      </button>
      <input type='text' value={12} />
      <button>
        <img src={menos}/>
      </button>
    </div>
  );
};
