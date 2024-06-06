import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './LoginSignup.css';
import user_icon from '../components/assets/user.png'
import email_icon from '../components/assets/email.png'
import password_icon from '../components/assets/padlock.png'
import address_icon from '../components/assets/maps-and-flags.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../components/assets/logo.jpg'
import background from '../components/assets/restaurant.jpg'

import { createUser } from '../services/UserService';

const LoginSignup = () => {
    const [userName, setUserName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    let navigate = useNavigate();
    function loginUser() {
       navigate("/nowlogin"); 
    }
function saveUser(e) {
    e.preventDefault();

    const user = { userName, emailId, password, address };
    console.log(user);

    createUser(user).then((response) => {
        console.log(response.data);
        navigate("/nowlogin");
    })
}
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8'>
                    <div className='container'>
                        <img src={background} alt="" className="background" />
                    </div>
                    
                </div>
                <div className='col-4'>
                    <div className="text-center">
                        <img src={logo} alt="" className="logo" />
                    </div>
                    <div className="header">
                        <div className="text">Sign Up</div>
                        
                    </div>
                    <div className="inputs">
                        <div className="row">
                            <div className='col-2'>
                                <img src={user_icon} alt="" className="icon" />
                            </div>
                            <div className='col-10'>
                                <input type="text" placeholder="Enter name"
                                    name="userName" value={userName}
                                    className="form-control" onChange={(e) => setUserName(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-2'>
                                <img src={email_icon} alt="" className="icon" />
                            </div>
                            <div className='col-10'>
                                <input type="text" placeholder="Enter Email"
                                    name="emailId" value={emailId}
                                    className="form-control" onChange={(e) => setEmailId(e.target.value)}
                                ></input>
                                {/*<input type="email" className='form-control' />*/}
                            </div>
                        </div>
                            <div className="row">
                                <div className='col-2'>
                                    <img src={password_icon} alt="" className="icon" />
                                </div>
                            <div className='col-10'>
                                <input type="password" placeholder="Enter Password"
                                    name="password" value={password}
                                    className="form-control" onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                {/*<input type="password" className='form-control' />*/}
                            </div>
                        </div>
                                <div className="row">
                                    <div className='col-2'>
                                        <img src={address_icon} alt="" className="icon" />
                                    </div>
                            <div className='col-10'>
                                <input type="text" placeholder="Enter Address"
                                    name="address" value={address}
                                    className="form-control" onChange={(e) => setAddress(e.target.value)}
                                ></input>
                                {/*<input type="address" className='form-control' />*/}
                            </div>
                        </div>
                        <div className="container">
                            <div className='row'>
                            <div className='col-2'>   
                                </div>
                                <div className='col-4'>
                                    <button type="button" className='btn btn-dark' onClick={saveUser}>SignUp</button>
                                </div>
                                <div className='col-2'>   
                                </div>
                                <div className='col-4'>
                                    <button type="button" className='btn btn-dark' onClick={loginUser}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

    export default LoginSignup;