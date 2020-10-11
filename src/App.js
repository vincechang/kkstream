import React from 'react';
import { useSelector } from 'react-redux';
import UserTable from './components/UserTable/UserTable';
import AddUserModal from './components/AddUserModal/AddUserModal';
import './App.css';

const App = () => {
  const { isOpenAddUserModal } = useSelector((state) => state.ui);
  return (
    <div className="App">
      <header className="App-header">
        <button className="add-user-button">Add User</button>
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
