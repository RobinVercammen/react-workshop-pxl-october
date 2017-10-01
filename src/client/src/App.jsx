import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './common/layout'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout></Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
