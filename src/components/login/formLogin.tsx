import React, {FC} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth_reducers";
import {Navigate} from "react-router-dom";
import {AddStateType} from "../../Redux/reduxStore";

type PropsType = {
    isAuth: boolean
    loginThunkCreator: (email: string, password: string, checkbox: boolean, captcha: string) => void
    captchaURL: null | string
}

const LoginForm: FC<PropsType> = (props) => {

    if (props.isAuth) {
        return <Navigate to={"/profile/"}/>
    }

    const validationSchema = yup.object().shape({
        email: yup.string().typeError('Incorrect email').required('required to fill out')
    })
    return <Formik
        initialValues={{
            email: '',
            password: '',
            checkbox: false,
            captcha: '',
        }}
        validateOnBlur
        onSubmit={(values => {
            console.log(values)
            props.loginThunkCreator(values.email, values.password, values.checkbox, values.captcha)
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
                    /*value={values.checkbox}*/
                /><br/>

                {props.captchaURL &&
                <div>
                    <img src={props.captchaURL}/>
                <input
                    type={'text'}
                    name={'captcha'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.captcha}
                /><br/>
                </div>
                }
                <button
                    disabled={!isValid && !dirty}
                    onClick={() => {
                        handleSubmit()
                    }}
                    type={'submit'}
                >login
                </button>
            </div>
        )}
    </Formik>
};

const mapStateToProps = (state: AddStateType) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

export default connect(mapStateToProps, {loginThunkCreator})(LoginForm)
