import React from 'react';
import "../css/header.css";
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';

import { selectUser } from '../features/userSlice';
export const Headeroptions = ({Icon, title, avatar}) => {
  const user = useSelector(selectUser)
  return (
    <div className='header__options'>
{
    Icon && <Icon/>

}
{
    avatar && <Avatar name={avatar} src={user.photoURL} onClick={e =>firebase.auth().signOut()}  />
}

<span>{title}</span>
    </div>
  )
}

//onClick={e =>firebase.auth().signOut()}