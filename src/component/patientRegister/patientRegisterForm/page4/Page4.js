import React from 'react'
import {Form,Table,Message} from 'semantic-ui-react'
import RadioButton from '../radiobutton/RadioButton'
const Page4 = () => {
    return (
        <div>
            <Message header='MEN ONLY'/>

<Table celled>
<Table.Body>
<Table.Row  >
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Do you usually get up to urinate during the night?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
If yes, # of times _____<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Do you feel pain or burning with urination?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Any blood in your urine?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Do you feel burning discharge from penis?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Has the force of your urination decreased?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Have you had any kidney, bladder, or prostate infections within the last 12 months?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Do you have any problems emptying your bladder completely?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Any difficulty with erection or ejaculation?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Any testicle pain or swelling?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Date of last prostate and rectal exam?<RadioButton />
</Table.Cell>
</Table.Row>
</Table.Body>
</Table>

<Message header='OTHER PROBLEMS'/>



<Message content='Check if you have, or have had, any symptoms in the following areas to a significant degree and briefly explain.'/>

<Table celled striped>


    <Table.Body>
      <Table.Row>
        <Table.Cell >
        <Form.Checkbox label='Skin' />
        </Table.Cell>
        <Table.Cell><Form.Checkbox label='Chest/Heart' /></Table.Cell>
        <Table.Cell >
        <Form.Checkbox label='Recent changes in:' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Form.Checkbox label='Head/Neck' />
        </Table.Cell>
        <Table.Cell><Form.Checkbox label='Back' /></Table.Cell>
        <Table.Cell><Form.Checkbox label='Weight' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Form.Checkbox label='Ears' />
        </Table.Cell>
        <Table.Cell> <Form.Checkbox label='Intestinal' /></Table.Cell>
        <Table.Cell><Form.Checkbox label='Energy level' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Form.Checkbox label='Nose' />
        </Table.Cell>
        <Table.Cell> <Form.Checkbox label='Bladder' /></Table.Cell>
        <Table.Cell><Form.Checkbox label='Ability to sleep' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
    <Form.Checkbox label='Throat' />
        </Table.Cell>
        <Table.Cell> <Form.Checkbox label='Bowel' /></Table.Cell>
        <Table.Cell rowSpan='2'><Form.Checkbox label='Other pain/discomfort:' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
    <Form.Checkbox label='Lungs' />
        </Table.Cell>
        <Table.Cell> <Form.Checkbox label='Circulation' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        </div>
    )
}

export default Page4
