import './reply.css'

import icon from '../images/icon-reply.svg'

export const Reply = ({onReplyClick}) =>{
    return(
        <div className='container-reply'>
            <button className='reply' onClick={onReplyClick} >
                <img src={icon} alt='icone' />
                Reply
            </button>
        </div>
    )
}