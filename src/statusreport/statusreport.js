import React, { Component } from 'react';
import {Grid, Container} from 'semantic-ui-react';
import StatusReportTable from './statusreporttable';
import SemanticDatepicker from 'react-semantic-ui-datepickers';


class StatusReport extends Component {
    render(){
        return(
            
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
                    <SemanticDatepicker label='Start Date:' placeholder = 'Select Date' fluid id='toDate'/>
                    </Grid.Column>

            <Grid.Column mobile={12} tablet={6} computer={5}>
                    <SemanticDatepicker label='End Date:' placeholder = 'Select Date' fluid id='toDate'/>
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

           <Container mobile={15} style={{overflowX:"auto"}}>
           <StatusReportTable/>
           </Container>
           </Grid>
        );
    }

}

export default StatusReport;