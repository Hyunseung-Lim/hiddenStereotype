import React, { useState } from 'react'
import './infobar.css'

export const Infobar = () => {

    const [ infoType, setInfoType ] = useState(1) 

    function setTypeOne () {
        setInfoType(1);
    }
    function setTypeTwo () {
        setInfoType(2);
    }
    function setTypeThree () {
        setInfoType(3);
    }
    
    if(infoType == 1)
    return(
        <nav className='infobar'>
            <div className='infoType'>
                <button className='infoBtn' onClick={setTypeOne}> 1 </button>
                <button className='infoBtn' onClick={setTypeTwo}> 2 </button>
                <button className='infoBtn' onClick={setTypeThree}> 3 </button>
            </div>
        </nav>
    )
    else if(infoType == 2)
    return(
        <nav className='infobar'>
            <div className='infoType'>
                <button className='infoBtn' onClick={setTypeOne}> 1 </button>
                <button className='infoBtn' onClick={setTypeTwo}> 2 </button>
                <button className='infoBtn' onClick={setTypeThree}> 3 </button>
            </div>
            <div className='stereoNum'>
                3    
            </div>
            개의 고정관념 발견
        </nav>
    )
    else
    return(
        <nav className='infobar'>
            <div className='infoType'>
                <button className='infoBtn' onClick={setTypeOne}> 1 </button>
                <button className='infoBtn' onClick={setTypeTwo}> 2 </button>
                <button className='infoBtn' onClick={setTypeThree}> 3 </button>
            </div>
            <div className='stereoNum'>
                3    
            </div>
            개의 고정관념 발견
        </nav>
    )
}