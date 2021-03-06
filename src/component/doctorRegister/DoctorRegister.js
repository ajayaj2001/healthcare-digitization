import React from 'react'
import './DoctorRegister.scss'
import DoctorRegisterForm from './doctorRegisterForm/DoctorRegisterForm'
import {  Icon } from 'semantic-ui-react'

const DoctorRegister = () => {
    return (
        <div className="doctorRegister__container">
            <div className="doctorRegister__main">
                <h1 className="doctorRegister__heading"> Doctor Registration</h1>
                <div className="doctorRegister__subheading"><h2><Icon name="check circle outline"  /> Profile Information</h2></div>
                <DoctorRegisterForm/>
            </div>
        </div>
    )
}

export default DoctorRegister
