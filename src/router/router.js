import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import asyncComponent from '../asyncComponent';
import cardScroll from '../example/cardSlide/index';
import dialog from '../example/dialog/index';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={cardScroll} exact />
      <Route path="/cardSlide" component={cardScroll} />
      <Route path="/dialog" component={dialog} />
    </Switch>
  </BrowserRouter>
);

export default Root;
