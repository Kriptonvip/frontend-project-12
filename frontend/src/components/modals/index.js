import React from 'react';
import { useSelector } from 'react-redux';
import AddChannel from './AddChannel';
import RemoveChannel from './RemoveChannel';
import RenameChannel from './RenameChannel';

function ModalWindow() {
  const { modalType, id, name, isOpen } = useSelector((state) => state.modalReducer);
  switch (modalType) {
    case 'AddChannel':
        console.log('Case AddChannel fire!Q')
        return <AddChannel show={isOpen} id= {id}/>
    case 'RemoveChannel':
        return <RemoveChannel show={isOpen} id= {id}/>
    case 'RenameChannel':
        return <RenameChannel show={isOpen} id= {id} name={name}/>

    default:
        return null;
  }
}

export default ModalWindow;
