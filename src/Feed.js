import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputOption from './InputOption';
import DuoIcon from '@mui/icons-material/Duo';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import Post from "./Post";
import {db} from "./firebase";
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from "react-flip-move";


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    /* () => means return */


    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    },[]);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: user.displayName,
            description: user.email,
            message: input, 
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        setInput("");
    };


    return(  <div className="feed">
        <div className="feedInputContainer">
            <div className="feedInput">
                <CreateIcon/>
                <form>
                    <input value ={input} onChange ={e =>setInput(e.target.value)} placeholder = "Say Something..." type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feedInputOptions">
                <InputOption Icon = {CameraAltIcon} title ="Photo" color = "#70B5F9"/>
                <InputOption Icon = {DuoIcon} title ="Video" color = "#E7A33E"/>
                <InputOption Icon = {CalendarMonthIcon} title ="Event" color = "#C0CBCD"/>
                <InputOption Icon = {ArticleIcon} title ="Article" color = "7FC15E"/>
            </div>
        </div>

        
        <FlipMove>
        {posts.map(({ id, data : {displayName, description, message, photoUrl, timestamp} }) => ( /* Everytime there is a post on the screen, it is going to be rendered */
            <Post 
                key={id}
                displayName={displayName}
                description={description}
                message={message}
                photoUrl={photoUrl}
                timestamp= {timestamp}
            />
        ))}
        </FlipMove>
    </div>
    );
  
}

export default Feed
