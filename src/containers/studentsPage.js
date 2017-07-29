import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentList from '../components/StudentList'
import { fetchStudents } from '../actions'
import AppBar from 'material-ui/AppBar';


class StudentsPage extends Component {
  componentDidMount() {
    this.props.actions.fetchStudents();
  }

  render() {
    const { students } = this.props;
    return (
      <div>
        <AppBar
          title="Students"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <StudentList students={students} />
      </div>
    );
  }
}

StudentsPage.propTypes = {
  students: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    students: state.students
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchStudents}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);