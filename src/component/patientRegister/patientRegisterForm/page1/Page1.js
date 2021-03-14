import React,{useState} from 'react'
import {Form,Radio, Message,Table,TextArea} from 'semantic-ui-react'
import FormTable from '../formTable/FormTable'
const Page1 = () => {
    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]
    
    const[radioValue ,setradioValue]=useState('');
    const[radioOption ,setradioOption]=useState('');
    
      const handleChange = (e) => {
        setradioValue(e.target.outerText);
      }
      const handleChangeOption = (e) => {
        setradioOption(e.target.outerText);
      }
   
    return (
        <div>
            <Form.Group widths='equal'>

<Form.Input 
fluid label='First name' 
placeholder='First name'  

/>
<Form.Input 
fluid label='Last name' 
placeholder='Last name'
 
 />
   <Form.Input 
fluid label='DBO : ' 
type="date"
 
 />

</Form.Group>
<Form.Group widths='equal'>
<Form.Select label="Gender" options={options} placeholder='Gender'  />
<Form.Input 
fluid label='Previous or referring doctor:'  
 />
</Form.Group>

<Form.Group inline>
    <label>Marital status:   </label>
    <Form.Field
      control={Radio}
      label='Single'
      value='1'
      checked={radioValue === 'Single'}
      onChange={handleChange}
    />
    <Form.Field
      control={Radio}
      label='Partnered'
      value='2'
      checked={radioValue === 'Partnered'}
      onChange={handleChange}
    />
    <Form.Field
      control={Radio}
      label='Married'
      value='3'
      checked={radioValue === 'Married'}
      onChange={handleChange}
    />
    <Form.Field
      control={Radio}
      label='Separated'
      value='4'
      checked={radioValue === 'Separated'}
      onChange={handleChange}
    />
    <Form.Field
      control={Radio}
      label='Divorced'
      value='5'
      checked={radioValue === 'Divorced'}
      onChange={handleChange}
    />
    <Form.Field
      control={Radio}
      label='Widowed'
      value='6'
      checked={radioValue === 'Widowed'}
      onChange={handleChange}
    />
  </Form.Group>
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
<Form.Input label='Phone' placeholder='Phone' />
</Form.Group>

<Message  header="PERSONAL HEALTH HISTORY"/>

<Form.Group  inline>
<label>Childhood illness : </label>
<Form.Field label='Measles' control='input' type='checkbox' />
<Form.Field label='Mumps' control='input' type='checkbox' />
<Form.Field label='Rubella' control='input' type='checkbox' />
<Form.Field label='Chickenpox' control='input' type='checkbox' />
<Form.Field label='Rheumatic Fever' control='input' type='checkbox' />
<Form.Field label='Polio' control='input' type='checkbox' />

</Form.Group>

<Table celled>
<Table.Body>
<Table.Row >
<Table.Cell rowSpan='3'>Immunizations and dates:</Table.Cell>
  <Table.Cell colSpan='2'> <Form.Field label='Tetanus' control='input' type='checkbox' /></Table.Cell>
  <Table.Cell ><Form.Field label='Pneumonia' control='input' type='checkbox' /></Table.Cell>
</Table.Row>
<Table.Row>
  <Table.Cell ></Table.Cell>
  <Table.Cell ><Form.Field label='Hepatitis' control='input' type='checkbox' /></Table.Cell>
  <Table.Cell><Form.Field label='Chickenpox' control='input' type='checkbox' /></Table.Cell>
</Table.Row>
<Table.Row>
  <Table.Cell ></Table.Cell>
  <Table.Cell><Form.Field label='Influenza' control='input' type='checkbox' /></Table.Cell>
  <Table.Cell><Form.Field label='MMR (Measles, Mumps, Rubella)	' control='input' type='checkbox' /></Table.Cell>
</Table.Row>
</Table.Body>
</Table>


<Message  header="List any medical problems that other doctors have diagnosed"/>

<TextArea rows={4} placeholder='Type here' style={{resize:'none'}}/>
<br/>
<br/>
<FormTable  heading='Surgeries' h1="Year"  h2="Reason" h3="Hospital"/>
<br/>
<FormTable  heading='Other hospitalizations' h1="Year"  h2="Reason" h3="Hospital"/>

<Table stackable>
<Table.Header>
<Table.Row>
  <Table.HeaderCell>Have you ever had a blood transfusion?</Table.HeaderCell>
  <Table.HeaderCell textAlign='right'><Form.Group inline>
    <Form.Field
      control={Radio}
      label='Yes'
      value='7'
      checked={radioOption === 'Yes'}
      onChange={handleChangeOption}
    />
    <Form.Field
      control={Radio}
      label='No'
      value='8'
      checked={radioOption === 'No'}
      onChange={handleChangeOption}
    />
    </Form.Group>
    </Table.HeaderCell>
</Table.Row>
</Table.Header>
</Table>

        </div>
    )
}

export default Page1
