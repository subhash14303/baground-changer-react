import React from 'react';
import './botton-comp.css'
const ButtonComp = ({color,setColor}) => {
    return (
        <div>
            <div>
                <button className='button' onClick={()=>{
                    test(color,setColor);
                }} > change color</button>
            </div>
        </div>
    );
}

function test(color,setColor)
{
    setColor(color);
}


export default ButtonComp;

