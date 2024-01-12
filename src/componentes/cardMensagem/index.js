// CardMensagem.js
import React, { useState } from 'react';
import './mensagem.css';
import perfil from '../images/avatars/image-juliusomo.png';

export const CardMensagem = ({ onReply, setFotoCardMensagem }) => {
  const [texto, setTexto] = useState('');

  const adicionarComentario = () => {
    const comentario = {
      nome: 'juliusomo',
      foto: perfil,
      texto: texto,
      comentarios: []
    };
    onReply(comentario);
    setTexto('');
    setFotoCardMensagem(perfil);
  };

  const escreverMensagem = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div className='container-Texto'>
      <img src={perfil} alt='foto de perfil' />
      <div className='input'>
        <label htmlFor="caixaDeTexto"></label>
        <input
          placeholder="Digite sua mensagem"
          type='text'
          id="caixaDeTexto"
          value={texto}
          onChange={escreverMensagem}
        ></input>
      </div>
      <button onClick={adicionarComentario}>Reply</button>
    </div>
  );
};
