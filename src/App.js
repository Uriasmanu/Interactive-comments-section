import './App.css';
import { Card } from './componentes/card/Card';

import foto1 from './componentes/images/avatars/image-amyrobson.png'
import foto2 from './componentes/images/avatars/image-maxblagun.png'
import foto3 from './componentes/images/avatars/image-ramsesmiron.png'

function App() {



  const dadosCards = [
    {
      nome: 'amyrobson',
      foto: foto1,
      texto: "Inpressvel Though it seems the dung feature omund be enproved But everal it looks incredible. You\'ve nailed the design and the responsiveness afrou peints works mally wel",
    },
    {
      nome: 'maxblagun',
      foto: foto2,
      texto: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    },
    {
      nome: 'ramsesmiron',
      foto: foto3,
      texto: "@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React It's very tempting to jump ahead but lay a solid foundation first.",
    },
  ];

  return (
    <div className="App">
      {dadosCards.map((dadosCards, index) => (
        <Card key={index} {...dadosCards} />
      ))}
    </div>
  );
}

export default App;
