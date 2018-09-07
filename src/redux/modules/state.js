import {AVAILABILITY_FETCH_FAILED, AVAILABILITY_FETCH, CARS_FETCH_FAILED, CARS_FETCH, SORT} from '../../sagas' 
import {SORT_AVAILABILITY, SORT_NAME} from '../../components/cars-list';
export default function(state = {}, action) {
  switch(action.type) {
  case CARS_FETCH: return action.cars;
  case AVAILABILITY_FETCH:  return state.cars.map(x=>x.id===action.id? {...x, availability:action.availability}:x);
  case CARS_FETCH_FAILED: return state;
  case AVAILABILITY_FETCH_FAILED: return state;
  case SORT: 
    switch(state.sort){
    case SORT_NAME:
      return state.cars.sort((a, b) => a.name.localeCompare(b.name));
    case SORT_AVAILABILITY:
      return state.cars.sort((a) => a.availability.localeCompare('availability'));
    }
    break;
  default: 
    return state;
  }
}

