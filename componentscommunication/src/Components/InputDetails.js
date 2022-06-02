import React, { Component } from "react";
import './InputDetails.css'


class InputDetails extends Component {

  nameHandler = e => {
    this.props.onNameChange(e.target.value);
  }
  emailHandler = e => {
    this.props.onEmailChange(e.target.value);
  }
  textareaHandler = e => {
    this.props.onTextareaChange(e.target.value);
  }
  submitHandler = e => {
    e.preventDefault();
    this.props.onFormSubmit()
  }

  render() {
    const name = this.props.name;
    const email = this.props.email;
    const textarea = this.props.textarea;
    return (
        <div className="First">
          <h2>Enter Your Details!</h2>
          <form onSubmit={this.submitHandler}>
            Enter Your Name: <input name="name" id="name" value={name} onChange={this.nameHandler} placeholder="Type Your Name Here..."/>
            <br /><br/>
            Enter Your Email: <input name="email" id="email" value={email} onChange={this.emailHandler} placeholder="Type Your Email Here..."/>
            <br /><br/>
            <textarea name="textarea" id="textarea" value={textarea} onChange={this.textareaHandler} placeholder="Tell Us Something About Yourself.." rows='10' cols='50' />
            <br /><br/>
            <button type="submit">Submit The Details!</button>
          </form>
        </div>
    );
  }
}

export default InputDetails;