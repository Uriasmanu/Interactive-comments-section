import './reply.css'

import icon from '../images/icon-reply.svg'

export const Reply = () =>{
    return(
        <div>
            <button className='reply'>
                <img src={icon} />
                Reply
            </button>
        </div>
    )
}