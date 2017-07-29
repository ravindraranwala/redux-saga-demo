import React, {PropTypes} from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const StudentListRow = ({student}) => {
    return (
        <TableRow>
            <TableRowColumn>{student.id}</TableRowColumn>
            <TableRowColumn>{student.name}</TableRowColumn>
            <TableRowColumn>{student.stream}</TableRowColumn>
            <TableRowColumn>{student.gpa}</TableRowColumn>
        </TableRow>
    )
}

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentListRow;