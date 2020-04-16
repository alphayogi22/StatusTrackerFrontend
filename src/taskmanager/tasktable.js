import React from 'react'
import { Table } from 'semantic-ui-react'


const TableExampleBasic = () => (
 
<Table celled unstackable>
 <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Task Name</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Hour</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    
      <Table.Body>
        <Table.Row>
          <Table.Cell>Code Review</Table.Cell>
          <Table.Cell>2020/04/15</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>Completed</Table.Cell>
          <Table.Cell collapsing>
            <button><i className="edit icon"></i></button>
            <span> &nbsp; </span>
            <button><i className="trash icon"></i></button>
          </Table.Cell>
          
        </Table.Row>
        <Table.Row>
        <Table.Cell>Frontend Work</Table.Cell>
          <Table.Cell>2020/04/16</Table.Cell>
          <Table.Cell>15</Table.Cell>
          <Table.Cell>Working</Table.Cell>
          <Table.Cell unstackable>
            <button><i className="edit icon"></i></button>
            <span> &nbsp; </span>
            <button><i className="trash icon"></i></button>
          </Table.Cell>
        </Table.Row>


        <Table.Row>
        <Table.Cell>Adding new screens</Table.Cell>
          <Table.Cell>2020/04/17</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>Incompleted</Table.Cell>
          <Table.Cell>
            <button><i className="edit icon"></i></button>
            <span> &nbsp; </span>
            <button><i className="trash icon"></i></button>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
        <Table.Cell>Task Manager</Table.Cell>
          <Table.Cell>2020/04/15</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Incompleted</Table.Cell>
          <Table.Cell>
            <button><i className="edit icon"></i></button>
            <span> &nbsp;  </span>
            <button><i className="trash icon"></i></button>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
        <Table.Cell>Adding modal form</Table.Cell>
          <Table.Cell>2020/04/15</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Incompleted</Table.Cell>
          <Table.Cell>
            <button><i className="edit icon"></i></button>
            <span> &nbsp; </span>
            <button><i className="trash icon"></i></button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
  
  export default TableExampleBasic

  
