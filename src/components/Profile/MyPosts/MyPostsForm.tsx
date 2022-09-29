import React, {Dispatch} from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {profilePageType} from "../../../Redux/profile_reducer";
import {Formik} from "formik";

export const MyPostsForm = (props: {
    profilePage: profilePageType,
    createNewPost: Dispatch<string>,
}) => {
    return <Formik
        initialValues={{
            newPost: '' as string
        }}
        validateOnBlur
        onSubmit={(values, {resetForm}) => {
            props.createNewPost(values.newPost)
            console.log(values.newPost)
            resetForm({values: undefined})
        }}
    >
        {({
              values,
              handleBlur,
              handleChange,
              isValid,
              handleSubmit,
              dirty
          }) => (
            <div /*className={s.addpost}*/>
                <input
                    type={'input'}
                    name={'newPost'}
                    onChange={handleChange}
                    placeholder={'Add text'}
                    className={s.createText}
                    value={values.newPost}
                    onBlur={handleBlur}
                />
                <button
                    className={s.buttonAddPost}
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={'submit'}
                >Add post
                </button>
            </div>
        )}

    </Formik>
}