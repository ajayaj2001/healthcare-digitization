import React from 'react'
import sideGif from '../../img/img-3 (2).jpg'
import './Login.scss'
import LoginForm from './loginForm/LoginForm'


const Login = () => {
    return (
        <div className="loginContainer">
            <div className="login">
                <div className="login__signin">
                    <h2 className="login__signin--heading">Sign In</h2>
                    <div className="login__signin--form"><LoginForm /></div>
                </div>

                <img src={sideGif} alt="rocket" className="login__image" />
            </div>
        </div>
    )
}

export default Login
