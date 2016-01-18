import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Sample from './components/Sample';



export default  (
  <Route handler={App}>
    <Route path="/" handler={Sample} />
  </Route>
);
