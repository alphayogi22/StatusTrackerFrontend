import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const Login = () => (
  <Grid centered>
    <Grid.Column mobile={14} tablet={8} computer={7}>
      <Header as="h2" textAlign="center">
        GPTW Status Tracker v2.0
      </Header>
      <Segment>
        <Form size="big">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="blue" fluid size="big">
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

export default Login;