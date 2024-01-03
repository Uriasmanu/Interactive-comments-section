// Card.js
import React from 'react';
import './Card.css';
import { Botao } from '../botao/Botao';
import { Perfil } from '../perfil/Perfil';
import Textos from '../texto/Textos';



export const Card = () => {
  return (
    <div className="Card">
      <Botao/>
      <div className='Perfil-itens'>
        <Perfil/>
       <Textos/>
      </div>
    </div>
  );
};
