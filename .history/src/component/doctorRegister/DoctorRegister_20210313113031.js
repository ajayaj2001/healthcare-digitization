import React from 'react'
import './DoctorRegister.scss'
import DoctorRegisterForm from './doctorRegisterForm/DoctorRegisterForm'
import {  Icon } from 'semantic-ui-react'

const DoctorRegister = () => {
    return (
        <div className="doctorRegister__container">
            <div className="doctorRegister__main">
                <h1 className="doctorRegister__heading"><Icon name="user doctor"/> Doctor Registration</h1>
                <DoctorRegisterForm/>
            </div>
        </div>
    )
}

export default DoctorRegister
