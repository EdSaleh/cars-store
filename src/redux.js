
import {AVAILABILITY_FETCH_FAILED, AVAILABILITY_FETCH_SUCCESS, CARS_FETCH_FAILED, CARS_FETCH_SUCCESS, SORT} from './sagas' 
import {SORT_AVAILABILITY, SORT_NAME} from './App.js';
const defaultState = { cars: [], sort:'name' };
export default function(state=defaultState, action) {
  switch(action.type) {
  case CARS_FETCH_SUCCESS:    
    state = {...state, cars:action.cars||[]};
    state.cars.sort((a, b) => a.name.localeCompare(b.name));
    return state;
  case AVAILABILITY_FETCH_SUCCESS: return {...state, cars:state.cars.map(x=>x.id===action.id? {...x, availability:action.availability}:x)};
  case CARS_FETCH_FAILED: return state;
  case AVAILABILITY_FETCH_FAILED: return state;
  case SORT:
    switch(action.payload){
    case SORT_NAME:
      state.cars.sort((a, b) => a.name.localeCompare(b.name));
      return state;
    case SORT_AVAILABILITY:
      state.cars.sort((a) => a.availability.localeCompare('Available'));
      return state;
    default: return state;
    }
  default: 
    return state;
  }
}

