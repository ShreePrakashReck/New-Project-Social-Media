import React from "react";
import Avatar from "../avatar/Avatar";
import "./Post.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { likeAndUnlikePost } from "../../redux/slices/postsSlice";
import { TOAST_SUCCESS } from "../../App";
import { showToast } from "../../redux/slices/appConfigSlice";
function Post({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handlePostLiked() {
    dispatch(
      showToast({
        type: TOAST_SUCCESS,
        message: "like or unliked",
      })
    );
    dispatch(
      likeAndUnlikePost({
        postId: post._id,
      })
    );
  }
  return (
    <div className="Post">
      <div
        className="heading"
        onClick={() => navigate(`/profile/${post.owner._id}`)}
      >
        <Avatar src={post.owner?.avatar?.url} />
        <h4>{post.owner?.name}</h4>
      </div>
      <div className="content">
        <img src={post?.image?.url} alt="" />
      </div>
      <div className="footer">
        <div className="like" onClick={handlePostLiked}>
          {post.isLiked ? (
            <AiFillHeart className="icon" style={{ color: "red" }} />
          ) : (
            <AiOutlineHeart className="icon" />
          )}
          <h4>{`${post.likesCount} likes`}</h4>
        </div>
        <p className="caption">{post.caption}</p>
        <h6 className="time-age">{post?.timeAgo}</h6>
      </div>
    </div>
  );
}

//src={post.owner.url}
export default Post;
