import React, { Component } from 'react';
import { Form, Grid, Header, Segment, Button, Divider, Modal, Container} from 'semantic-ui-react';
import TableExampleBasic from './tasktable.js';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import TimeRange from 'react-time-range';
import moment from 'moment';
import axios from 'axios';

class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          task: '',
          partOfKra: false,
          noOfHours:'',
          startTime: '',
          endTime: '',
          status: '',
          remark:''       
         };
      }
    
      toggleChange = () => {
        this.setState({
            partOfKra: !this.state.partOfKra,
        });
      }

    statusOptions = [
        { key: '0', value: 'Not Started', text: 'Not Started' },
        { key: '1', value: 'Work in Progress', text: 'Work in Progress' },
        { key: '2', value: 'Completed', text: 'Completed' }
    ];
 

    onChange = (e, { name, value }) => {
        this.setState(
          {
            [name]: value,
          }
          ,() => console.log(this.state)
        );
    }

      onSubmit = (e) => {
        e.preventDefault();
        console.log('Submit button click');
        const apiToGetCurrentUser = 'http://localhost:8000/rest-auth/user/';
        const token = JSON.parse(localStorage.getItem('Auth-Key'));

        axios
        .get(apiToGetCurrentUser, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => {
          const user = res.data.id;
          this.setState({ user });
        });

      }
    render() {
        const { value } = this.state;
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
                    <SemanticDatepicker label='Start Date:' placeholder = 'Select Date' fluid id='startDate'/>
                    </Grid.Column>

                    <Grid.Column  mobile={15} tablet={6} computer={5}>
                    <SemanticDatepicker label='End Date:' placeholder = 'End Date' fluid id='toDate'/>
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
                                            <Form.Input 
                                            fluid label='Task Name:' 
                                            placeholder='Type here....' 
                                            id='task'
                                            name='task'
                                            onChange={this.onChange}/>

                                            <Form.Checkbox label='Part of my KRA' 
                                            id='partOfKra'
                                            name='partOfKra'
                                            checked={this.state.partOfKra}
                                            onChange={this.toggleChange}/>
                                            <Divider />

                                            <Form.Input 
                                            fluid label='No of hours:' 
                                            id='noOfHours'
                                            name='noOfHours'
                                            onChange={this.onChange}/>
                                            <Divider />

                                            <TimeRange
                                                    startLabel='Start Time:'
                                                    endLabel ='End Time:'
                                                    startMoment= {this.state.startTime}
                                                    endMoment= {this.state.endTime}
                                                    onChange={this.returnFunction}
                                                />                                            
                                        
                                            <Divider />

                                            <Form.Select 
                                            placeholder='Select' 
                                            fluid label='Select status:' 
                                            id='status' 
                                            name='status'
                                            options={this.statusOptions} 
                                            onChange={this.onChange}
                                            />
                                            <Divider />
                                            <Form.TextArea 
                                            placeholder='Enter your remarks here' 
                                            label='Remarks' 
                                            id='remark'
                                            name='remark'
                                            onChange={this.onChange}
                                            />
                                        </Form>
                                        
                                    </Segment>
                                    </Grid.Column>
                                </Grid>
                            </React.Fragment>
                            }
                            actions={['cancel', { key: 'Submit', content: 'Submit', positive: true, onSubmit: this.onSubmit}]}
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