import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {loginThunkCreator} from "../../Redux/reducers/auth_reducers";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import s from './login.module.css';
import {Box, Button, FormHelperText, IconButton, InputAdornment, OutlinedInput, TextField, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";


const LoginForm: FC = (props) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const captchaURL = useAppSelector(state => state.auth.captchaURL)
    const messageError = useAppSelector(state => state.auth.messageError)
    const dispatch = useAppDispatch()

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    
    const [state, setState] = useState<string>('')
    useEffect(() => {
        state !== messageError ? setState(messageError) : console.log('useEffect')
    }, [messageError, captchaURL])
    if (isAuth) {
        return <Navigate to={"/profile/"}/>
    }

    let onTesterAccountClick = () => {
        dispatch(loginThunkCreator('free@samuraijs.com', 'free', false, ''))
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
            <Box width={{xs: '100%', sm: '300px'}}
                 display={'flex'} flexDirection={'column'} bgcolor={'#151515'}
                 m={'auto'} borderRadius={'15px'} alignItems={'center'}>
                <Typography color={'#7d1919'} mt={'15px'}>{(messageError != '' || null) && messageError}</Typography>
                <OutlinedInput
                    color={'info'}
                    error={!!(touched.email && errors.email)}
                    label={'email'}
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    sx={{mt: '15px', width: '250px'}}
                />
                {touched.email && errors.email &&
                    <FormHelperText id="outlined-weight-helper-text">
                        <Typography color={'#7d1919'}>{errors.email}</Typography>
                    </FormHelperText>}
                <OutlinedInput
                    color={'info'}
                    label={'password'}
                    error={!!(touched.password && errors.password)}
                    type={showPassword ? 'password' : 'text'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    sx={{mt: '15px', width: '250px',
                        "& .MuiOutlinedInput-root":{"& > fieldset": {border: '1px solid red'},
                            '&:hover': {boxShadow: '0 0 3px  rgba(50,125,155)',
                                backgroundColor: 'rgba(50,125,155,0.05)'}},
                        input: {color: '#D0D3D4'}
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff color={'info'}/> : <Visibility color={'info'}/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {touched.password && errors.password &&
                    <FormHelperText id="outlined-weight-helper-text">
                        <Typography color={'#7d1919'}>{errors.password}</Typography>
                    </FormHelperText>}
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
                <Box display={'flex'} flexDirection={'row'} gap={2} mb={'15px'}>
                <Button
                    variant={'outlined'}
                    color={'success'}
                    onClick={() => {
                        onTesterAccountClick()
                    }}
                    type={'submit'}
                >Test account
                </Button>
                <Button
                    variant={'outlined'}
                    color={'inherit'}
                    disabled={!isValid}
                    onClick={() => {
                        handleSubmit()
                    }}
                    type={'submit'}
                >log in
                </Button>
            </Box>
            </Box>
        )}
    </Formik>
};

export default LoginForm


/*<div>
<div>Email: free@samuraijs.com</div>
<div>Password: free</div>
</div>*/
