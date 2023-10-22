import React from 'react'
import './Dropdown.css'
import { useDispatch} from 'react-redux';
import { logout} from './features/counter/userSlice';
import { auth } from './firebase';
import { FC } from 'react';


//interface DropdownProps {
 //age: number;
  //name: string; //?: can mean optional
//}


// This enforces types for your react props, FC is function component
//const Dropdown:FC<DropdownProps> = (props) => { return <>{props.name}</>}
//<Dropdown age={23} name = "name"/>

function Dropdown() {
  const dispatch = useDispatch();
  
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  /*const listItems = ["setting", "profile", "item3", "logout"].map((value: string, index: number) => {
    return (
      <li onClick={index === 0 ? logoutOfApp() : console.log("lol")}>{value}</li>
    )
  });*/

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
