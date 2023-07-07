import React from 'react'
import './Dropdown.css'
import { useDispatch} from 'react-redux';
import { logout} from './features/counter/userSlice';
import { auth } from './firebase';

function Dropdown(){
  const dispatch = useDispatch();
  
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className = "flex flex-col dropdown">
      <ul className = 'flex flex-col gap-4'>
        <li>Profile</li>
        <li>Settings</li>
        <li onClick = {logoutOfApp}> Logout</li>
      </ul>
    </div>
  )
}

export default Dropdown
