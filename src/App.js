import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './component/Header';
import Box from './component/Box';
import OBJModel from './component/OBJ_Model';
import GLDModel from './component/GLD_Model';
import Home from './component/Home';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/objmodel" component={OBJModel}></Route>
        <Route path="/gldmodel" component={GLDModel}></Route>
        <Route path="/box" component={Box}></Route>
      </Switch>
    </div>
  );
}

