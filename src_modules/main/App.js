import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';
import Loading from './Loading';
import '../styles/myStyles.scss';



const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
  {
    LoadingComponent: Loading
  }
);

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const GoogleLogin = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './components/GLExample'),
  {
    LoadingComponent: Loading
  }
);


const App = () => {
  return (
    <Router>
      <div>

      <div class="gn-blur"></div>
      <span class="global-text">Mac</span>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic1" component={DynamicPage} />
          <Route exact path="/dynamic2" component={AsyncDynamicPAge} />
          <Route exact path="/googleLogin" component={GoogleLogin} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;