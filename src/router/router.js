import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import asyncComponent from '../asyncComponent';
import cardScroll from '../example/cardSlide/index';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={cardScroll} />
    </Switch>
  </BrowserRouter>
);

export default Root;
