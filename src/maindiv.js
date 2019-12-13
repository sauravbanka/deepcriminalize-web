import React from "react";
import {InputForm} from "./Form.js";
import Output from "./Output.js";

export class MainDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.displayOutput = this.displayOutput.bind(this);
  };

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit(event, display) {
    event.preventDefault();
    this.setState({
      display: true
    })
    console.log(this.state, display)
  };


  displayOutput() {
    console.log(this.state)
    if (this.state.display === true) {
      return (<Output case={this.state.case_number} witname={this.state.witness_name} gender={this.state.gender} ethnicity={this.state.ethnicity}/>);
    }
      else {
        return (
          <InputForm input={this.handleInputChange} submit={this.handleFormSubmit}/>
        )
      }
    };

  render() {
    return (
      <div>
      {this.displayOutput()}
      </div>
    )
  };
}
