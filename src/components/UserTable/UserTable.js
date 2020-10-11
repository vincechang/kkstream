import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { selectUsers, fetchUsers } from '../../app/slices/users';
import styles from './UserTable.style';

const columnSpec = [
  { header: 'ID', column: 'id' },
  { header: 'Name', column: 'name' },
  { header: 'E-mail', column: 'email' },
  { header: 'Delete', column: 'delete' },
];

class UserTable extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderColumn(item, { column }) {
    return (
      <td>
        {item[column]}
        <style jsx>{styles}</style>
      </td>
    );
  }

  renderRow(item, columnSpec) {
    return (
      <tr>
        {columnSpec.map((spec, i) => this.renderColumn(item, spec, i))}
        <style jsx>{styles}</style>
      </tr>
    );
  }

  renderRows() {
    return this.props.users.map((item) => this.renderRow(item, columnSpec));
  }

  renderHeaderColumn = ({ header }) => {
    return (
      <td>
        {header}
        <style jsx>{styles}</style>
      </td>
    );
  };

  renderTableHeader() {
    return (
      <thead>
        <tr>{columnSpec.map((spec) => this.renderHeaderColumn(spec))}</tr>
        <style jsx>{styles}</style>
      </thead>
    );
  }

  render() {
    return (
      <Fragment>
        <table className="user-table">
          {this.renderTableHeader()}
          <tbody>{this.renderRows()}</tbody>
        </table>
        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  users: selectUsers(state),
});

const mapDispatch = {
  fetchUsers,
};

export default connect(mapState, mapDispatch)(UserTable);
