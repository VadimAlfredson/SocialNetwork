import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth_reducers";


const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string().typeError('Incorrect email').required('required to fill out')
    })
    return <Formik
        initialValues={{
            email: '',
            password: '',
            checkbox: false,
        }}
        validateOnBlur
        onSubmit={(values => {
            console.log(values)
            props.loginThunkCreator(values.email, values.password, values.checkbox)
        })}
        validationSchema={validationSchema}
    >
        {({
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
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={'email'}
                /><br/>
                <input
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder={'password'}
                /><br/>
                <input
                    type={'checkbox'}
                    name={'checkbox'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.checkbox}
                /><br/>
                <button
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={'submit'}
                >login
                </button>
            </div>
        )}
    </Formik>
};


export default connect(null, {loginThunkCreator})(LoginForm)
