import React,{useState} from 'react'
import {Form,Button,Radio, Message,Table,Menu,Icon,Label,TextArea} from 'semantic-ui-react'
import Page1 from './page1/Page1'
import Page2 from './page2/Page2'
import Page3 from './page3/Page3'
import Page4 from './page4/Page4'
import './PatientRegisterForm.scss'



const PatientRegisterForm = () => {
  


    return (
        <div className="patientRegisterForm">
            <Form>
  <Page1/>
  <br/>
  <br/>
<Page2/>
<br/>
<br/>
<Page3/>
<br/>
<br/>
<Page4/>






    {/* <Form.Group>
    <Button positive onClick={event=>generateOtp(event)} className="patientRegisterForm__button" inverted color="purple">Generate OTP</Button>
    <Form.Input placeholder='Enter the otp ' id="doctorRegisterForm__otpBox"  />
    </Form.Group>
    <Form.Group className="patientRegisterForm__buttonPosition">
    <Button positive style={{marginRight:'4rem'}} inverted color="blue">Submit</Button>
    <Button type="submit" inverted color="red">Cancel</Button>
    </Form.Group> */}
  </Form>
        </div>
    )
}

export default PatientRegisterForm
