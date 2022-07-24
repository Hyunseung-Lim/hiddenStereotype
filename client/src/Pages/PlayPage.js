import React, { useRef, useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/navbar';
import { Infobar } from '../Components/Infobar/infobar';
import { PageViewer } from '../Components/PageViewer/pageViewer';

import './pages.css';

export const PlayPage = () => {
  // Get title and data from Mainpage
  const location = useLocation();
  const { title, data } = location.state;

  // Define page number
  const [leftPageNum, setLeftPageNum] = useState(0);
  const [rightPageNum, setRightPageNum] = useState(1);
  const pageContainerRef = useRef(null);
  const pageRef = useRef(null);

  function prevPage() {
    if (leftPageNum > 0) {
      setLeftPageNum(leftPageNum - 2);
      setRightPageNum(rightPageNum - 2);
    }
  }

  function nextPage() {
    if (data.length > rightPageNum) {
      setLeftPageNum(leftPageNum + 2);
      setRightPageNum(rightPageNum + 2);
    }
  }

  return (
    <div className='container'>
      <Navbar title={title} />
      <div className='playContents'>
        <div className='bookContainer'>
          <button className='btn' onClick={prevPage}>
            <span>prev</span>
          </button>
          <div className='pageContainer' ref={pageContainerRef}>
            <div className='pages' ref={pageRef}>
              <PageViewer num={leftPageNum} data={data} />
              <PageViewer num={rightPageNum} data={data} />
            </div>
          </div>
          <button className='btn' onClick={nextPage}>
            <span>next</span>
          </button>
        </div>
        <Infobar />
      </div>
    </div>
  );
};
