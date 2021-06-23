import { FETCH_DATA, UPDATE_BREWERIES, SET_ERROR } from "../actions";

const initialState = {
  breweries: [],
  isFecthingData: false,
  error: ''
};

export const breweriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        breweries: []
      };
    case UPDATE_BREWERIES:
      return {
        ...state,
        breweries: action.payload,
        isFetchingData: false
      }
    case SET_ERROR:
      return {
        ...state,
        isFectiongData: false,
        error: action.payload 
      }    
    default:
      return state;
  }
};
