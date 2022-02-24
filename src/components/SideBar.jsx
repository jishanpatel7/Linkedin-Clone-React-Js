import React from 'react'
import "../css/sidebar.css";
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
export const SideBar = () => {
    const user = useSelector(selectUser)
    return (
        <div className='sidebar'>
            <div className='sidebar__profile'>
                <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" />
                <div className='profile__details'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                    <p>Software Engineer</p>
                </div>

                <div className='profile__stats'>
                    <span>Who viewed your profile</span>
                    <span className='stat__number'>20</span>
                </div>
                <div className='profile__stats'>
                    <span>Connection <br /> <b>
                        Grow your Network
                    </b></span>
                    <span className='stat__number'>150</span>
                </div>

            </div>
            <div className='sidebar__recent'>
                <p className='highlight'>Recent</p>
                <p className='hash'><span>#</span>branding</p>
                <p className='hash'><span>#</span>Webdevelopment</p>
                <p className='hash'><span>#</span>marketing</p>
                <p className='hash'><span>#</span>jobs</p>
                <p className='hash'><span>#</span>motivation</p>
                <p className='hash'><span>#</span>technology</p>
                 <p className='highlight'>Groups</p>
                 <p className='hash'><span></span>Frontend Developer Group</p>
                  <p className='highlight'>See all</p>

            </div>
        </div>
    )
}
