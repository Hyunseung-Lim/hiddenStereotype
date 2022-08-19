import React, { useState } from 'react'
import './infobar.css'

export const Infobar = (props) => {

    if(props.infoType == 1)
    return(
        <nav className='infobar'>
            <div className='infoType'>
                <button className='infoBtn' onClick={props.setTypeOne}> 1 </button>
                <button className='infoBtn' onClick={props.setTypeTwo}> 2 </button>
                <button className='infoBtn' onClick={props.setTypeThree}> 3 </button>
            </div>
        </nav>
    )
    else if(props.infoType == 2)
    return(
        <nav className='infobar'>
            <div className='infoType'>
                <button className='infoBtn' onClick={props.setTypeOne}> 1 </button>
                <button className='infoBtn' onClick={props.setTypeTwo}> 2 </button>
                <button className='infoBtn' onClick={props.setTypeThree}> 3 </button>
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
                <button className='infoBtn' onClick={props.setTypeOne}> 1 </button>
                <button className='infoBtn' onClick={props.setTypeTwo}> 2 </button>
                <button className='infoBtn' onClick={props.setTypeThree}> 3 </button>
            </div>
            <div className='stereoNum'>
                3    
            </div>
            개의 고정관념 발견
        </nav>
    )
}