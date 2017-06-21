import React from 'react';
import { connect } from 'react-redux';

const listNameStarWars = function(props) {
  var swap = props.swap.listName.result
  if(swap){
    return (
      <div>
        <h2>List Name Star Wars</h2>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Birth Year</th>
              <th>Height</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              swap.results.map((result, index) => {
                return (
                  <tr key={index}>
                    <td>{index+=1}</td>
                    <td>{result.name}</td>
                    <td>{result.gender}</td>
                    <td>{result.birth_year}</td>
                    <td>{result.height}</td>
                    <td>Detail</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      );
    }
  else{
    return(
      <div>
        <h1>Search ...</h1>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    swap: state
  }
}

export default connect(mapStateToProps,null)(listNameStarWars)
