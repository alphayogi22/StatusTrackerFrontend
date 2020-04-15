import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import LeaveBalanceTable from './leavebalancetable';

class LeaveBalance extends Component{
    render(){
        return(
           
        <Grid columns='equal'>
          <Grid.Row>
          <Grid.Column width={4}>
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

          <Grid.Column width={4}>
          <select class="ui fluid search selection dropdown"> 
           <option value="">LeaveBalance</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
           <option value="11">11</option>
           <option value="12">12</option>
           <option value="13">13</option>
           <option value="14">14</option>
           <option value="15">15</option>
           <option value="16">16</option>
           <option value="17">17</option>
           <option value="18">18</option>
           <option value="19">19</option>
           <option value="20">20</option>
           <option value="21">21</option>
           </select>
           </Grid.Column>
           </Grid.Row>


           <LeaveBalanceTable/>
           </Grid>
        );
    }
}

export default LeaveBalance;