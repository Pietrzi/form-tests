import React, { Component } from 'react'

export default class StandardUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }

      handleSubmit = e => {
        let bla;
        e.preventDefault();
        // alert('A name was submitted: ' + this.input.current.value);
        // this.setState = ({
        //     inputValue: this.input.current.value
        // })
        console.log(this.input.current.value);
        bla = this.input.current.value;
        console.log(bla)
        this.input.current.value = "";
      }


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" ref={this.input} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {/* <p>{this.input.current.value}</p> */}
            </div>
        )
    }
}
