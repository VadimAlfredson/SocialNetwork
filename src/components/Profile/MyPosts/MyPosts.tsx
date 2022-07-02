import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {profilePageType} from "../../../Redux/profile_reducer";

const MyPosts = (props: {profilePage: profilePageType, createNewPost: () => void, updateNewPostText: (text: string) => void}) => {
    let postElements = props.profilePage.posts.map(
        (p) => <Post message={p.message} likeCount={p.likeCount}  key={p.id}/>
    );

    let newPostElement: React.RefObject<any> = React.createRef();

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
                              value={props.profilePage.newPostText}
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