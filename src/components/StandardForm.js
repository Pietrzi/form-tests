import React, { Component } from 'react'

class StandardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTextValue: '',
            textareaValue: '',
            selectValue: '',
            zielony: false,
            czerwony: false,
            niebieski: false,
            liczbaGosci: 0
        };
    
        // this.handleTextChange = this.handleTextChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    //   handleTextChange(event) {
    //     this.setState({
    //         inputTextValue: event.target.value
    //     });
    //   }

    //   handleTextareaChange = e => {
    //       this.setState({
    //           textareaValue: e.target.value
    //       })
    //   }

    //   handleSelectChange = e => {
    //       this.setState({
    //           selectValue: e.target.value
    //       })
    //   }

      handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    //   handleWlaczonyChange = e => {
    //       this.setState({
    //           wlaczony: 
    //       })
    //   }
    
      handleSubmit(event) {
        event.preventDefault();
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
                    <input type="text" name="inputTextValue" value={this.state.inputTextValue} onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Wypracowanie:
                    <textarea name="textareaValue" value={this.state.textareaValue} onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Wybierz swój ulubiony smak:
                    <select name="selectValue" value={this.state.value} onChange={this.handleInputChange}>
                        <option value="grejpfrutowy">Grejpfrutowy</option>
                        <option value="limonkowy">Limonkowy</option>
                        <option value="kokosowy">Kokosowy</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br/>
                <label>
                    Wybiera się:
                    <input
                        name="zielony"
                        type="checkbox"
                        checked={this.state.zielony}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Ubiera się:
                    <input
                        name="czerwony"
                        type="checkbox"
                        checked={this.state.czerwony}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Dobiera się:
                    <input
                        name="niebieski"
                        type="checkbox"
                        checked={this.state.niebieski}
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
                <br />
                <input type="submit" value="Wyślij" />
            </form>
        )
    }
}


export default StandardForm;