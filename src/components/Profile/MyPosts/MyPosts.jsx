import React from 'react'
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/profile_reducer";


const MyPosts = (props) => {
    let Posts = props.posts.map(
        p => <Post message={p.message} like={p.likeCount}/>
    );

    let newPostElement = React.createRef();

    let createNewPost = () =>
    {
        props.dispatch(AddPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(UpdatePostTextActionCreator(text));
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
                {Posts}
            </div>
        </div>
    )
}

export default MyPosts