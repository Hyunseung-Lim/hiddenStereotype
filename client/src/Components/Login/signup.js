import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Validate } from './validate';

import './login.css';

export const Signup = (props) => {
    
    // values
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);        
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const submitHander = async (e) => {
        setSubmitting(true);
        e.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        setErrors(Validate({email, name, password}));
    }

    useEffect(() => {
        if(submitting) {
            if(Object.keys(errors).length === 0) {
                axios({
                    method: 'post',
                    url: '/signup',
                    data: {
                        email: email,
                        name: name,
                        password: password
                    }
                });
                props.setIsSignin();
            }
            setSubmitting(false);
        }
    }, [errors]);


    return(
        <>
            <div className='signupbox'>
                <form onSubmit={submitHander}>
                    <input type="email" value={email} onChange={emailHandler}></input>
                    <input type="name" value={name} onChange={nameHandler}></input>
                    <input type="password" value={password} onChange={passwordHandler} autoComplete="on"></input>
                    <button type="submit">create account</button>
                </form>
            </div>   
        </>
    )
}