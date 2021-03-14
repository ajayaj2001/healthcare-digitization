import React from 'react'
import './PatientRegister.scss'
import PatientRegisterForm from './patientRegisterForm/PatientRegisterForm'
import {  Icon } from 'semantic-ui-react'

const PatientRegister = () => {
    return (
        <div className="patientRegister__container">
            <div className="patientRegister__main">
                <h1 className="patientRegister__heading"> Patient Registration</h1>
                <div className="patientRegister__subheading"><h2><Icon name="check circle outline"  /> Health History</h2></div>
                <div style={{marginBottom:'2rem'}}>All questions contained in this questionnaire are strictly confidential 
and will become part of your medical record.
</div>
                <PatientRegisterForm/>
            </div>
        </div>
    )
}

export default PatientRegister
