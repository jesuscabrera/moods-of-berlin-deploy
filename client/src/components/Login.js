import React, { Component } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { login } from "../services/auth";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
        });
      } else {
        // if everuthing is fine than log the user in
        // and update the state for the parent component
        this.props.setUser(data);
        this.props.history.push("/places"); // here the user is redirected to /places
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-info p-5 " style={{ borderTop: "solid 2px white" }}>
          <Card
            bg="light"
            border="secondary"
            style={{ width: "25rem", margin: "0 auto" }}
            body
          >
            <h2 className="text-center">Log In</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="username">Username: </Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  id="username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password: </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                />
              </Form.Group>
              {this.state.message && (
                <Alert variant="danger">{this.state.message}</Alert>
              )}
              <Button type="submit">Log In</Button>
            </Form>
            <div className="text-center my-3">
              <p> Please go to Sign Up if you are not a user yet</p>
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
