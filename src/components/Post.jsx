import React, { forwardRef } from 'react'
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../css/post.css";
import { FiSend } from 'react-icons/fi';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';

export const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div className="posts" ref={ref}>

            <div className="post__header">

                <div className="post__headerLeft">
                    <Avatar src={photoUrl} />
                    <div className="post__profile">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                </div>
                <MoreVertIcon />
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__footer">
                <div className="post__footerOptions">
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>
                <div className="post__footerOptions">
                    <InsertCommentIcon />
                    <span>Comment</span>
                </div>
                <div className="post__footerOptions">
                    <ShareIcon />
                    <span>Share</span>
                </div>
                <div className="post__footerOptions">
                    <FiSend style={{
                        fontSize: '1.3rem',
                    }} />
                    <span>Send</span>
                </div>

            </div>
        </div>
    )

}
)
