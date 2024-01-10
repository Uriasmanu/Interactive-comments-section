import './mensagem.css'

import perfil from '../images/avatars/image-juliusomo.png'
import { useState } from 'react'

export const CardMensagem = () => {
    
    const [texto, setTexto] = useState('');

    const escrita = (event) => {
        setTexto(event.target.value)
    }

    return (
        <div className='container-Texto'>
            <img src={perfil} />
            <div className='input'>
                <label htmlFor="caixaDeTexto"></label>
                <input
                    placeholder="Digite sua mensagem"
                    type='text'
                    id="caixaDeTexto"
                    value={texto}
                    onChange={escrita}
                ></input>
            </div>
            <button>Reply</button>
        </div>
    )
}