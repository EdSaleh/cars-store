
import {AVAILABILITY_FETCH_FAILED, AVAILABILITY_FETCH_SUCCESS, CARS_FETCH_FAILED, CARS_FETCH_SUCCESS, SORT} from './sagas' 
import {SORT_AVAILABILITY, SORT_NAME} from './App.js';
export default function(state={
  cars: [],
  sort:'name'
}, action) {
  switch(action.type) {
  case CARS_FETCH_SUCCESS: var obj = {...state, cars:action.cars||[]}; console.log(obj); return obj;
  case AVAILABILITY_FETCH_SUCCESS: return {...state, cars:state.cars.map(x=>x.id===action.id? {...x, availability:action.availability}:x)};
  case CARS_FETCH_FAILED: return state;
  case AVAILABILITY_FETCH_FAILED: return state;
  case SORT: 
    switch(state.sort){
    default:
    case SORT_NAME:
      return (state.cars||[]).sort((a, b) => a.name.localeCompare(b.name));
    case SORT_AVAILABILITY:
      return (state.cars||[]).sort((a) => a.availability.localeCompare('availability'));
    }
  default: 
    return state;
  }
}

