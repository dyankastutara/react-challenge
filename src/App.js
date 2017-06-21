import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/Header'
import listNameStarWars from './components/listNameStarWars'
import RouteMenu from './components/RouteMenu'
import PageNotFound from './components/PageNotFound'
import './App.css';

import {getNameStarWars} from './actions/listNameSWAction'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.swapPeople()
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        <RouteMenu />
        <div className="container">
          <Switch>
            <Route exact path="/"
              component={listNameStarWars} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    swapPeople: () => dispatch(getNameStarWars()),
  };
}

export default connect(null, mapDispatchToProps)(App);
