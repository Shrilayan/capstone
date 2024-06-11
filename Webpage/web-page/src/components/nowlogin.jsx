
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { getUserByUserName } from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Nowlogin.css';

function Nowlogin() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [loginError, setLoginError] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginData);
        console.log(loginData.username);

        getUserByUserName(loginData.username).then(response => {
                console.log(response.data);
                // Set login success state to true and clear login error
                setLoginSuccess(true);
                setLoginError(null);
                // Redirect to home page after a short delay
                setTimeout(() => {
                    navigate('/productList', { state: { message: 'Login successful' } });
                }, 1000);
            })
            .catch(error => {
                console.error(error);
                // Set login error message
                setLoginError('Invalid username or password');
                // Reset login success state
                setLoginSuccess(false);
            });
    };


    return (
        <div>
            <div >
                <h2>Login</h2>
                {loginSuccess && <div >Login successful</div>}
                <div className="container" style={{width:"fit-content"} }>
                <div className="card">
                <form onSubmit={handleSubmit}>
                    <div >
                                <label ><i className="bi bi-person-check-fill"></i></label>
                        <input type="text" name="username" value={loginData.username} onChange={handleChange} />
                    </div>
                    <div >
                                <label > <i className="bi bi-key-fill"></i></label>
                        <input type="password" name="password" value={loginData.password} onChange={handleChange} />
                    </div>
                    {loginError && <div>{loginError}</div>}
                    <button type="submit">Login</button>
                </form>
                <div>
                    <p>Don't have an account? <Link to="/Login">Register new user</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nowlogin;


