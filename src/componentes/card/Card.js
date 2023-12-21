// Card.js
import React from 'react';
import './Card.css';
import { Botao } from '../botao/Botao';
import { Perfil } from '../perfil/Perfil';



export const Card = () => {
  return (
    <div className="Card">
      <Botao/>
      <div className='Perfil-itens'>
        <Perfil/>
      
      </div>
    </div>
  );
};
