// The <Header> component should use it’s own .scss file for styling


import React from 'react';
import './Header.scss'

function Header() {

  return(
    <header className="App-header">
      <h1>RESTy</h1>
    </header>
  )

}

export default Header;