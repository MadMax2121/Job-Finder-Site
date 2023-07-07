import React, { useState } from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HeaderOption from './HeaderOption';
import Dropdown from './Dropdown';


function Header() {




  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className='header'>
        <div className="headerLeft">
            <img src="https://i.postimg.cc/cH1Lw0CY/Logo.png" alt="" />
            
            <div className="headerSearch">
                <SearchIcon />
                <input placeholder = "Search" type="text"/>
            </div>
        </div>
        
    
        <div className="headerRight">
            {
              openProfile && (
                <Dropdown/>
              )
            }
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisedUserCircleIcon} title='My Network'/>
            <HeaderOption Icon={WorkIcon} title = 'Jobs' />
            <HeaderOption Icon={EmailIcon} title = 'Messages' />
            <HeaderOption Icon={NotificationsActiveIcon} title = 'Notifications' />
            
            <HeaderOption avatar={true} title = "Me" onClick = {() => setOpenProfile((prev) => !prev)}/>

        </div>
    </div>
  )
}

export default Header
