import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './components/UserTable/UserTable';
import AddUserModal from './components/AddUserModal/AddUserModal';
import { openAddUserModal } from './reducer/slices/ui';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { isOpenAddUserModal } = useSelector((state) => state.ui);
  return (
    <div className="App">
      <header className="App-header">
        <button
          className="add-user-button"
          onClick={() => dispatch(openAddUserModal())}
        >
          Add User
        </button>
        <style jsx>{`
          .add-user-button {
            margin-left: auto;
          }
        `}</style>
      </header>
      <div className="App-main">
        <UserTable />
        <AddUserModal isOpen={isOpenAddUserModal} />
      </div>
    </div>
  );
};

export default App;
