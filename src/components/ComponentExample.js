import React, { Component } from "react";
import { bc } from "../RestController"
import PatientList from "./PatientList";
class ComponentExample extends Component {
  constructor() {
    super();

    this.state = {
      //add states here
      into: {}
    };
  }

  handleButton() {
    console.log(bc);
    //this.getPatient("1"); //Gets one patient of index 1
  }

  render() {
    return (
      <div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Test Button"
        />
      </div>
    );
  }
}

export default ComponentExample;
