import React from "react";
import {InputForm} from "./Form.js";
import Output from "./Output.js";

export class MainDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:false,
      md: ""
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
      let final_json = {
        uid: this.state.witness_name+this.state.case_number,
        e: this.state.e,
        g: this.state.g,
        md: this.state.md
      }
      return (<Output json={final_json}/>);
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
