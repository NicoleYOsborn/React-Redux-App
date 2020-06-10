import React from 'react';
import {connect} from 'react-redux'

const BreweriesList = props =>{
  return (
  <div className='list'>
  {props.error ? (
    <div className="error">{props.error}</div>
  ) : (
    props.breweries.map(brewery => 
    <div className='card'>
      <h3>{brewery.name}</h3>
      <p>Location: {brewery.city}, {brewery.state}</p>
      <a href={brewery.website_url}>This Brewery's Website</a>
  </div>
  )
  )}
  </div>
  )
}

const mapStateToProps = state =>{
  return{
    breweries: state.breweries,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(BreweriesList);