import React, {PropTypes} from 'react';
import StudentListRow from './StudentListRow';

const StudentList = ({students}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>ID</th>
          <th>Name</th>
          <th>Stream</th>
          <th>GPA</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student =>
          <StudentListRow key={student.id} student={student} />
        )}
      </tbody>
    </table>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired
};

export default StudentList;