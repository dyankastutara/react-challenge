import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import {connect} from 'react-redux';
import { ListArticle } from '../actions/ListArticlesAction';

import logo from '../logo.svg';
import '../App.css';


class SelectNews extends Component{
  constructor(props){
    super(props)
    this.state = {
      source:'',
      sortBy:''
    }
    this.setLocalStateSource = this.setLocalStateSource.bind(this)
    this.setLocalStateSortBy = this.setLocalStateSortBy.bind(this)
  }

  setLocalStateSource(source){
    this.setState({
      source: source,
    })
    console.log(this.state);
  }

  setLocalStateSortBy(sortBy){
    this.setState({
      sortBy: sortBy,
    })
    console.log(this.state);
  }

  render(){
    var listSelect = this.props.SelectSources.result;
    if(listSelect){
      return(
        <div>
          <FormGroup controlId="formSources" style={{width:'40%'}}>
            <ControlLabel>Select News Sources {`(Default: abc-news-au)`}</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={(event)=>{
                this.setLocalStateSource(event.target.value)
                this.props.GetListArticles(event.target.value, this.state.sortBy)
              }}>
            <option>Select Sources</option>
            {
              listSelect.sources.map((list, index)=>{
                return(
                  <option value={list.id} key={index}>{list.name}</option>
                )
              })
            }
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formSortBy" style={{width:'40%'}}>
            <ControlLabel>Sort By {`(Default : Top)`}</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={(event)=>{
                this.setLocalStateSortBy(event.target.value)
                this.props.GetListArticles(this.state.source, event.target.value)
              }}>
              <option value="top">Top</option>
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
            </FormControl>
          </FormGroup>
        </div>
      )
    }else{
      return(
        <div style={{textAlign:"center"}}>
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
      )
    }
  }
}


const mapStateToProps = (state)=>{
  return{
    SelectSources: state.listSources
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    GetListArticles: (source, sortBy)=>{
      dispatch(ListArticle(source, sortBy))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectNews)
