import React, { Fragment, Component } from 'react';
import { users } from '../../data/users';
import styles from './UserTable.style';

const columnSpec = [
  { header: 'ID', column: 'id' },
  { header: 'Name', column: 'name' },
  { header: 'E-mail', column: 'email' },
  { header: 'Delete', column: 'delete' },
];

class UserTable extends Component {
  renderRow() {
    return (
      <tr>
        <td>id</td>
        <td>name</td>
        <td>email</td>
        <td>delete</td>
        <style jsx>{styles}</style>
      </tr>
    );
  }

  renderRows() {
    return users.map(() => this.renderRow());
  }

  renderHeaderColumn = ({ header }, index) => {
    return (
      <td key={index}>
        {header}
        <style jsx>{styles}</style>
      </td>
    );
  };

  renderTableHeader() {
    return (
      <thead>
        <tr>
          {columnSpec.map((spec, index) =>
            this.renderHeaderColumn(spec, index)
          )}
        </tr>
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

export default UserTable;
