import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebarRecentItem">
            <span className="sidebarHash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
        <div className="sidebarTop">
           <img src="https://i.postimg.cc/dDMQGfnr/pexels-dana-tentis-370799.jpg" alt="" />
           <Avatar src={user.photoUrl} className='sidebarAvatar'/> 
           <h2>{user.displayName}</h2>
           <h4>{user.email}</h4>
        </div>

        <div className="sidebarStats">
            <div className="sidebarSubstat">
                <p>Who viewed you: </p>
                <p className='sidebarSubstatNumber'>Over 9,000</p>
            </div>
            <div className="sidebarSubstat">
                <p>Views on post: </p>
                <p className='sidebarSubstatNumber'>7843</p>
            </div>
        </div>
        <div className="sidebarBottom">
                <p>Recent</p>
                {recentItem('Computer Science')}
                {recentItem('Software Engineering')}
                {recentItem('Internship Opportunities')}
                {recentItem('Coding Boot Camps')}
                {recentItem('Learn ReactJS')}
            </div>
    </div>
  );
}

export default Sidebar
