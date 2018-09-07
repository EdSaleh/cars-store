
import { call, put, all } from 'redux-saga/effects';
export const CARS_FETCH_SUCCEEDED='CARS_FETCH_SUCCEEDED';
export const CARS_FETCH_FAILED ='CARS_FETCH_FAILED';
export const AVAILABILITY_FETCH_SUCCEEDED='AVAILABILITY_FETCH_SUCCEEDED';
export const AVAILABILITY_FETCH_FAILED = 'AVAILABILITY_FETCH_FAILED';
export const SORT = 'SORT';

class Api {
  static fetchCars() { ()=>fetch('./api/cars')}
  static fetchAvailability() {(id)=> fetch(`./api/availability/${id}`)}
}

export function* fetchCars() {
  try {
    const cars = yield call(Api.fetchCars);
    yield put({ type: CARS_FETCH_SUCCEEDED, user: cars });
  } catch (e) {
    yield put({ type: CARS_FETCH_FAILED, message: e.message });
  }
}

export function* fetchAvailability(id) {
  try {
    
    const availability = yield call(Api.fetchAvailability, id);
    yield put({ type: AVAILABILITY_FETCH_SUCCEEDED, availability });
  } catch (e) {
    yield put({ type: AVAILABILITY_FETCH_FAILED, message: e.message });
  }
}

export function* sort() {
  yield put({ type: "SORT" });
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fetchCars(),
    fetchAvailability()
  ])
}
