import React from 'react';
import { useSelector } from 'react-redux';
import AddUserButton from './components/AddUserButton/AddUserButton';
import AddUserModal from './components/AddUserModal/AddUserModal';
import SortMenu from './components/SortMenu/SortMenu';
import UserTable from './components/UserTable/UserTable';
import './App.css';

const App = () => {
  const { isOpenAddUserModal } = useSelector((state) => state.ui);
  return (
    <div className="App">
      <header className="App-header">
        <SortMenu />
        <AddUserButton />
      </header>
      <div className="App-main">
        <UserTable />
        <AddUserModal isOpen={isOpenAddUserModal} />
      </div>
    </div>
  );
};

export default App;
