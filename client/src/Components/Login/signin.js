import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './login.css';

export const Signin = (props) => {

    //values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const submitHander = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/token',
            data: {
                email: email,
                password: password
            }
        })
        .then((response) => {
            props.setToken(response.data.access_token)
        }).catch((error) => {
            if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
        setEmail("");
        setPassword("");
    }

    return(
        <>
            <div className='signinholder'>
                <form className='signinbox' onSubmit={submitHander}>
                    <input type="email" value={email} onChange={emailHandler}></input>
                    <input type="password" value={password} onChange={passwordHandler} autoComplete="on"></input>
                    <button type="submit">
                        login
                    </button>
                </form>
                <div className='signupbox'>
                    <button onClick={() => props.setIsSignup()}>
                        sign up
                    </button>
                </div>   
            </div>
        </>
    )
}