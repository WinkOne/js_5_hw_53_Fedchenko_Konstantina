import React from 'react';
import './Message.css'

const Message = (props) => {
    return (
            <div className={props.key}>
                <p className='reception'>{props.text}
                    <button onClick={props.remove} className='removeMessage'>
                        <i className="far fa-trash-alt"> </i>
                    </button>
                </p>
            </div>
    );
};

export default Message;
