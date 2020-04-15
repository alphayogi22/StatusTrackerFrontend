import React from 'react'; 
import { Table } from 'semantic-ui-react'

const LeaveBalanceTable = () => (
    <Table celled>
    <Table.Header>
         <Table.Row>
           <Table.HeaderCell collapsing>Sr.No.</Table.HeaderCell>
           <Table.HeaderCell>Employee Name</Table.HeaderCell>
           <Table.HeaderCell>Leave Balance</Table.HeaderCell>
         </Table.Row>
       </Table.Header>
   
       
         <Table.Body>
           <Table.Row>
             <Table.Cell collapsing>1</Table.Cell>
             <Table.Cell>Ashish</Table.Cell>
             <Table.Cell>15</Table.Cell>
               
           </Table.Row>
           <Table.Row>
           <Table.Cell collapsing>2</Table.Cell>
           <Table.Cell>Hitesh</Table.Cell>
           <Table.Cell>10</Table.Cell>  
           </Table.Row>
   
   
           <Table.Row>
           <Table.Cell collapsing>3</Table.Cell>
             <Table.Cell>Punit</Table.Cell>
             <Table.Cell>15</Table.Cell>
           </Table.Row>
   
           <Table.Row>
           <Table.Cell collapsing>4</Table.Cell>
             <Table.Cell>Gurab</Table.Cell>
             <Table.Cell>17</Table.Cell>                    
           </Table.Row>
   
           <Table.Row>
           <Table.Cell collapsing>5</Table.Cell>
             <Table.Cell>Yogesh</Table.Cell>
             <Table.Cell>07</Table.Cell>
           </Table.Row>
         </Table.Body>
       </Table>
) 

export default LeaveBalanceTable;