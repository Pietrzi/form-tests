import React, { Component } from 'react'

export default class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          wybieraSie: true,
          ubieraSie: false,
          dobieraSie: false,
          liczbaGosci: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <form>
        <label>
          Wybiera się:
          <input
            name="wybieraSie"
            type="checkbox"
            checked={this.state.wybieraSie}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Ubiera się:
          <input
            name="ubieraSie"
            type="checkbox"
            checked={this.state.ubieraSie}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Dobiera się:
          <input
            name="dobieraSie"
            type="checkbox"
            checked={this.state.dobieraSie}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Liczba gości:
          <input
            name="liczbaGosci"
            type="number"
            value={this.state.liczbaGosci}
            onChange={this.handleInputChange} />
        </label>
      </form>
        )
    }
}
