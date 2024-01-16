// App.js
import React from 'react';
import './App.css';
import { Card } from './componentes/card/Card';

import foto1 from './componentes/images/avatars/image-amyrobson.png';
import foto2 from './componentes/images/avatars/image-maxblagun.png';
import foto3 from './componentes/images/avatars/image-ramsesmiron.png';

function App() {
  const dadosCards = [
    {
      nome: 'amyrobson',
      foto: foto1,
      texto: "Inpressvel Though it seems the dung feature omund be enproved But everal it looks incredible. You've nailed the design and the responsiveness afrou peints works mally wel",
      comentarios: [
        { nome: 'maxblagun', foto: foto2, texto: 'Woah, your project looks awesome!' },
        { nome: 'ramsesmiron', foto: foto3, texto: '@maxblagun If you\'re still new, I\'d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React.' },
      ],
    },
    {
      nome: 'maxblagun',
      foto: foto2,
      texto: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      comentarios: [
        { nome: 'amyrobson', foto: foto1, texto: 'Thank you! I\'ve been coding for a few years now. For learning React, I recommend starting with the official React documentation and some online courses.' },
      ],
    },
    {
      nome: 'ramsesmiron',
      foto: foto3,
      texto: "@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead, but lay a solid foundation first.",
      comentarios: [
<<<<<<< HEAD
        { nome: 'maxblagun', foto: foto2, texto: "" },
=======
        { nome: 'maxblagun', foto: foto2, texto: "@amyrobson Thank you! I\'ll check out the React documentation and some courses." },
>>>>>>> 13a9f114d81b226568c082b5560bfe6a632e3c53
      ],
    },
  ];

  return (
    <div className="App">
      {dadosCards.map((dadosCard, index) => (
        <Card key={index} {...dadosCard} />
      ))}
    </div>
  );
}

export default App;
