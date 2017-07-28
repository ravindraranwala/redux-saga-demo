import React, {PropTypes} from 'react';

const StudentListRow = ({student}) => {
    return (
        <tr>
            <th>&nbsp;</th>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.stream}</td>
            <td>{student.gpa}</td>
        </tr>
    )
}

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentListRow;