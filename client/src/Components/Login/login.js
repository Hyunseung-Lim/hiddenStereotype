import React, { useState } from 'react'
import './login.css';

export const Login = (props) => {

    const [userName, setUserName ] = useState(props.username);

    const nameHandler = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    }

    function login() {
        props.changeUserName(userName);
    }

    function logout() {
        setUserName(null);
        props.changeUserName(null);
    }

    if(props.getUserName() == null)
        return(
            <div>
                <input type='name' placeholder='참가자' onChange={nameHandler}></input>
                <button onClick={login}> login </button>
            </div>
        )
    else
        return(
            <>
                HI! {props.getUserName()}
                <button onClick={logout}> logout </button>
            </>
        )
}