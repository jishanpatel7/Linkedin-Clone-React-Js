import React from 'react'
import "../css/header.css"
import Image from '../images/linkedin.png';
import SearchIcon from '@mui/icons-material/Search';
import { Headeroptions } from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import firebase from 'firebase/compat/app';
import LogoutIcon from '@mui/icons-material/Logout';
export const Header = () => {

  const user = useSelector(selectUser);

  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__logo'>
          <img src={Image} alt='true' />
        </div>
        <div className='header__search'>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className='header__right'>
        <Headeroptions Icon={HomeIcon} title="Home" />
        <Headeroptions Icon={PeopleAltIcon} title="My Network" />
        <Headeroptions Icon={BusinessCenterIcon} title="Jobs" />
        <Headeroptions Icon={MessageIcon} title="Messaging" />
        <Headeroptions Icon={NotificationsIcon} title="Notifications" />
        <Headeroptions avatar={Avatar} title={user.displayName} />
        <Headeroptions Icon={LogoutIcon} title="Logout" onClick={e =>firebase.auth().signOut()}/>
      </div>
    </div>
  )
}
