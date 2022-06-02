import React, { Component } from "react";
import './OutputDetails.css'
import InputDetails from "./InputDetails";

class OutputDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      textarea: " ",
      outputName: " ",
      outputEmail: " ",
      outputTextarea: " "
    };
  }
  nameHandler = name => {
    this.setState({ name });
  };
  emailHandler = email => {
    this.setState({ email });
  };
  textareaHandler = textarea => {
    this.setState({ textarea });
  };
  submitHandler = e => {
    this.setState({
      outputName: this.state.name,
      outputEmail: this.state.email,
      outputTextarea: this.state.textarea
    });
  };

  render() {
    const Yourname = this.state.outputName;
    const Youremail = this.state.outputEmail;
    const Yourbriefintro = this.state.outputTextarea;
    return (
      <div>
        <InputDetails
          onNameChange={this.nameHandler}
          onEmailChange={this.emailHandler}
          onTextareaChange={this.textareaHandler}
          onFormSubmit={this.submitHandler}
        />
        <div className="Second">
          <h3> Your Details Entered By You Are As Follows: </h3>
          <p>Your Name Is: {Yourname}</p>
          <p>Your Email ID Is: {Youremail}</p>
          <p>A Brief About Yourself: {Yourbriefintro}</p>
        </div>
      </div>
    );
  }
}
export default OutputDetails;