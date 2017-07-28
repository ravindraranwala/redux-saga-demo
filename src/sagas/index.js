import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getStudents } from '../api';
import * as constants from '../actions/actionTypes';

// worker Saga: will be fired on STUDENTS_FETCH_REQUESTED actions
function* fetchStudents(action) {
  console.log('calling endpoint')
   try {
      const students = yield call(getStudents);
      yield put({type: constants.STUDENTS_FETCH_SUCCEEDED, students: students});
   } catch (e) {
      yield put({type: constants.STUDENTS_FETCH_FAILED, message: e.message});
   }
}

/*
  Starts fetchStudents on each dispatched `STUDENTS_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* studentsSaga() {
  console.log('students Saga called')
  yield takeEvery(constants.STUDENTS_FETCH_REQUESTED, fetchStudents);
}


export default studentsSaga;