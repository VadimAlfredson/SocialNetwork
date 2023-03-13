import React, {FC, useEffect, useState} from "react";
import {Field, Formik, FormikProps} from "formik";
import {connect} from "react-redux";
import {
    ProfileThunkCreator,
    userProfileThunkCreator,
} from "../../Redux/reducers/profile_reducer";
import s from "./Setting.module.css"
import {RootState, useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {getProfile} from "../../Redux/selectors/profile_selectors";


const ProfileInfoForm: React.FC<{}> = () => {
    const profile = useAppSelector(getProfile)
    const dispatch = useAppDispatch()
    let [disabledSave, setDisabledSave] = useState(true)


    /*const validationSchema = yup.object().shape({
        email: yup.string().typeError('Incorrect email').required('required to fill out')
    })*/

    return <Formik
        enableReinitialize={true}
        initialValues={{
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: profile.contacts,
        }}
        validateOnBlur
        onSubmit={(values => {
            dispatch(ProfileThunkCreator(values))
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
                    value={values.fullName || profile.fullName || ''}
                /><br/>
                <b>Looking for a job:</b>
                <input
                    type={'checkbox'}
                    name={'lookingForAJob'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lookingForAJob ? ["lookingForAJob"] : []}
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
                    disabled={!dirty}
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

const mapStateToProps = (state: RootState) => ({})

export default connect(mapStateToProps, {ProfileThunkCreator, userProfileThunkCreator})(ProfileInfoForm)