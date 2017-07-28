import * as constants from '../actions/actionTypes';

export function fetchStudents () {
    console.log('fetching students.')
    return {
        type: constants.STUDENTS_FETCH_REQUESTED
    }
}
