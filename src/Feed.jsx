import React from 'react'
import "./css/feed.css";
import { Avatar } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import TodayIcon from '@mui/icons-material/Today';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import { Post } from './components/Post';
export const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed__input'>
                <div className='feed__form'>
                <Avatar />
                <form>
                    <input className='inputText' placeholder='Start a post' />
                    <input type="submit" />
                </form>
                </div>
           <div className='feed__options'>
                <div className="option">
                    <PhotoIcon style={{
                        color: '#70b5f9',
                    }} />
                    <span>Photo</span>
                </div>
                <div className="option">
                    <YouTubeIcon style={{
                        color: '#7fc15e',
                    }}/>
                    <span>Video</span>
                </div>
                <div className="option">
                    <TodayIcon style={{
                        color: '#e7a33e',
                    }}/>
                    <span>Event</span>
                </div>
                <div className="option">
                    <ArticleIcon style={{
                        color: '#fc9295',
                    }}/>
                    <span>Write article</span>
                </div>
            </div>
            
        </div>
        <Post name="Jishan Pathan" description="This is Test" message="Learning react js" photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGgXeaxRZUVqA/profile-displayphoto-shrink_100_100/0/1640021234235?e=1651104000&v=beta&t=0ft1WiEhi_F0i-LKlI2kveAFJmpatNjEjcTmI_murME"/>
        <Post name="Jishan Pathan" description="This is Test" message="Learning react js" photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGgXeaxRZUVqA/profile-displayphoto-shrink_100_100/0/1640021234235?e=1651104000&v=beta&t=0ft1WiEhi_F0i-LKlI2kveAFJmpatNjEjcTmI_murME"/>
        <Post name="Jishan Pathan" description="This is Test" message="Learning react js" photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGgXeaxRZUVqA/profile-displayphoto-shrink_100_100/0/1640021234235?e=1651104000&v=beta&t=0ft1WiEhi_F0i-LKlI2kveAFJmpatNjEjcTmI_murME"/>
        <Post name="Jishan Pathan" description="This is Test" message="Learning react js" photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGgXeaxRZUVqA/profile-displayphoto-shrink_100_100/0/1640021234235?e=1651104000&v=beta&t=0ft1WiEhi_F0i-LKlI2kveAFJmpatNjEjcTmI_murME"/>
      
        </div>
    )
}
