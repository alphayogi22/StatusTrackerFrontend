import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Login from './login/Login';
import Attendance from './attendance/Attendance';
import TaskManager from './taskmanager/TaskManager';
import LeaveBalance from './leavebalance/leavebalance';
import StatusReport from './statusreport/statusreport';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
       localStorage.isAuthenticated===true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )

const Routes = () => (
    <routes>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route  exact path="/attendance" component={Attendance} />
            <Route exact path="/taskmanager" component={TaskManager} />
            <Route exact path="/leavebalance" component={LeaveBalance}/>
            <PrivateRoute exact path="/statusreport" component={StatusReport}/>
        </Switch>
    </routes> )

export default Routes;