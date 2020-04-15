import React, { Component } from 'react';
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

class Attendance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'Present',
            showDatePicker: false
        };
    }

    statusOptions = [
        { key: '0', value: 'Present', text: 'Present' },
        { key: '1', value: 'Out of Office', text: 'Out of Office' },
        { key: '2', value: 'Work From Home', text: 'Work From Home' },
        { key: '3', value: 'Sick Leave', text: 'Sick Leave' },
        { key: '4', value: 'Earned Leave', text: 'Earned Leave' },
        { key: '5', value: 'Maternity Leave', text: 'Maternity Leave' },
        { key: '6', value: 'Sabbatical Leave', text: 'Sabbatical Leave' },
        { key: '7', value: 'Optional Holiday', text: 'Optional Holiday' }
    ];

    statusChange = (e, {value}) => {
        this.setState({
            status: value
        });
        if (value === 'Present' || value === 'Work From Home' || value === 'Optional Holiday') {
            this.setState({
                showDatePicker: false
            });
        }else {
            this.setState({
                showDatePicker: true
            });
        }
    } 

    render() {
        return (
            <React.Fragment>
                <Grid centered>
                    <Grid.Column mobile={16} tablet={8} computer={6}>
                    <Header as="h2" textAlign="center">
                        Mark your status of the day
                    </Header>
                    <Segment>
                        <Form size="big">
                            <Form.Select 
                            placeholder='Select' 
                            fluid label='Select your status:' 
                            id='status' 
                            options={this.statusOptions} 
                            onChange={this.statusChange}
                            value={this.state.status}/>
                            {/* Below date pickers show only for certain statuses */}
                            { 
                            this.state.showDatePicker 
                            ? <SemanticDatepicker label='From:' placeholder = 'Select Date' fluid id='fromDate'/> 
                            : null
                            }
                            { 
                            this.state.showDatePicker 
                            ? <SemanticDatepicker label='To:' placeholder = 'Select Date' fluid id='toDate'/> 
                            : null
                            }

                            <Form.TextArea 
                            placeholder='Enter your remarks here' 
                            label='Remarks' 
                            id='remarks'
                            />
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Attendance;