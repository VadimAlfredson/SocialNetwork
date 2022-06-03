import React from 'react'
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    let Posts = props.posts.map(
        p => <Post message={p.message} like={p.likeCount}/>
    );

    let newPostElement = React.createRef();

    let createNewPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-POST-TEXT', newText: text});
    }
    return (
        <div>
            <div>New post
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