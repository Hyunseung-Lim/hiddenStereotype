import React, { useState } from 'react';

import { useLocation } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/navbar'
import { Infobar } from '../Components/Infobar/infobar'
import { PageViewer } from '../Components/PageViewer/pageViewer'

import './pages.css'

export const PlayPage = () => {

    // Get title and data from Mainpage
    const location = useLocation()
    const { title, data } = location.state

    // Define page number
    const [leftPageNum, setLeftPageNum] = useState(0)
    const [rightPageNum, setRightPageNum] = useState(1)

    function prevPage() {
        if(leftPageNum > 0) {
            setLeftPageNum(leftPageNum - 2);
            setRightPageNum(rightPageNum - 2);            
        }
    }

    function nextPage() {
        if(data.length > rightPageNum ) {
            setLeftPageNum(leftPageNum + 2);
            setRightPageNum(rightPageNum + 2);            
        }
    }

    return(
        <>
            <Navbar title={title}/>
            <div className='playContents'>
                <div className='bookContainer'>
                    <button className='btn' onClick={prevPage}> prev </button>
                    <div className='leftPage'>
                        <PageViewer num={leftPageNum} data={data}/>
                    </div>
                    <div className='rightPage'>
                        <PageViewer num={rightPageNum} data={data}/>
                    </div>
                    <button className='btn' onClick={nextPage}> next </button>
                </div>
                <div>
                    {title}
                </div>
                <Infobar/>          
            </div>
        </>
    )
}