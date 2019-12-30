import React, { Component } from 'react';
import ChildForm from './ChildForm';

class ParentForm extends Component {
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
        const { inputTextValue, textareaValue, selectValue, zielony, czerwony, niebieski, liczbaGosci } = this.state;
        const values = { inputTextValue, textareaValue, selectValue, zielony, czerwony, niebieski, liczbaGosci }
        return (
            <div>
                <ChildForm handleInputChange={this.handleInputChange} values={values} />
            </div>
        )
    }
}


export default ParentForm;