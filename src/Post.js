import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';
import {formatRelative} from 'date-fns';



const Post = forwardRef(({ displayName, description, message, photoUrl, timestamp}, ref) => {
    
    
    
  return (
    <div ref = {ref} className="post">
        <div className="postHeader">
            <Avatar src={photoUrl}/> 
            <div className="postInfo">
                <div className = "postTop">
                    <h2>{displayName}</h2>

                    {timestamp?.seconds ? (
                        <span>
                            {formatRelative(new Date(timestamp.seconds * 1000), new Date())}
                        </span>
                    ) : null}
                </div>
                
    
                <p>{description}</p>
            </div>
        </div>
            <div className="postBody">
                <p>{message}</p>
            </div>

            <div className="postButtons">
                <InputOption className="like_button" Icon={ThumbUpIcon} title="Like" color ="grey"/>
                <InputOption Icon={CommentIcon} title="Comment" color ="grey"/>
                <InputOption Icon={ShareIcon} title="Share" color ="grey"/>
                <InputOption Icon={SendIcon} title="Send" color ="grey"/>
            </div>
      </div>
    
  )
})

export default Post
