import React from 'react'
import './DoctorRegister.scss'
import { Form, Input, TextArea, Button, Select, Icon } from 'semantic-ui-react'

const DoctorRegister = () => {
    return (
        <div className="doctorRegister__container">
            <div className="doctorRegister__main">
                <div className="doctorRegister__heading"><Icon name="user doctor"/> Doctor Registration</div>
            </div>
        </div>
    )
}

export default DoctorRegister
