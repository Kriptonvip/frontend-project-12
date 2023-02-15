import React from 'react';
import { useSelector } from 'react-redux';
import AddChannel from './AddChannel';
import RemoveChannel from './RemoveChannel';
import RenameChannel from './RenameChannel';

function ModalWindow() {
  const { modalType } = useSelector((state) => state.modalReducer);
    console.log('Modal window rendered', modalType)
  switch (modalType) {
    case 'AddChannel':
        console.log('Case AddChannel fire!Q')
        return <AddChannel/>
    case 'RemoveChannel':
        return <RemoveChannel/>
    case 'RenameChannel':
        return <RenameChannel/>

    default:
        return null;
  }
}

export default ModalWindow;
