import React, { Component } from 'react';
import { Form, Grid, Header, Segment, Button, Label, Divider, Modal, Container} from 'semantic-ui-react';
import TableExampleBasic from './tasktable.js';
import SemanticDatepicker from 'react-semantic-ui-datepickers';


class TaskManager extends Component {

    hoursOptions = [
        { key: 1, value: 1, text: 1 },
        { key: 2, value: 2, text: 2 },
        { key: 3, value: 3, text: 3 },
        { key: 4, value: 4, text: 4 },
        { key: 5, value: 5, text: 5 },
        { key: 6, value: 6, text: 6 },
        { key: 7, value: 7, text: 7 },
        { key: 8, value: 8, text: 8 },
        { key: 9, value: 9, text: 9 },
        { key: 10, value: 10, text: 10 },
        { key: 11, value: 11, text: 11 },
        { key: 12, value: 12, text: 12 },
    ];

    minutesOptions = [
        { key: 0, value: 0, text: 0 },
        { key: 15, value: 15, text: 15 },
        { key: 30, value: 30, text: 30 },
        { key: 45, value: 45, text: 45 }
    ];

    ampmOptions = [
        { key: '0', value: 'AM', text: 'AM' },
        { key: '1', value: 'PM', text: 'PM' }
    ];

    statusOptions = [
        { key: '0', value: 'Not Started', text: 'Not Started' },
        { key: '1', value: 'Work in Progress', text: 'Work in Progress' },
        { key: '2', value: 'Completed', text: 'Completed' }
    ];

    render() {

        return (    
            <Grid columns='equal'>
                     <Grid.Row >
                   <Grid.Column mobile={10} tablet={6} computer={2}>
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

                    <Grid.Column mobile={15} tablet={6} computer={5}>
                    <SemanticDatepicker label='Start Date:' placeholder = 'Select Date' fluid id='toDate'/>
                    </Grid.Column>

                    <Grid.Column  mobile={15} tablet={6} computer={5}>
                    <SemanticDatepicker label='End Date:' placeholder = 'Select Date' fluid id='toDate'/>
                    </Grid.Column>

                    <Grid.Column  mobile={13} tablet={6} computer={4}>
                  
                            <Modal  
                            trigger={<Button>Add New Task</Button>}
                            content={
                                <React.Fragment>
                                <Grid centered>
                                    <Grid.Column mobile={16} tablet={8} computer={6}>
                                    <Header as="h2" textAlign="center">
                                        Task Manager
                                    </Header>
                                    <Segment>
                                        <Form size="small">
                                            <Form.Input fluid label='Task Name:' placeholder='Type here....' />
                                            
                                            <Label basic>Start Time:</Label>
                                            <Grid columns={3}>
                                                    
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Form.Select fluid placeholder='Hrs' options={this.hoursOptions}/>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <Form.Select fluid placeholder='Mins' options={this.minutesOptions}/>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <Form.Select fluid placeholder='AM' options={this.ampmOptions}/>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                            <Divider />
                                            <Label basic>End Time:</Label>
                                            <Grid columns={3}>
                                                    
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Form.Select fluid placeholder='Hrs' options={this.hoursOptions}/>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <Form.Select fluid placeholder='Mins' options={this.minutesOptions}/>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <Form.Select fluid placeholder='AM' options={this.ampmOptions}/>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                            <Divider />
                                            <Form.Select 
                                            placeholder='Select' 
                                            fluid label='Select status:' 
                                            id='status' 
                                            options={this.statusOptions} 
                                            />
                                            <Divider />
                                            <Form.TextArea 
                                            placeholder='Enter your remarks here' 
                                            label='Remarks' 
                                            id='remarks'
                                            />
                                            <Form.Checkbox label='Part of my KRA' />
                                        </Form>
                                        
                                    </Segment>
                                    </Grid.Column>
                                </Grid>
                            </React.Fragment>
                            }
                            actions={['cancel', { key: 'Submit', content: 'Submit', positive: true }]}
                          />
                        
                    </Grid.Column>
                    </Grid.Row>

                <Container mobile={12} style={{overflowX:"auto"}}>   
                <TableExampleBasic/>
                </Container>
                </Grid>
        );
    }
}

export default TaskManager;