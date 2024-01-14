// Perfil.js
import React from 'react';
import './Perfil.css';

function numeroAleatorio() {
    return Math.floor(Math.random() * 12) + 1;
}

export const Perfil = ({ nome, foto }) => {
    const meses = numeroAleatorio();

  return (
    <div className='Perfil'>
      <img src={foto} alt='foto de perfil' />
      <p>{nome}</p>
      <p>{meses} month ago</p>
    </div>
  );
};
