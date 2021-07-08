import React from 'react';
import './Comment.css'




const Comment = (props) => {
    const {name,email,id} =  props.comment;
    return (
        <div>

        {/* <div>
        <h1>Comments</h1>
        </div> */}

        <div className="comment">
            <h4>ID: {id}</h4>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            
        </div> 

    </div>
    );
};

export default Comment;