// Card.js
import React, { useState } from 'react';
import './Card.css';
import { Botao } from '../botao/Botao';
import { Perfil } from '../perfil/Perfil';
import Textos from '../texto/Textos';
import { Reply } from '../reply';
import { CardMensagem } from '../cardMensagem';

import perfil from '../images/avatars/image-juliusomo.png';

export const Card = ({ nome, foto, texto, comentariosIniciais }) => {
  const [comentarios, setComentarios] = useState(comentariosIniciais || []);
  const [exibirCardMensagem, setExibirCardMensagem] = useState(false);
  const [fotoCardMensagem, setFotoCardMensagem] = useState(true); // Adicione o estado para a foto do CardMensagem

  const adicionarComentario = (novoComentario) => {
    setComentarios([...comentarios, { ...novoComentario, foto: fotoCardMensagem }]);
    setExibirCardMensagem(false); // Feche o CardMensagem após adicionar um comentário
  };

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
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario">
          <Card
            nome={comentario.nome}
            foto={perfil}
            texto={comentario.texto}
            comentariosIniciais={comentario.comentarios}
          />
        </div>
      ))}
      {exibirCardMensagem && (
        <CardMensagem
          onReply={adicionarComentario}
          setFotoCardMensagem={setFotoCardMensagem} // Passe a função para definir a foto do CardMensagem
        />
      )}
    </div>
  );
};
