import React from 'react';
import UserTable from './components/UserTable/UserTable';
import AddUserModal from './components/AddUserModal/AddUserModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserTable />
        <AddUserModal isOpen />
      </header>
    </div>
  );
}

export default App;
