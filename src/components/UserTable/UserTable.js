import React, { Fragment, Component } from 'react';
import { users } from '../../data/users';
import styles from './UserTable.style';

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

  renderTableHeader() {
    return (
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>delete</td>
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
