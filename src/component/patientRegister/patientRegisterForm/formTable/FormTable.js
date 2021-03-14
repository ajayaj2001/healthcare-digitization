import React from 'react'
import {Form,Table} from 'semantic-ui-react'
const FormTable = ({h1,h2,h3,heading}) => {
    return (
        <div>
            <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>{heading}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
        {h1}
        </Table.Cell>
        <Table.Cell>{h2}</Table.Cell>
        <Table.Cell collapsing >
        {h3}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
        <Table.Cell ><Form.Input
       /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
        <Table.Cell ><Form.Input
       /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
        <Table.Cell ><Form.Input
       /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
        <Table.Cell ><Form.Input
       /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 
        <Form.Input
       />
        </Table.Cell>
        <Table.Cell><Form.Input
       /></Table.Cell>
        <Table.Cell ><Form.Input
       /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        </div>
    )
}

export default FormTable
