import React, {FC} from "react";
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
}

const LoginForm: FC<PropsType> = (props) => {

    if (props.isAuth) {
        return <Navigate to={"/profile/"}/>
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email('Incorrect email').typeError('Incorrect email').required('required to fill out'),
        password: yup.string().typeError('Incorrect password').required('required to fill out'),
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
                />{touched.email && errors.email && <p>{errors.email}</p>}<br/>
                <input
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder={'password'}
                /><br/>
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
                    className={s.buttonLogin}
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
