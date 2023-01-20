import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {AddStateType} from "../../../Redux/reduxStore";
import {ProfileThunkCreator, userProfileThunkCreator} from "../../../Redux/profile_reducer";
const ProfileInfoForm: FC<any> = (props) => {
    console.log(props.ownerId, props.profile.userId)
    useEffect(() => {
        if (props.ownerId != props.profile.userId){props.userProfileThunkCreator(props.ownerId)}
    })
    /*const validationSchema = yup.object().shape({
        email: yup.string().typeError('Incorrect email').required('required to fill out')
    })*/
    return <Formik
        enableReinitialize={true}
        /*initialValues={{
            lookingForAJob: false,
            lookingForAJobDescription: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: ''
            }
        }}*/
        initialValues={{
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            aboutMe: props.profile.aboutMe,
            contacts: props.profile.contacts,
        }}
        validateOnBlur
        onSubmit={(values => {
            console.log(values)
            console.log(props.profile)
            props.ProfileThunkCreator(values)
            props.editModeOnOff(false)
        })}
        /*validationSchema={validationSchema}*/
    >
        {({
              enableReinitialize,
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              isValid,
              handleSubmit,
              dirty
          }) => (
            <div>
                <input
                type={'text'}
                name={'fullName'}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
                value={values.fullName || props.profile.fullName || ''}
            /><br/>
                <b>Looking for a job:</b><input
                type={'checkbox'}
                name={'lookingForAJob'}
                onChange={handleChange}
                onBlur={handleBlur}
            /><br/>
                <b>Looking for a job description:</b><input
                type={'text'}
                name={'lookingForAJobDescription'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription || ''}
                disabled={!values.lookingForAJob}
            /><br/>
                <b>About Me:</b><input
                type={'text'}
                name={'aboutMe'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutMe || ''}
            /><br/>
                <b>contacts:</b><br/>
                <b>github:</b><input
                type={'text'}
                name={'contacts.github'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.github || ''}
            /><br/>
                <b>vk:</b><input
                type={'text'}
                name={'contacts.vk'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.vk || ''}
            /><br/>
                <b>facebook:</b><input
                type={'text'}
                name={'contacts.facebook'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.facebook || ''}
            /><br/>
                <b>instagram:</b><input
                type={'text'}
                name={'contacts.instagram'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.instagram || ''}
            /><br/>
                <b>twitter:</b><input
                type={'text'}
                name={'contacts.twitter'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.twitter || ''}
            /><br/>
                <b>website:</b><input
                type={'text'}
                name={'contacts.website'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.website || ''}
            /><br/>
                <b>youtube:</b><input
                type={'text'}
                name={'contacts.youtube'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.youtube || ''}
            /><br/>
                <b>mainLink:</b><input
                type={'text'}
                name={'contacts.mainLink'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.mainLink || ''}
            /><br/>
                <button
                    disabled={!isValid && !dirty}
                    onClick={() => {handleSubmit()}}
                    type={'submit'}
                >Save
                </button>
            </div>
        )}
    </Formik>
};

const mapStateToProps = (state: AddStateType) => ({
    isAuth: state.auth.isAuth,
    ownerId: state.auth.userId,
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {ProfileThunkCreator, userProfileThunkCreator})(ProfileInfoForm)