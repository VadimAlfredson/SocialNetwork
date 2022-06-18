import React from 'react'
import Post from './Post/Post.tsx'
import s from './MyPosts.module.css'
import {AddPostActionCreator, UpdatePostTextActionCreator} from "./MyPostsContainer";

const MyPosts = (props) => {
    let postElements = props.posts.map(
        (p) => <Post message={p.message} like={p.likeCount}  key={p.id}/>
    );

    let newPostElement = React.createRef();

    let createNewPost = () =>
    {
        props.createNewPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={s.addpost}>
                <div>
                    <textarea onChange={onPostChange}
                              placeholder='Add text'
                              className={s.createText}
                              ref={newPostElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button className={s.buttonAddPost} onClick={createNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts