import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import './Post.css'
const Post = (props) => {
    const {id,title} = props.post;

    // const handleClick = () => {
    //     // console.log("clicked");
    // }

    
    return (
        <div className="postStyle">
            <h3>Title: {title}</h3>
            <h4>Post ID: {id}</h4>
            {/* <Button onClick={handleClick} variant="contained" color="primary">See More</Button> */}
            <Link to={`/post/${id}`}><Button  variant="contained" color="primary">See More</Button> </Link>

        </div>
    );
};

export default Post;