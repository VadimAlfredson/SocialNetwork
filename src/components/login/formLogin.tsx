import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/reducers/auth_reducers";
import {Navigate} from "react-router-dom";
import {RootState, useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import s from './login.module.css';


const LoginForm: FC = (props) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const captchaURL = useAppSelector(state => state.auth.captchaURL)
    const messageError = useAppSelector(state => state.auth.messageError)
    const dispatch = useAppDispatch()
    
    const [state, setState] = useState<string>('')
    useEffect(() => {
        state != messageError ? setState(messageError) : console.log('useEffect')
    }, [messageError, captchaURL])
    if (isAuth) {
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
            debugger
            console.log(values)
            dispatch(loginThunkCreator(values.email, values.password, values.checkbox, values.captcha))
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
                <div className={s.messageError}>{(messageError != '' || null) && messageError}</div>
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
                {captchaURL &&
                    <div className={captchaURL && s.displayNone}>
                        <img className={s.imgCaptcha} src={captchaURL}/>
                        <input
                            /*className={touched.captcha && errors.captcha ? s.errorsInput : s.inputLogin}*/
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

export default LoginForm
