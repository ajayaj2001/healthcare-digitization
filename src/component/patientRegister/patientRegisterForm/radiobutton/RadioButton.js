import React,{useState} from 'react'
import {Form,Radio} from 'semantic-ui-react'
const RadioButton = ({lable}) => {
    const[radioValue ,setradioValue]=useState('');

    const handleChange = (e) => {
        setradioValue(e.target.outerText);
      }
    return (
        <div>
            <Form.Group inline>
    <label >{lable} </label>
    <Form.Field
      control={Radio}
      label='Yes'
      value='1'
      checked={radioValue === 'Yes'}
      onChange={handleChange}
    />
    <Form.Field
      control={Radio}
      label='No'
      value='2'
      checked={radioValue === 'No'}
      onChange={handleChange}
    />
    </Form.Group>
        </div>
    )
}

export default RadioButton
