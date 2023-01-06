import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth_reducers";
import {Navigate} from "react-router-dom";
import {AddStateType} from "../../Redux/reduxStore";
import s from './login.module.css';

type PropsType = {
    isAuth: boolean
    loginThunkCreator: (email: string, password: string, checkbox: boolean, captcha: string) => void
    captchaURL: null | string
    messageError: string
}

const LoginForm: FC<PropsType> = (props) => {
    const [state, setState] = useState<string>('')
    useEffect(() => {state != props.messageError ? setState(props.messageError) : console.log('useEffect update')}, [props.messageError, props.captchaURL])
    if (props.isAuth) {
        return <Navigate to={"/profile/"}/>
    }

    const validationSchema = yup.object().shape({
        email: yup.string().required('Required').email('Invalid email').typeError('Invalid email'),
        password: yup.string().required('Required')
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
                <div className={s.messageError}>{(props.messageError != '') && props.messageError}</div>
                <input
                    className={touched.email && errors.email ? s.errorsInput : s.inputLogin}
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={'email'}
                />{touched.email && errors.email && <p className={s.errors}>{errors.email}</p>}<br/>
                <input
                    className={(touched.password && errors.password) ? s.errorsInput : s.inputLogin}
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder={'password'}
                />{touched.password && errors.password && <p className={s.errors}>{errors.password}</p>}<br/>
                <div className={s.checkboxBlock}>
                    <div className={s.checkbox}>
                        <input
                            type={'checkbox'}
                            name={'checkbox'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            /*value={values.checkbox}*/
                        />
                    </div>
                </div>
                <br/>
                {props.captchaURL &&
                    <div>
                        <img className={s.imgCaptcha} src={props.captchaURL}/>
                        <input
                            className={touched.captcha && errors.captcha ? s.errorsInput : s.inputLogin}
                            type={'text'}
                            name={'captcha'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.captcha}
                        /><br/>
                    </div>
                }
                <button
                    className={(touched.email && !errors.email && touched.password && !errors.password) ? s.buttonLogin : s.buttonDisable}
                    disabled={!isValid && !dirty}
                    onClick={() => {
                        handleSubmit()
                    }}
                    type={'submit'}
                >log in
                </button>
            </div>
        )}
    </Formik>
};

const mapStateToProps = (state: AddStateType) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
    messageError:  state.auth.messageError,
})

export default connect(mapStateToProps, {loginThunkCreator})(LoginForm)
