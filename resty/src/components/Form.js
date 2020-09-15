// The <Form> component should:
//    Use it’s own .scss file for styling
//    Accept user input for a URL and store it in state
//    Allow the user to choose a method and store it in state
//    This can be done with radio buttons or clickable elements

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

  handleClick = event => {
    event.preventDefault();
    // Not currently a useful button
  }

  handleRadio = event => {
    let method = event.target.value;
    this.setState({method})
  }
  
  render() {
    return (
      <div>
        <form className="Form">
          <h3>URL: <input onChange={this.handleURL}/><button onClick={this.handleClick}>GO!</button></h3>
          <div className="Radio">
            <input type="radio" id="get" name="method" value="GET" onChange={this.handleRadio} />
            <label for="GET">GET</label>
            <input type="radio" id="post" name="method" value="POST" onChange={this.handleRadio} />
            <label for="POST">POST</label>
            <input type="radio" id="put" name="method" value="PUT" onChange={this.handleRadio} />
            <label for="PUT">PUT</label>
            <input type="radio" id="delete" name="method" value="DELETE" onChange={this.handleRadio} />
            <label for="DELETE">DELETE</label>
          </div>
        </form>
        <section className="Choice">
      {/* //    Display the user’s choices on screen in a separate <div> or <section> under the form */}
          <h3>{this.state.method}</h3>
          <h3>{this.state.url}</h3>
        </section>
      </div>
    )
  }

}

export default Form;