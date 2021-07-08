import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
import "./PostDetail.css";

const PostDetail = () => {
  const { postId } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, []);

  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div className="Whole-post">
      <h1>Post Detail</h1>
      <hr />

      <div className="postDetail">
        <h3>Title: {detail.title}</h3>
        <h4>Body Details: {detail.body}</h4>
      </div>

      <div className="cmt">
        <h1>Comments</h1>
        <hr />
      </div>

      <div>
        {comment.map((comment) => (
          <Comment comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
