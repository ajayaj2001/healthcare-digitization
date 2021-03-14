import React from 'react'
import {Form,Table} from 'semantic-ui-react'
import RadioButton from '../radiobutton/RadioButton'
const FormTable2 = () => {
    return (
        <div>
            <Form.Group>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>ALL QUESTIONS CONTAINED IN THIS QUESTIONNAIRE ARE OPTIONAL AND WILL BE KEPT STRICTLY CONFIDENTIAL.</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell rowSpan='4'>Exercise</Table.Cell>
        <Table.Cell > <Form.Field label='  Sedentary (No exercise)' control='input' type='checkbox' /></Table.Cell>
        
      </Table.Row>
      <Table.Row >
        <Table.Cell ><Form.Field label='Mild exercise (i.e., climb stairs, walk 3 blocks, golf)' control='input' type='checkbox' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Form.Field label='Occasional vigorous exercise (i.e., work or recreation, less than 4x/week for 30 min.)' control='input' type='checkbox' /></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell><Form.Field label='Regular vigorous exercise (i.e., work or recreation 4x/week for 30 minutes)' control='input' type='checkbox' /></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell rowSpan='5'>Diet</Table.Cell>
        <Table.Cell > <RadioButton lable='Are you dieting?'/> </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell> <RadioButton lable='If yes, are you on a physician prescribed medical diet?'/> </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell  style={{display:'flex',flexDirection:'row'}}># of meals you eat in an average day? <Form.Input style={{marginLeft:'1rem'}}/></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Rank salt intake<Form.Field label=' Hi' control='input' type='checkbox' style={{marginLeft:'2rem'}}/> 
        <Form.Field label=' Med' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/>  
        <Form.Field label=' Low' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/> 

            </Table.Cell>
      </Table.Row>
      <Table.Row >
      <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Rank fat  intake<Form.Field label=' Hi' control='input' type='checkbox' style={{marginLeft:'2rem'}}/> 
        <Form.Field label=' Med' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/>  
        <Form.Field label=' Low' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/> 

            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell rowSpan='2'>Caffeine</Table.Cell>
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
       <Form.Field label=' None' control='input' type='checkbox' style={{marginLeft:'2rem'}}/> 
        <Form.Field label='Coffee' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/>  
        <Form.Field label=' Tea' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/> 
        <Form.Field label=' Cola' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/> 

            </Table.Cell>
      </Table.Row>
      <Table.Row >
      <Table.Cell  style={{display:'flex',flexDirection:'row'}}> How many drinks per week? <Form.Input style={{marginLeft:'1rem'}}/></Table.Cell>
      </Table.Row>


      <Table.Row >
        <Table.Cell rowSpan='8'>Alcohol</Table.Cell>
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you drink alcohol? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell  style={{display:'flex',flexDirection:'row'}}> If yes, what kind?  <Form.Input style={{marginLeft:'1rem'}}/></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell  style={{display:'flex',flexDirection:'row'}}># of meals you eat in an average day? <Form.Input style={{marginLeft:'1rem'}}/></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell  style={{display:'flex',flexDirection:'row'}}>     Are you concerned about the amount you drink?  <Form.Input style={{marginLeft:'1rem'}}/></Table.Cell> 
      </Table.Row>

      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Have you considered stopping? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Have you ever experienced blackouts?<RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Are you prone to “binge” drinking? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you drive after drinking? <RadioButton/>
            </Table.Cell>
      </Table.Row>

      <Table.Row >
        <Table.Cell rowSpan='3'>Tobacco</Table.Cell>
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you use tobacco? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
      <Table.Cell style={{display:'flex',flexDirection:'row'}}>
       <Form.Field label='Cigarettes – pks./day' control='input' type='checkbox' style={{marginLeft:'2rem'}}/> 
        <Form.Field label='Chew - #/day' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/>  
        <Form.Field label=' Pipe - #/day' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/> 
        <Form.Field label=' Cigars - #/day' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/> 
            </Table.Cell>
      </Table.Row>
      <Table.Row >
      <Table.Cell style={{display:'flex',flexDirection:'row'}}>
       <Form.Field label='# of years' control='input' type='checkbox' style={{marginLeft:'2rem'}}/> 
        <Form.Field label='Or year quit' control='input' type='checkbox'  style={{marginLeft:'.5rem'}}/>  
            </Table.Cell>
      </Table.Row>

      <Table.Row >
        <Table.Cell rowSpan='2'>Drugs</Table.Cell>
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you currently use recreational or street drugs?<RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
      <Table.Cell style={{display:'flex',flexDirection:'row'}}>
      Have you ever given yourself street drugs with a needle?<RadioButton/>
            </Table.Cell>
      </Table.Row>

      <Table.Row >
        <Table.Cell rowSpan='5'>Sex</Table.Cell>
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Are you sexually active? <RadioButton/>
            </Table.Cell>
      </Table.Row>

      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        If yes, are you trying for a pregnancy? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
 If not trying for a pregnancy list contraceptive or barrier method used: <Form.Input style={{marginLeft:'1rem'}}/></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Any discomfort with intercourse? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Illness related to the Human Immunodeficiency Virus (HIV), 
        such as AIDS, has become a major public health problem. Risk 
        factors for this illness include intravenous drug use and
         unprotected sexual intercourse. Would you like to speak with 
         your provider about your risk of this illness? <RadioButton/>
            </Table.Cell>
      </Table.Row>


      <Table.Row >
        <Table.Cell rowSpan='6'>Personal Safety</Table.Cell>
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you live alone? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you have frequent falls?<RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you have vision or hearing loss?<RadioButton/>
            </Table.Cell >
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Do you have an Advance Directive or Living Will? <RadioButton/>
            </Table.Cell>
      </Table.Row>

      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Would you like information on the preparation of these? <RadioButton/>
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Physical and/or mental abuse have also become major public health issues 
        in this country. This often takes the form of verbally threatening behavior 
        or actual physical or sexual abuse. Would you like to discuss this issue with your provider?
        				<RadioButton/>
            </Table.Cell>
      </Table.Row>



    </Table.Body>
  </Table>
  </Form.Group>
        </div>
    )
}

export default FormTable2
