import React, { useEffect, useState } from 'react';

import './App.css';
import UserList from "./../components/userList";
import EditModal from "./../components/EditModal";
import UserService from "./../services/UserService";

function App() {
  const [modalData, setModalData] = useState({ modalIsOpen: false, user: null });
  const [list, setList] = useState([]);

  const getUsers = async () => {
    await UserService.users()
    .then(({ users }) => { setList(users); })
    .catch((e) => { alert(JSON.stringify(e)) })
  };

  const handleDelete = (_id) => {
    UserService.deleteUser({ _id })
      .then(() => { 
        getUsers(); 
      })
  }
  const handleEdit = (user) => {
    setModalData({ modalIsOpen: true, user })
  }

  const handleCloseModal = ({ isSaved = false, formVal }) => {
    if (!isSaved) setModalData({ modalIsOpen: false, user: null });
    else {
      UserService.updateUser(formVal)
      .then(async () => {
        await getUsers();
        setModalData({ modalIsOpen: false, user: null });
      });

    }
  }

  useEffect(() => { getUsers() }, []);

  return (
    <div className="App">
      <UserList 
        data={list} 
        onPressDelete={handleDelete} 
        onPressEdit={handleEdit}
      />

      <EditModal modalData={modalData} closeModal={handleCloseModal}/>
    </div>
  );
}

export default App;
