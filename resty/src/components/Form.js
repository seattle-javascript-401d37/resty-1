// Expects a function to be sent to it as a prop
// Renders a URL entry form
// A selection of REST methods to choose from (“get” should be the default)
// On submit
  // Send the API results back to the <App> using the method sent down in props

import React from 'react';
import './Form.scss'

class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: ''
    }
  }

  handleURL = event => {
    let url = event.target.value;
    this.setState({url});
  }

  handleClick = async event => {
    event.preventDefault();

    let raw = await fetch(this.state.url);

    let headers = {};
    raw.headers.forEach((val, key) => headers[key]=val);

    console.log('Headers:', headers);

    let data = await raw.json();
    console.log('Data:', data);
    let count = data.count;
    let results = data.results;

      // pass count and results to handler that was passed through props
    this.props.handler(count, results, headers);
  }

  handleRadio = event => {
    let method = event.target.value;
    this.setState({method})
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.handleClick}>
          <h3>URL: <input onChange={this.handleURL}/><button>GO!</button></h3>
          <div className="Radio">
            <input type="radio" id="get" name="method" value="GET" checked="checked" onChange={this.handleRadio} />
            <label htmlFor="GET">GET</label>
            <input type="radio" id="post" name="method" value="POST" onChange={this.handleRadio} />
            <label htmlFor="POST">POST</label>
            <input type="radio" id="put" name="method" value="PUT" onChange={this.handleRadio} />
            <label htmlFor="PUT">PUT</label>
            <input type="radio" id="delete" name="method" value="DELETE" onChange={this.handleRadio} />
            <label htmlFor="DELETE">DELETE</label>
          </div>
        </form>
      </>
    )
  }

}

export default Form;