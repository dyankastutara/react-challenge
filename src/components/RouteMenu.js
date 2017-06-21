import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RouteMenu extends Component {
  render(){
    return(
      <div style={{height:50, backgroundColor: "silver", textAlign: "right", padding: 15}}>
        <div>
          {/* <Link to="/">
            <button>
              Current Weather
            </button>
          </Link>
          <Link to="/forecast5">
            <button>
              Forecast 5 Day
            </button>
          </Link> */}
        </div>
      </div>
    )
  }
}

export default RouteMenu
