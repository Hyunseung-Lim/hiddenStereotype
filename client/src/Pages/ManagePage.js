import React, { useState } from 'react'
import axios from "axios"


import data_1 from '../Data/book1';
import data_2 from '../Data/book2';

import './pages.css'

export const ManagePage = () => {

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