import React, {Component} from 'react';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { login } from '../userFunctions';


class Login extends Component{

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e) =>{
    this.setState({ [e.target.name] : e.target.value})
  }

  onSubmit = (e) =>{
   console.log(this.state);
   e.preventDefault();
   
   const user = {
     email: this.state.email,
     password: this.state.password 
   }

   console.log(this.state);

   //If login credential matches we will push them to the attendance

   login(user).then(res => {
    if (res) {
    console.log('login Successful')
  }
}
   , error => {
     console.log(error)
   })
  
  }
  render(){
    return(
      <Grid centered>
      <Grid.Column mobile={14} tablet={8} computer={7}>
        <Header as="h2" textAlign="center">
          GPTW Status Tracker v2.0
        </Header>
        <Segment>
          <Form size="big" onSubmit={this.onSubmit}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email address"
              id="email"
              name="email"
              autoComplete="email"
              onChange={this.onChange}
              value={this.state.email}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={this.onChange}
              value={this.state.password}
              />
            <Button 
            color="blue" 
            fluid size="big"
            onChange={this.onChange}>
              Login
            </Button>
          </Form>
        </Segment>
        <Message>
          Forgot Password? <a href="/login">Click here</a>
        </Message>
      </Grid.Column>
    </Grid>
  
    );
  }
}

export default Login;