import React from "react";
import {InputForm} from "./Form.js";
import Output from "./Output.js";
import $ from "jquery";
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
    // console.log(this.state)
    if (this.state.display === true) {
      var x = document.getElementById("desc").textContent;

      let final_json = {
        uid: 1300,
        e: this.state.e,
        g: this.state.g,
        md: "The woman was tall, hispanic and had a hooked nose"
      }
      console.log(final_json)

      var data = JSON.stringify({
  "uid": 9,
  "g": "woman",
  "e": "caucasian",
  "md": "The caucasian male has long blonde hair,bald man, big lips, a big mustache. He is very attractive but slightly intimidating."
});

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://deepcriminalize.ngrok.io");
    xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.20.1");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "17cc52ac-ab49-419f-96cd-e2473620cb1d,f4f9933c-c3cb-44cc-b4d1-e7b22cc8b47d");
    // xhr.setRequestHeader("Host", "deepcriminalize.ngrok.io");
    // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
    // xhr.setRequestHeader("Content-Length", "185");
    // xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("dataType",'jsonp');
    xhr.send(data);




      // $.ajax({
      // url : "http://deepcriminalize.ngrok.io",
      // type : "POST",
      // data : JSON.stringify(final_json),
      // contentType: 'application/json; charset=utf-8',
      // dataType: 'json',
      // // mode:'no-cors'
      // })

      return (<Output json={final_json} />);
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
