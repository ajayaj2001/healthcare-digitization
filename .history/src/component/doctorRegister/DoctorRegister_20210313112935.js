import React from 'react'
import './DoctorRegister.scss'
import DoctorRegisterForm from './doctorRegisterForm/DoctorRegisterForm'
import {  Icon } from 'semantic-ui-react'

const DoctorRegister = () => {
    return (
        <div className="doctorRegister__container">
            <div className="doctorRegister__main">
                <div className="doctorRegister__heading"><Icon name="user doctor"/><h1> Doctor Registration</h1></div>
                <DoctorRegisterForm/>
            </div>
        </div>
    )
}

export default DoctorRegister
