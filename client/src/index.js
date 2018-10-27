import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
// -------------------------------

import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import client from './apollo';

/**
 * @TODO: Add Routing
 *
 * Uncomment the following line when your routes are configured
 *
 * import Routes from './routes/index'
 *
 * Below in your <App />, nest your <Routes /> inside of <BrowserRouter />
 * component to enable routing in your client app.
 */
import store from './redux';

import { ViewerProvider } from './context/ViewerProvider';

// @TODO: Remove this import once you have your router working below
import Layout from './routes/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

const App = () => {
  return (
    <ViewerProvider>
      <ReduxProvider store={store}>
        <MuiThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <CssBaseline />
            <Router>
              <Layout />
            </Router>
          </ApolloProvider>
        </MuiThemeProvider>
      </ReduxProvider>
    </ViewerProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
