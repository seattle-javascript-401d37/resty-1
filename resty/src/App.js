// Holds state: Count and Results Array
// A class method that can update state
// Renders 2 Child Components

import React from 'react';
import './App.css';

// Component Imports
import Header from './components/Header'
import Form from './components/Form'
import Results from './components/Results'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {},
    }
  }

  handleForm = (count, results, headers) => {
    this.setState({count, results, headers})
  } 

  render(){
    return (
      <div className="App">
      <Header />
      <Form handler={this.handleForm}/>
      {/* Expects a function to be sent to it as a prop */}
      <Results count={this.state.count} headers={this.state.headers} results={this.state.results}/>
      {/* Expects the count, headers, results to be sent in as props */}
      <Footer />
    </div>
  );
}
}

export default App;


// https://swapi.dev/api/people