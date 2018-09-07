import {AVAILABILITY_FETCH_FAILED, AVAILABILITY_FETCH_SUCCEEDED,CARS_FETCH_FAILED, CARS_FETCH_SUCCEEDED, SORT} from '../../sagas' 
import {SORT_AVAILABILITY, SORT_NAME} from '../../components/cars-list';
export default function(state = {}, action) {
  switch(action.type) {
  case AVAILABILITY_FETCH_SUCCEEDED:return;
  case AVAILABILITY_FETCH_FAILED: return;
  case CARS_FETCH_SUCCEEDED: return;
  case CARS_FETCH_FAILED: return;
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

