import React from 'react';
import {connect} from 'react-redux';

import {getData} from '../actions';

const BreweryForm = props =>{

  const handleGetData = e =>{
    e.preventDefault();
    props.getData();
  }

  return (
  <>
  {props.isFetchingData ? (
    <div>**Sit back and have a drink. We are fetching brewery data!**</div>
  ) : (
  <button onClick ={handleGetData}>See Breweries</button>
  )}
  </>
  )
};

const mapStateToProps = state =>{
  return {
    isFetchingData: state.isFetchingData
  }
}

export default connect(mapStateToProps, {getData})(BreweryForm);