import React from 'react'
import { Link } from 'react-router-dom'
import './UserType.scss'



const UserType = () => {
    return (
        <div className="userType">
<div className="userType-buttons">
            <button className="btn btn--white btn--animation" >
                <Link to='/login'>Doctor</Link>
                </button>
            <button className="btn btn--white btn--animation" >Patient</button>
            </div>
        </div>
    )
}

export default UserType
