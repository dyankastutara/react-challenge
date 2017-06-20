import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import FC5Days3Hours from './components/FC5Days3Hours'
import RouteMenu from './components/RouteMenu'
import DetailWeather from './components/DetailWeather'

import PageNotFound from './components/PageNotFound'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputCity: '',
      currentData:[],
      data5Days3Hours:[],
      searchByCity: ''
    }
  }

  inputCity(inputCity){
    this.setState({
      inputCity
    })
  }

  searchByCity(searchByCity){
    this.setState({
      searchByCity : searchByCity || 'Jakarta'
    })
    this.currentWeather(searchByCity)
    this.data5Days3Hours(searchByCity)
  }

  currentWeather(search){
    let city = search || 'Jakarta'
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},id&APPID=8586607e679f0211700813ce43b0da34`)
    .then(response=>{
      this.setState({
        currentData: response.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  data5Days3Hours(search){
    let city = search || 'Jakarta'
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},id&mode=json&APPID=8586607e679f0211700813ce43b0da34`)
    .then(response=>{
      this.setState({
        data5Days3Hours: response.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    const {currentData, data5Days3Hours} = this.state
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        <RouteMenu />
        <div className="container">
          <br />
          <div>
              <form onSubmit={(event)=>{
                  event.preventDefault();
                  this.searchByCity(this.state.inputCity)
                }}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search By City in Indonesia" onChange={(event)=>{
                      this.inputCity(event.target.value)
                    }} value={this.state.inputCity} />
                </div>
              </form>
            </div>
          <Switch>
            <Route exact path="/"
              component={()=> <CurrentWeather currentData={currentData} />} />
            <Route exact path="/:id"
                component={()=> <DetailWeather currentData={currentData} />} />
            <Route exact path="/forecast5"
              component={()=> <FC5Days3Hours data5Days3Hours={data5Days3Hours}/>} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
    );
  }
  componentWillMount(){
    this.currentWeather()

  }
  componentDidMount(){
    this.currentWeather()
    this.data5Days3Hours()
  }
}

export default App;
