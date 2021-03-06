import React from 'react'
import {Form,Button} from 'semantic-ui-react'
import './DoctorRegisterForm.scss'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

const DoctorRegisterForm = () => {

const generateOtp=()=>{
    document.getElementById('doctorRegisterForm__otpBox').style.display="block";
}


    return (
        <div className="doctorRegisterForm">
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
    <Form.Group widths='equal'>

      <Form.Input 
      fluid label='M Licence' 
      placeholder='M Licence'  
      required
      />
      <Form.Input 
      fluid label='Doctor specialization' 
      placeholder='Doctor specialization'
       required
       />

    </Form.Group>
    <Form.Input label='Hospital' placeholder='hospital' required  width={12}/>
    <Form.Input label='Qualification' placeholder='qualification' required width={12}/>
    <Form.Group>
    <Button positive onClick={()=>generateOtp()} className="doctorRegisterForm__button" inverted color="purple">Generate OTP</Button>
    <Form.Input  placeholder='Enter the otp' id="doctorRegisterForm__otpBox"  />
    </Form.Group>
    <Form.Group className="doctorRegisterForm__buttonPosition">
    <Button positive style={{marginRight:'4rem'}} inverted color="blue">Submit</Button>
    <Button type="submit" inverted color="red">Cancel</Button>
    </Form.Group>
  </Form>
        </div>
    )
}

export default DoctorRegisterForm
