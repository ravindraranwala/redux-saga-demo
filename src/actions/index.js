import * as constants from '../actions/actionTypes';

export function fetchStudents () {
    return {
        type: constants.STUDENTS_FETCH_REQUESTED
    }
}
