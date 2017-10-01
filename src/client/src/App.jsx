import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './layout';
import { Provider } from 'react-redux';
import store from './common/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Layout></Layout>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
