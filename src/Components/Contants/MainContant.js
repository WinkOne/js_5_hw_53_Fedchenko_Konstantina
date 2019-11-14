import React from 'react';
import './MainContant.css'

const MainContant = (props) => {
    return (
        <div className='add'>
            <input onChange={props.change} className='addInput' type="text" placeholder='Enter your text:'/>
            <button onClick={props.click} className='addBtn' ><i className="far fa-paper-plane"></i></button>
        </div>
    );
};

export default MainContant;