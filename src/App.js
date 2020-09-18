// Holds state: Count and Results Array
// A class method that can update state
// Renders 2 Child Components

import React from 'react';
import './App.css';
import md5 from 'md5';
import axios from 'axios';

// Component Imports
import Header from './components/Header'
import Form from './components/Form'
import Results from './components/Results'
import History from './components/History'
import Footer from './components/Footer'

class App extends React.Component {

  // TODO: Remove count/results/headers from state
  constructor(props){
    super(props);
    this.state = {
      // count: 0,
      // results: [],
      // headers: {},
      history: {},
      loading: false,
      request: {},
    }
  }

  toggleLoadingState = () => {
    this.setState({ loading: !this.state.loading });
  }

  // handleForm = (count, results, headers) => {
  //   this.setState({count, results, headers})
  // } 

  handleForm = async (request) => {

    try {
      this.toggleLoadingState();
      this.updateRequest(request);
      let response = await axios(request);
      this.toggleLoadingState();
      this.updateHistory(request);
      this.updateResults(response.headers, response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  updateHistory(request){

    let hash = md5(JSON.stringify(request));

    const history = { ...this.state.history, [hash]: request}

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    })
  }

  updateRequest = (request) => {
    this.setState({ request });
  }

  updateResults = (headers, results) => {
    this.setState({ headers, results });
  }


  render(){
    return (
    <div className="App">

      <Header />
      
      <Form formHandler={this.handleForm} request={this.state.request}/>
      
        <main>
      
          <History calls={this.state.history} updateHandler={this.updateRequest}/>

        {/* TODO: If headers and results are not in state...where does this come from? */}

          <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results}/>

        </main>

      <Footer />

    </div>
  );
}
}

export default App;


// https://swapi.dev/api/people