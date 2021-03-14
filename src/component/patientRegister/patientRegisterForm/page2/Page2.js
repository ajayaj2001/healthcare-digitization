import React from 'react'
import FormTable from '../formTable/FormTable'
import {Form,Table,Message} from 'semantic-ui-react'
import FormTable2 from '../formTable2/FormTable2'
const Page2 = () => {
    return (
        <div>
            <FormTable heading='List your prescribed drugs and over-the-counter drugs, such as vitamins and inhalers' 
            h1='Name the Drug	Strength	Frequency Taken' 
            h2='Strength'
            h3='Frequency Taken'
            />


             <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>Allergies to medications</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
        Name the Drug
        </Table.Cell>
        <Table.Cell>Reaction You Had</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
<Message header="HEALTH HABITS AND PERSONAL SAFETY" />

<FormTable2/>

        </div>
    )
}

export default Page2
