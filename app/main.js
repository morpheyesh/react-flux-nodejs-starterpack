import React from 'react';
import Router from 'react-router';
import routes from './routes';
import App from './components/App';
import Sample from './components/Sample';


var router = Router.create({
  routes: routes,
});


router.run(function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
