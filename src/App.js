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
        <UserTable />
        <AddUserModal isOpen={isOpenAddUserModal} />
      </header>
    </div>
  );
};

export default App;
