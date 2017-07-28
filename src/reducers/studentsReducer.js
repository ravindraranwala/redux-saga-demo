import * as constants from '../actions/actionTypes';
import initialState from './initialState';

function studentsReducer(state = initialState.students, action) {
  switch (action.type) {
    case constants.STUDENTS_FETCH_SUCCEEDED:
      console.log(action.students)
      return action.students;
    default:
      return state;
  }
}

export default studentsReducer;