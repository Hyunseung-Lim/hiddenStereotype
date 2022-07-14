import React, { useState } from 'react';

import { useLocation } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/navbar'
import { Infobar } from '../Components/Infobar/infobar'

import './pages.css'

export const PlayPage = () => {
    const location = useLocation()
    const { title } = location.state

    return(
        <>
            <Navbar title={title}/>
            <div className='playContents'>
                <div className='bookContainer'>
                    <div className='leftPage'>

                    </div>
                    <div className='rightPage'>

                    </div>
                </div>
                <div>
                    {title}
                </div>
                <Infobar/>          
            </div>
        </>
    )
}