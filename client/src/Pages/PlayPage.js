import React, { useRef, useState, useEffect, useCallback } from 'react';

import { useLocation } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/navbar';
import { Infobar } from '../Components/Infobar/infobar';
import { PageViewer } from '../Components/PageViewer/pageViewer';

import './pages.css';

export const PlayPage = () => {
  // Get title and data from Mainpage
  const location = useLocation();
  const { title, data, name } = location.state;

  // Define page number
  const [leftPageNum, setLeftPageNum] = useState(0);
  const [rightPageNum, setRightPageNum] = useState(1);
  const pageContainerRef = useRef(null);
  const pageRef = useRef(null);
  const [stateData, setStateData] = useState(data);

  const prevPage = useCallback(() => {
    if (leftPageNum > 0) {
      setLeftPageNum(leftPageNum - 2);
      setRightPageNum(rightPageNum - 2);
    }
  }, [leftPageNum, rightPageNum]);

  const nextPage = useCallback(() => {
    if (data.length > rightPageNum) {
      setLeftPageNum(leftPageNum + 2);
      setRightPageNum(rightPageNum + 2);
    }
  }, [data.length, leftPageNum, rightPageNum]);

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
              <PageViewer
                num={leftPageNum}
                name={name}
                data={stateData}
                setData={setStateData}
              />
              <PageViewer
                num={rightPageNum}
                name={name}
                data={stateData}
                setData={setStateData}
              />
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
