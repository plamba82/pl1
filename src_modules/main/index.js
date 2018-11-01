import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../styles/myStyles.scss';;
//ReactDOM.render(<App name="neelam" />, document.getElementById('root'));

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./App', () => render(App));
