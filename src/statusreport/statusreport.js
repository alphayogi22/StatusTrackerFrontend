import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { userName, attendanceDetails } from '../userFunctions';
import { Table } from 'semantic-ui-react'


class StatusReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableDetails: [],
            //   tableDetails: {}
        };
    }

    componentDidMount() {
        userName().then(response => {
            console.log('Inside the user details api');
            // console.log(response.data);
            let userNameResponse = response.data.map(item => {
                const containerName = {};
                containerName['id'] = item.id;
                containerName['username'] = item.name;
                return containerName;
            })

            attendanceDetails().then(response => {
                console.log('inside the get status details');
                            
                let statusDetailsResponse = response.data.map(item => {
                    const containerAttendance = {};
                    containerAttendance['id'] = item.user;
                    containerAttendance['date'] = item.startDate;
                    containerAttendance['status'] = item.status;
                    containerAttendance['remark'] = item.remark;
                    return containerAttendance;
                })

                console.log(statusDetailsResponse);
                console.log(userNameResponse);

                // function mergeArrayObjects(userNameResponse, statusDetailsResponse) {
                //     return userNameResponse.map((item, i) => {
                //         if (item.id === statusDetailsResponse[i].id) {
                //             //merging two objects
                //             return Object.assign({}, item, statusDetailsResponse[i])
                //         }
                //     })
                // }
                // let finalStatusResponse = mergeArrayObjects(userNameResponse, statusDetailsResponse);

                let finalObjects = [];
                        userNameResponse.map(element=>{
                                statusDetailsResponse.map(inner=>{
                                    if(element.id===inner.id)finalObjects.push({...element,...inner})
                                          })
                                        })
                console.log(finalObjects);
                this.setState({ tableDetails: finalObjects })
            })
        })
    }
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={12} tablet={6} computer={2}>
                        <select class="ui fluid search selection dropdown">
                            <option value="">Name</option>
                            <option value="AS">Ashish</option>
                            <option value="AV">Avilesh</option>
                            <option value="GU">Gurab</option>
                            <option value="HI">Hitesh</option>
                            <option value="PU">Punit</option>
                            <option value="YO">Yogesh</option>
                        </select>
                    </Grid.Column>

                    <Grid.Column mobile={12} tablet={6} computer={5}>
                        <SemanticDatepicker label='Start Date:' placeholder='Select Date' fluid id='toDate' />
                    </Grid.Column>

                    <Grid.Column mobile={12} tablet={6} computer={5}>
                        <SemanticDatepicker label='End Date:' placeholder='Select Date' fluid id='endDate' />
                    </Grid.Column>

                    <Grid.Column mobile={12} tablet={6} computer={4}>
                        <select class="ui fluid search selection dropdown">
                            <option value="">Status</option>
                            <option value="AS">Present</option>
                            <option value="AV">Work From Home</option>
                            <option value="GU">Absent</option>
                        </select>


                    </Grid.Column>
                </Grid.Row>

                <Container mobile={15} style={{ overflowX: "auto" }}>
                    <Table celled unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Remark</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>


                        <Table.Body>
                            {this.state.tableDetails.map((value, index) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell>{value.username}</Table.Cell>
                                        <Table.Cell>{value.status}</Table.Cell>
                                        <Table.Cell>{value.date}</Table.Cell>
                                        <Table.Cell>{value.remark}</Table.Cell>
                                        </Table.Row>
                                        );         
                                            })
                                            }
                        </Table.Body>
                        </Table>
                </Container>
            </Grid>
        );
    }

}

export default StatusReport;