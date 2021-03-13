import React from 'react'
import {Form,Button} from 'semantic-ui-react'
import './PatientRegisterForm.scss'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

const PatientRegisterForm = () => {

  const generateOtp=()=>{
    document.getElementById('doctorRegisterForm__otpBox').style.display="block";
}


    return (
        <div className="patientRegisterForm">
            <Form>
    <Form.Group widths='equal'>

      <Form.Input 
      fluid label='First name' 
      placeholder='First name'  
      required
      />
      <Form.Input 
      fluid label='Last name' 
      placeholder='Last name'
       required
       />

    </Form.Group>
    <Form.Select label="Gender" options={options} placeholder='Gender'  required/>
    <Form.Group widths='equal'>
      <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Email'
                        icon="mail"
                        iconPosition="left"
                        type="email"
                        // onChange={(event) => setEmail(event.target.value)}
                        // value={email}
                    />
      <Form.Input label='Phone' placeholder='Phone' required/>
    </Form.Group>
      <Form.Input 
       label='Emergency / Alternative Phone number' 
      placeholder='Emergency Phone number'  
      required
      width={6}
      //style={{width:'20rem'}}
      />
    <Form.TextArea label='Address' placeholder='Enter Your Permanent address' />
    <Form.Group>
    <Button positive onClick={event=>generateOtp(event)} className="patientRegisterForm__button" inverted color="purple">Generate OTP</Button>
    <Form.Input placeholder='Enter the otp ' id="doctorRegisterForm__otpBox"  />
    </Form.Group>
    <Form.Group className="patientRegisterForm__buttonPosition">
    <Button positive style={{marginRight:'4rem'}} inverted color="blue">Submit</Button>
    <Button type="submit" inverted color="red">Cancel</Button>
    </Form.Group>
  </Form>
        </div>
    )
}

export default PatientRegisterForm
