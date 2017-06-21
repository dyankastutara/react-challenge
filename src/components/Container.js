import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { SelectSources } from '../actions/SelectSourceAction';
import { ListArticle } from '../actions/ListArticlesAction';
import { ListNews, SelectNews, PageNotFound } from './index';

class Container extends Component {
  render(){
    return(
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Switch>
            <Route exact path="/" component={()=>{
              return(
                <Tab eventKey={1} title="News">
                  <br />
                  <SelectNews />
                  <hr />
                  <ListNews />
                </Tab>
              )}
            }/>
            <Route component={PageNotFound} />
          </Switch>
        </Tabs>
      </div>
    )
  }
  componentDidMount(){
    this.props.GetSource();
    this.props.GetListArticles();
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    GetSource: ()=>{
      dispatch(SelectSources())
    },
    GetListArticles: ()=>{
      dispatch(ListArticle())
    }
  }
}

export default connect(null,mapDispatchToProps)(Container);
