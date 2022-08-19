import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

import { MainNavbar } from '../Components/Navbar/mainNavbar';

export const MainPage = (props) => {
  const [userName, setUserName] = useState(null);
  const [profileData, setProfileData] = useState({'name':null})
  const [booksData, setBooksData] = useState([{'num':null, 'name':null, 'bookData':null}, {'num':null, 'name':null, 'bookData':null}])

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
      setBooksData(res.books)
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
      <MainNavbar
        name={profileData.name}
        removeToken={props.removeToken}
      />
      <div className='mainPageTitle'>읽고 싶은 책을 선택해주세요.</div>
      <div className='bookBtnContainer'>
        <Link
          className='bookBtn'
          style={{ textDecoration: 'none' }}
          to={'/play'}
          state={{
            title: '종이 봉지 공주', 
            data: booksData[0].bookData,
            bookNum: booksData[0].num,
            userName: profileData.name
          }}
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
            data: booksData[1].bookData,
            bookNum: booksData[1].num,
            userName: profileData.name
          }}
        >
          <img className='bookCover' src='book2/cover.jpg' />
          치과 의사 드소토 선생님
        </Link>
      </div>
    </div>
  );
};
