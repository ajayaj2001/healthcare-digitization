import React from 'react'
import './PatientRegister.scss'
import PatientRegisterForm from './patientRegisterForm/PatientRegisterForm'
import {  Icon } from 'semantic-ui-react'

const PatientRegister = () => {
    return (
        <div className="patientRegister__container">
            <div className="patientRegister__main">
                <h1 className="patientRegister__heading"> Patient Registration</h1>
                <div className="patientRegister__subheading"><h2><Icon name="check circle outline"  /> Profile Information</h2></div>
                <PatientRegisterForm/>
            </div>
        </div>
    )
}

export default PatientRegister
