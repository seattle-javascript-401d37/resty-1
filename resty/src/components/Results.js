// Expects the count, headers, results to be sent in as props
// Renders the count
// Renders the Result Headers as “pretty” JSON
// Renders the Result Body as “pretty” JSON

import React from 'react';
import './Results.scss'
import JSONPretty from 'react-json-pretty';

function Results(props) {

  return (
    <section className="Choice">
        <h3>Count: {props.count}</h3>
        <p>Headers: <JSONPretty data={props.headers} /></p>
        <p>Results:</p>
        <ul>
          {props.results.map(result => {
            return (
              <li>
                <JSONPretty data={result} />
                {/* Note from Cait => If we want to render just hyperlinks and names */}
                {/* <a href={result.url}>{result.name}</a> */}
              </li>
            )
          })}
        </ul>
      </section>
  )

}

export default Results;