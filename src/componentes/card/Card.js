// Card.js
import React from 'react';
import './Card.css';
import { Botao } from '../botao/Botao';
import { Perfil } from '../perfil/Perfil';
import Textos from '../texto/Textos';
import { Reply } from '../reply';
import { CardMensagem } from '../cardMensagem';



export const Card = () => {
  return (
    <div className='container'>
    <div className="Card">
      <Botao/>
      <div className='Perfil-itens'>
        <Perfil/>
       <Textos texto="Inpressvel Though it seems the dung feature omund be enproved But everal it looks incredible. You've nailed the design and the responsiveness afrou peints works mally wel"/>
      </div>
      <Reply/>
    </div>
    <CardMensagem/>
    </div>
  );
};
