import React, { Component } from 'react'

class ChildForm extends Component {
    render() {
        const { values, handleInputChange } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
                    <input type="text" name="inputTextValue" value={values.inputTextValue} onChange={handleInputChange} />
                </label>
                <br/>
                <label>
                    Wypracowanie:
                    <textarea name="textareaValue" value={values.textareaValue} onChange={handleInputChange} />
                </label>
                <br/>
                <label>
                    Wybierz swój ulubiony smak:
                    <select name="selectValue" value={values.value} onChange={handleInputChange}>
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
                        checked={values.zielony}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Ubiera się:
                    <input
                        name="czerwony"
                        type="checkbox"
                        checked={values.czerwony}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Dobiera się:
                    <input
                        name="niebieski"
                        type="checkbox"
                        checked={values.niebieski}
                        onChange={handleInputChange} />
                </label>
                <br />        
                <label>
                    Liczba gości:
                    <input
                        name="liczbaGosci"
                        type="number"
                        value={values.liczbaGosci}
                        onChange={handleInputChange} />
                </label>
                <br />
                <input type="submit" value="Wyślij" />
            </form>
        )
    }
}


export default ChildForm;