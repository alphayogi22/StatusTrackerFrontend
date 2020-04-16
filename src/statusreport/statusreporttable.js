import React from 'react'
import { Table } from 'semantic-ui-react'
//import './statusreport.css';


const StatusReportTable = () => (

  <Table celled unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Sr.No.</Table.HeaderCell>
        <Table.HeaderCell>Employee Name</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Remarks</Table.HeaderCell>
      </Table.Row>
    </Table.Header>


    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Hitesh Prasad</Table.Cell>
        <Table.Cell>2020/04/15</Table.Cell>
        <Table.Cell>Present</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Ashish Deora</Table.Cell>
        <Table.Cell>2020/04/15</Table.Cell>
        <Table.Cell>Out of office</Table.Cell>
        <Table.Cell>CEO Dashboard</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Punit Goyal</Table.Cell>
        <Table.Cell>2020/04/15</Table.Cell>
        <Table.Cell>Present</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>Yogesh Ratudi</Table.Cell>
        <Table.Cell>2020/04/15</Table.Cell>
        <Table.Cell>Work From Home</Table.Cell>
        <Table.Cell>Will start from 10</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default StatusReportTable


