import axios from 'axios';

export const FETCH_DATA = 'GET_DATA';
export const UPDATE_BREWERIES = 'UPDATE_BREWERIES';
export const SET_ERROR ='SET_ERROR';


export const getData = () => dispatch => {
  dispatch({type: FETCH_DATA});
  axios.get('https://api.openbrewerydb.org/breweries')
    .then (res => {
      console.log(res);
      dispatch({type: UPDATE_BREWERIES, payload: res.data})
      })
    .catch(err => {
      console.error('error fetching data from api. err: ', err);
    dispatch({type: SET_ERROR, payload: 'error fetching data from api'})
    })
  };
