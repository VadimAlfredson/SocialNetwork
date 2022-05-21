import React from 'react'
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'

const MyPosts = () => {
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
                <Post message='Hi, how are you?' like='23'/>
                <Post message='My first post!' like='14'/>
            </div>
        </div>
    )
}

export default MyPosts