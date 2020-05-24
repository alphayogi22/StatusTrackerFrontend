import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Login from './login/Login';
import Attendance from './attendance/Attendance';
import TaskManager from './taskmanager/TaskManager';
import LeaveBalance from './leavebalance/leavebalance';
import StatusReport from './statusreport/statusreport';
import AttendanceMarked from './attendance/attendanceMarked';
import AttendanceUpdated from './attendance/attendanceUpdated';
import { ProtectedRoute } from "./Authroute/protected.route";
import {logout} from "./logout/logout";


const Routes = () => (
    <routes>
        <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute  exact path="/attendance" component={Attendance} />
            <ProtectedRoute exact path="/taskmanager" component={TaskManager} />
            <ProtectedRoute exact path="/leavebalance" component={LeaveBalance}/>
            <ProtectedRoute exact path="/statusreport" component={StatusReport}/>
            <ProtectedRoute exact path="/attendancemarked" component={AttendanceMarked}/>
            <ProtectedRoute exact path="/attendanceupdated" component={AttendanceUpdated}/>
            <ProtectedRoute exact path="/logout" component={logout}/>

        </Switch>
    </routes> )

export default Routes;