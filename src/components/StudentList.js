import React, {PropTypes} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import StudentListRow from './StudentListRow';

const StudentList = ({students}) => {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Stream</TableHeaderColumn>
          <TableHeaderColumn>GPA</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map(student =>
          <StudentListRow key={student.id} student={student} />
        )}
      </TableBody>
    </Table>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired
};

export default StudentList;