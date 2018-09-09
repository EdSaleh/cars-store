
import { call, put, all, takeEvery } from 'redux-saga/effects';
export const CARS_FETCH='CARS_FETCH';
export const CARS_FETCH_SUCCESS='CARS_FETCH_SUCCESS';
export const CARS_FETCH_FAILED ='CARS_FETCH_FAILED';
export const AVAILABILITY_FETCH='AVAILABILITY_FETCH';
export const AVAILABILITY_FETCH_SUCCESS='AVAILABILITY_FETCH_SUCCESS';
export const AVAILABILITY_FETCH_FAILED = 'AVAILABILITY_FETCH_FAILED';
export const SORT = 'SORT';

class Api {
  static fetchCars = ()=>new Promise(res => fetch(`/api/cars`).then(x=>res(x.json())))
  static fetchAvailability = (id)=> new Promise(res => fetch(`/api/availability/${id}`).then(x=>res(x.json())))
}

export function* fetchCars() {
  try {
    const cars = yield call(Api.fetchCars);
    yield put({ type: CARS_FETCH_SUCCESS, cars })
  } catch (e) {
    yield put({ type: CARS_FETCH_FAILED, message: e.message });
  }
}

export function* fetchAvailability(id) {
  try {    
    const availability = yield call(Api.fetchAvailability, id);
    yield put({ type: AVAILABILITY_FETCH_SUCCESS, id, availability });
  } catch (e) {
    yield put({ type: AVAILABILITY_FETCH_FAILED, message: e.message });
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    takeEvery(CARS_FETCH, fetchCars),
    takeEvery(AVAILABILITY_FETCH, fetchAvailability)
  ]);
}
