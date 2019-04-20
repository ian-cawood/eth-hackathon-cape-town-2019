import React, { Component } from 'react'
import Page1 from './components/page1.jsx'

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    route: window.location.pathname.replace('/', ''),
  }

  render() {
    return <Page1 />
  }
}

export default App
