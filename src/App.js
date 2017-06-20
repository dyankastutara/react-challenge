import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import FC5Days3Hours from './components/FC5Days3Hours'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentData:[],
      data5Days3Hours:[]
    }
  }

  currentWeather(){
    let city = 'Jakarta,id'
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8586607e679f0211700813ce43b0da34`)
    .then(response=>{
      this.setState({
        currentData: response.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  data5Days3Hours(){
    let city = 'Jakarta,id'
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=8586607e679f0211700813ce43b0da34`)
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
      <div className="App">
        <Header />
        <div className="container">
          <CurrentWeather
            currentData={currentData}
          />
          <FC5Days3Hours
            data5Days3Hours={data5Days3Hours}
          />
        </div>
      </div>
    );
  }
  componentWillMount(){
    this.currentWeather()

  }
  componentDidMount(){
    // this.currentWeather()
    this.data5Days3Hours()
  }
}

export default App;
