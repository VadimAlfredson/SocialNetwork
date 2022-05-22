import React from 'react'
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'
import App from "../../../App";

const MyPosts = (props) => {
    let Posts = props.postData.map(
        p => <Post message={p.message} like={p.likeCount} />
    )

    return (
        <div>
            <div>New post
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {Posts}
            </div>
        </div>
    )
}

export default MyPosts