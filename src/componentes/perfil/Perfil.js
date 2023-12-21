import React from 'react';
import './Perfil.css';

import foto from '../images/avatars/image-amyrobson.png'

export const Perfil = () => {
    return (
        <div className='Perfil'>
            <img src={foto}/>
            <p>amyrobson</p>
            <p>1 month ago</p>
        </div>
    )
}