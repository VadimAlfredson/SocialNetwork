import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import {connect} from "react-redux";
import {ProfileThunkCreator, userProfileThunkCreator,} from "../../Redux/profile_reducer";
import s from "./Setting.module.css"
import {AddStateType} from "../../Redux/reduxStore";
import * as yup from "yup";

const ProfileInfoForm: FC<any> = (props) => {
    let [initialValue, setInitialValue] = useState(props.profile)

    /*const validationSchema = yup.object().shape({
        email: yup.string().typeError('Incorrect email').required('required to fill out')
    })*/

    return <Formik
        enableReinitialize={true}
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
                    className={s.itemFormInput}
                    type={'text'}
                    name={'fullName'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={true}
                    value={values.fullName || props.profile.fullName || ''}
                /><br/>
                <b>Looking for a job:</b>
                <input
                    type={'checkbox'}
                    name={'lookingForAJob'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /><br/>
                <b>Looking for a job description:</b>
                <input
                    className={s.itemFormInput}
                    type={'text'}
                    name={'lookingForAJobDescription'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lookingForAJobDescription || ''}
                    disabled={!values.lookingForAJob}
                /><br/>
                <b>About Me:</b>
                <input
                    className={s.itemFormInput}
                    type={'text'}
                    name={'aboutMe'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.aboutMe || ''}
                /><br/>
                <b>contacts:</b><br/>
                <b>github:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.github'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.github || ''}
            /><br/>
                <b>vk:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.vk'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.vk || ''}
            /><br/>
                <b>facebook:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.facebook'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.facebook || ''}
            /><br/>
                <b>instagram:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.instagram'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.instagram || ''}
            /><br/>
                <b>twitter:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.twitter'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.twitter || ''}
            /><br/>
                <b>website:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.website'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.website || ''}
            /><br/>
                <b>youtube:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.youtube'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.youtube || ''}
            /><br/>
                <b>mainLink:</b><input
                className={s.itemFormInput}
                type={'text'}
                name={'contacts.mainLink'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts.mainLink || ''}
            /><br/>
                <button
                    disabled={!isValid && !dirty}
                    onClick={() => {
                        handleSubmit()
                    }}
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