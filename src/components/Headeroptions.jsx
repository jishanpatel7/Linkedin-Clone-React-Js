import React from 'react';
import "../css/header.css";
import { Avatar } from '@mui/material'
export const Headeroptions = ({Icon, title, avatar}) => {
  return (
    <div className='header__options'>
{
    Icon && <Icon/>

}
{
    avatar && <Avatar name={avatar}/>
}
<span>{title}</span>
    </div>
  )
}
