import React, { Component } from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        if (/[a-zA-Z]+/.test(this.state.value)) {
          this.setState({nameAvailable:true})
        }else {
          alert('Not a name');
          this.setState({isValid:true})
        };

        event.preventDefault();
      }

      render() {
        if (!this.state.nameAvailable) {

        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      } else {
        return (<div>Good Morning {this.state.value}</div>);
      }
   }
    }
     export default NameForm;
