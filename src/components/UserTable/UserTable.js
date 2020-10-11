import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import {
  selectSorting,
  selectUsers,
  fetchUsers,
} from '../../reducer/slices/users';
import getFilterAndSorted from '../../utils/getFilteredAndSorted';
import styles from './UserTable.style';

const columnSpec = [
  { header: 'ID', column: 'id' },
  { header: 'Name', column: 'username' },
  { header: 'E-mail', column: 'email' },
  {
    header: 'Delete',
    column: 'delete',
    util: (item) => <DeleteButton item={item} />,
  },
];

class UserTable extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderColumn(item, { column, util }, index) {
    return (
      <td key={index}>
        {util ? util(item) : item[column]}
        <style jsx>{styles}</style>
      </td>
    );
  }

  renderRow(item, columnSpec, index) {
    return (
      <tr key={index}>
        {columnSpec.map((spec, i) => this.renderColumn(item, spec, i))}
        <style jsx>{styles}</style>
      </tr>
    );
  }

  renderRows() {
    const { users, sortBy } = this.props;
    const data = getFilterAndSorted(users, sortBy);

    return data.map((item, index) => this.renderRow(item, columnSpec, index));
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

const mapState = (state) => ({
  users: selectUsers(state),
  sortBy: selectSorting(state),
});

const mapDispatch = {
  fetchUsers,
};

export default connect(mapState, mapDispatch)(UserTable);
