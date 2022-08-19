import React, { useRef, useState, useEffect, useCallback } from 'react';
import axios from "axios"

import { useLocation } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/navbar';
import { Infobar } from '../Components/Infobar/infobar';
import { PageViewer } from '../Components/PageViewer/pageViewer';

import './pages.css';

export const PlayPage = () => {
  // Get title and data from Mainpage
  const location = useLocation();
  const { title, data, bookNum, userName } = location.state;

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

  // change Infobar State

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

  // update Database by axios

  function updateData() {
    axios({
      method: "POST",
      url:"/updatebook",
      data: { bookNum: bookNum, bookData: data }
    })}

  return (
    <div className='container'>
      <Navbar title={title} updateData={updateData}/>
      <div className='playContents'>
        <div className='bookContainer'>
          <button className='turnBtn leftBtn' onClick={prevPage}>
            <img src="img/leftBtn.png"/>
          </button>
          <div className='pageContainer' ref={pageContainerRef}>
            <div className='pages' ref={pageRef}>
              <PageViewer
                infoType={infoType}
                num={leftPageNum}
                userName={userName}
                data={stateData}
                setData={setStateData}
              />
              <PageViewer
                infoType={infoType}
                num={rightPageNum}
                userName={userName}
                data={stateData}
                setData={setStateData}
              />
            </div>
          </div>
          <button className='turnBtn rightBtn' onClick={nextPage}>
            <img src="img/rightBtn.png"/>
          </button>
        </div>
        <Infobar infoType={infoType} setTypeOne={setTypeOne} setTypeTwo={setTypeTwo} setTypeThree={setTypeThree} />
      </div>
    </div>
  );
};
