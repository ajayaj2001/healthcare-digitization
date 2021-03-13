import React from 'react'
import './DoctorForm.scss'
import { Form, Input, TextArea, Button, Select, Icon } from 'semantic-ui-react'

const DoctorForm = () => {
    return (
        <div className="doctorForm__container">
            <div className="doctorForm__main">
                <div className="doctorForm__heading"><Icon name="user doctor"/> Doctor Registration</div>
            </div>
        </div>
    )
}

export default DoctorForm
