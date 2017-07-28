import * as constants from '../actions/actionTypes';
const initialState = { students: []};

function studentsReducer(state = initialState.students, action) {
  switch (action.type) {
    case constants.STUDENTS_FETCH_SUCCEEDED:
      return action.students;
    default:
      return state;
  }
}

export default studentsReducer;