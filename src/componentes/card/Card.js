// Card.js
import React, { useState } from 'react';
import './Card.css';
import { Botao } from '../botao/Botao';
import { Perfil } from '../perfil/Perfil';
import Textos from '../texto/Textos';
import { Reply } from '../reply';
import { CardMensagem } from '../cardMensagem';

export const Card = ({ nome, foto, texto }) => {
  const [exibirCardMensagem, setExibirCardMensagem] = useState(true);

  const botaoCardMensagem = () => {
    setExibirCardMensagem(!exibirCardMensagem);
  };

  return (
    <div className='container'>
      <div className="Card">
        <Botao />
        <div className='Perfil-itens'>
          <Perfil nome={nome} foto={foto} />
          <Textos texto={texto} />
        </div>
        <Reply onReplyClick={botaoCardMensagem} />
      </div>
      {exibirCardMensagem || <CardMensagem />}
    </div>
  );
};
