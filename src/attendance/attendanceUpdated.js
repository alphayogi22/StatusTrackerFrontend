import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';



class AttendanceUpdated extends Component {
    render(){
        return(
            <Grid centered>
            <div className="ui success message">
                    <i className="close icon"></i>
                    <div class="header">
                        Successfully Updated the status
                      </div>
                    <p>  You have Successfully Updated your Attendace</p>
            </div>
            </Grid>
        );
    }
}

export default AttendanceUpdated;