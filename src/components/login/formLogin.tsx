import React from "react";
import {Formik} from "formik";
import * as yup from "yup";


export const LoginForm = () => {
    const validationSchema = yup.object().shape({
        email: yup.string().typeError('Incorrect email').required('required to fill out')
    })
    return <Formik
        initialValues={{
            email: '',
            password: '',
            checkbox: '',
        }}
        validateOnBlur
        onSubmit={(values => {
            console.log(values)
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
