import React, { useEffect } from 'react'
import "./css/feed.css";
import { Avatar } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import TodayIcon from '@mui/icons-material/Today';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import { Post } from './components/Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


export const Feed = () => {
    const [input, setInput] = React.useState('');
    const [posts, setPosts] = React.useState([]);
    const user = useSelector(selectUser)
    const submitPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: "this is a test post",
            message: input,
            photoUrl: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          
            setPosts(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            }))
        })

    }, [])

    return (
        <div className='feed'>
            <div className='feed__input'>
                <div className='feed__form'>
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input className='inputText' placeholder='Start a post' value={input} onChange={e => setInput(e.target.value)} />
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
                        }} />
                        <span>Video</span>
                    </div>
                    <div className="option">
                        <TodayIcon style={{
                            color: '#e7a33e',
                        }} />
                        <span>Event</span>
                    </div>
                    <div className="option">
                        <ArticleIcon style={{
                            color: '#fc9295',
                        }} />
                        <span>Write article</span>
                    </div>
                </div>

            </div>
            <FlipMove>
            {
                posts.map(({ id, data: { message, name, description, photoUrl } }) => (
                    <Post key={id} message={message} name={name} description={description} photoUrl={photoUrl} />
                ))
            }
            </FlipMove>



        </div>
    )
}
