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
        <Table.Cell># of meals you eat in an average day?</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>
        Rank salt intake <Form.Field label='   Rank salt intake' control='input' type='checkbox' />  
            </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Rank salt intake</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
      </Table.Row>


    </Table.Body>
  </Table>
  </Form.Group>
        </div>
    )
}

export default FormTable2
