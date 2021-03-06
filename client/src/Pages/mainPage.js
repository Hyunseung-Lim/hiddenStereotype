import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Login } from '../Components/Login/login';

import data_1 from '../Data/book1';
import data_2 from '../Data/book2';

export const MainPage = () => {
  const [userName, setUserName] = useState(null);

  function changeUserName(name) {
    setUserName(name);
  }

  function getUserName() {
    return userName;
  }

  return (
    <div className='mainPage'>
      <div className='mainPageTitle'>숨은 고정관념 찾기</div>
      <Login
        userName={userName}
        changeUserName={changeUserName}
        getUserName={getUserName}
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
