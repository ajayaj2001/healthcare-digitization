import React from 'react'
import { Icon ,Form} from 'semantic-ui-react'
import './DoctorRegisterForm.scss'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

const DoctorRegisterForm = () => {
    return (
        <div className="doctorRegisterForm">
            <Form>
    <Form.Group widths='equal'>
      <Form.Input fluid label='First name' placeholder='First name'  required/>
      <Form.Input fluid label='Last name' placeholder='Last name' required/>
    </Form.Group>
    <Form.Select options={options} placeholder='Gender'  required/>
  </Form>
        </div>
    )
}

export default DoctorRegisterForm
