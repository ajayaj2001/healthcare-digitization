import React, { useState } from 'react'
import { Form, Message,Button,Icon } from 'semantic-ui-react'
import './LoginForm.scss'
//import { Link } from 'react-router-dom';
//import firebase from '../../../../firebase';
import { Link } from 'react-router-dom'

const LoginForm = () => {

    const [errors, seterrors] = useState("")
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);




    const formSubmit = (event) => {
        event.preventDefault();
        if (userName && password) {       
            setLoading(true);

            // firebase
            //     .auth()
            //     .signInWithEmailAndPassword(userName, password)
            //     .then(() => {
            //         setLoading(false);
            //         seterrors("")
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //         seterrors(err.message)
            //         setLoading(false);
            //     })
        }
        else {
            seterrors("Fill  the data")
        }
    }



    return (
        <div className="loginForm">
            {
                errors ? <Message error style={{ width: '40rem', height: '5rem' }} ><h2>{errors}</h2></Message> : ""

            }
            <Form onSubmit={formSubmit}>
                <Form.Input
                    fluid
                    name="Username"
                    icon="user"
                    iconPosition="left"
                    label="Username / Email"
                    type="text"
                    onChange={(event) => setUserName(event.target.value)} value={userName}
                    className={errors.toLowerCase().includes('userName') ? 'error loginForm__input' : 'loginForm__input'}
                />
                <Form.Input
                    fluid
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)} value={password}
                    className={errors.toLowerCase().includes('password') ? 'error loginForm__input' : 'loginForm__input'}
                />
                <button disabled={loading} className={loading ? 'loading loginForm__button' : " loginForm__button"} type='submit'>Login </button>
            </Form>
            <div className="loginForm__text">( or )</div>
            <Button color='google plus' className="loginForm__gbutton">
      <Icon name='google plus' /> Google Plus
    </Button>
            <div className="loginForm__link">Don't Have An Account? <Link to='/register'>Register</Link></div>

        </div>
    )
}

export default LoginForm
