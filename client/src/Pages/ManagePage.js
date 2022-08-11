import React, { useState } from 'react'
import axios from "axios"


import data_1 from '../Data/book1';
import data_2 from '../Data/book2';

import './pages.css'

export const ManagePage = () => {

    // function getData() {
    //     axios({
    //       method: "GET",
    //       url:"/profile",
    //       headers: {
    //         Authorization: 'Bearer ' + props.token
    //       }
    //     })
    //     .then((response) => {
    //       const res =response.data
    //       res.access_token && props.setToken(res.access_token)
    //       setProfileData(({
    //         name: res.name
    //       }))
    //       setBooksData(res.books)
    //     }).catch((error) => {
    //       if (error.response) {
    //         console.log(error.response)
    //         console.log(error.response.status)
    //         console.log(error.response.headers)
    //         }
    //     })
    //   }
    
    //   useEffect(() => {
    //     getData()
    //   }, []);


    function resetBookData() {
        axios({
          method: "POST",
          url:"/resetbook",
          data: { book1: data_1, book2: data_2 }
        })}

    return(
        <>
            <div className='managepage'>
                <button onClick={resetBookData}> reset </button>
            </div>
        </>
    )
}