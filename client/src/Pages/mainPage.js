import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

import { Logout } from '../Components/Login/logout';

import data_1 from '../Data/book1';
import data_2 from '../Data/book2';

export const MainPage = (props) => {
  const [userName, setUserName] = useState(null);
  const [profileData, setProfileData] = useState({'name':null})

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
    .then((response) => {
      const res =response.data
      res.access_token && props.setToken(res.access_token)
      setProfileData(({
        name: res.name
      }))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className='mainPage'>
      <div className='mainPageTitle'>숨은 고정관념 찾기</div>
      <Logout
        name={profileData.name}
        removeToken={props.removeToken}
      />
      <div className='bookBtnContainer'>
        <Link
          className='bookBtn'
          style={{ textDecoration: 'none' }}
          to={'/play'}
          state={{ title: '종이 봉지 공주', data: data_1, name: userName }}
        >
          <img className='bookCover' src='book1/cover.jpg' />
          종이 봉지 공주
        </Link>
        <Link
          className='bookBtn'
          style={{ textDecoration: 'none' }}
          to={'/play'}
          state={{
            title: '치과 의사 드소토 선생님',
            data: data_2,
            name: userName,
          }}
        >
          <img className='bookCover' src='book2/cover.jpg' />
          치과 의사 드소토 선생님
        </Link>
      </div>
    </div>
  );
};
