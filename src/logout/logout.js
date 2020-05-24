import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Button} from "semantic-ui-react";

export const logout= (props)=> {
    localStorage.clear();
    props.history.push(`/login`);  
    window.location.reload();
};