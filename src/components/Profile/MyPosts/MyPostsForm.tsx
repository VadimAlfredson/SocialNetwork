import React, {Dispatch} from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {profilePageType} from "../../../Redux/reducers/profile_reducer";
import {Formik} from "formik";
import {Box, Button, TextField} from "@mui/material";

export const MyPostsForm = React.memo((props: {
    createNewPost: (newPost: string) => void,
}) => {
    return <Formik
        initialValues={{
            newPost: '' as string
        }}
        validateOnBlur
        onSubmit={(values, {resetForm}) => {
            props.createNewPost(values.newPost)
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
            <Box display={"flex"} flexDirection={'row'} width={'100%'}
                 maxWidth={'600px'} m={'auto'} sx={{flexGrow: 1,}} mb={3}>
                <TextField
                    type={'input'}
                    name={'newPost'}
                    onChange={handleChange}
                    value={values.newPost}
                    onBlur={handleBlur}
                    color={'info'}
                    label={'Add post'}
                    id={'newPost'}
                    variant={'outlined'}
                    fullWidth={true}
                    sx={{
                        "& .MuiOutlinedInput-root":{"& > fieldset": {border: '1px solid grey'}},
                        input: {color: '#D0D3D4'}
                }}
                    InputLabelProps={{
                        sx: { color: "grey"/*, "&.Mui-focused": { color: "green" } */},
                    }}

                />
                {/*<input
                    type={'input'}
                    name={'newPost'}
                    onChange={handleChange}
                    placeholder={'Add text'}
                    className={s.createText}
                    value={values.newPost}
                    onBlur={handleBlur}
                />*/}
                <Button
                    variant={!dirty ? 'outlined' : 'contained'}
                    color={'warning'}
                    disabled={!dirty}
                    onClick={() => {handleSubmit()}}
                    type={'submit'}
                >Send
                </Button>
            </Box>
        )}

    </Formik>
})