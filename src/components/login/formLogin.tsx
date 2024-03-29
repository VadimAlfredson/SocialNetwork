import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {loginThunkCreator} from "../../Redux/reducers/auth_reducers";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import s from './login.module.css';
import {
    Box,
    Button, Checkbox,
    FormHelperText,
    IconButton,
    InputAdornment,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {theme} from "../../MUI/theme";


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
                <TextField
                    color={'info'}
                    error={!!(touched.email && errors.email)}
                    label={'email'}
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    sx={{
                        m: '15px 15px 0 15px',
                        width: '250px',
                        color: theme.palette.info.main,
                        ".MuiOutlinedInput-root":
                            {
                                "fieldset": {
                                    borderColor: theme.palette.info.main,
                                },
                            },
                        ".MuiOutlinedInput-root:hover":
                            {
                                "fieldset": {
                                    backgroundColor: 'rgba(50,125,155,0.05)',
                                    borderColor: !!(touched.email && errors.email) ? theme.palette.error.main : theme.palette.info.main
                                },
                            },
                        ".MuiInputLabel-root": {
                            color: theme.palette.secondary.main
                        },
                        ".Mui-focused": {
                            color: !!(touched.email && errors.email) ? theme.palette.error.main : theme.palette.info.main
                        },
                        input: {color: !!(touched.email && errors.email) ? theme.palette.error.main : theme.palette.success.main},
                    }}
                />
                {touched.email && errors.email &&
                    <FormHelperText id="outlined-weight-helper-text">
                        <Typography color={'#7d1919'} >{errors.email}</Typography>
                    </FormHelperText>}
                <TextField
                    color={'info'}
                    label={'password'}
                    error={!!(touched.password && errors.password)}
                    type={!showPassword ? 'password' : 'text'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    sx={{
                        m: '15px 15px 0 15px',
                        width: '250px',
                        color: theme.palette.info.main,
                        ".MuiOutlinedInput-root":
                            {
                                "fieldset": {
                                    borderColor: theme.palette.info.main,
                                },
                            },
                        ".MuiOutlinedInput-root:hover":
                            {
                                "fieldset": {
                                    backgroundColor: 'rgba(50,125,155,0.05)',
                                    borderColor: !!(touched.email && errors.email) ? theme.palette.error.main : theme.palette.info.main
                                },
                            },
                        ".MuiInputLabel-root": {
                            color: theme.palette.secondary.main
                        },
                        ".Mui-focused": {
                            color: !!(touched.email && errors.email) ? theme.palette.error.main : theme.palette.info.main
                        },
                        input: {color: !!(touched.email && errors.email) ? theme.palette.error.main : theme.palette.success.main},
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {!showPassword ? <VisibilityOff color={'info'}/> : <Visibility color={'info'}/>}
                            </IconButton>
                        </InputAdornment>
                    }}

                />
                {touched.password && errors.password &&
                    <FormHelperText id="outlined-weight-helper-text">
                        <Typography color={'#7d1919'}>{errors.password}</Typography>
                    </FormHelperText>}
                <div className={s.checkboxBlock}>
                    <div className={s.checkbox}>
                        <Checkbox
                            name={'checkbox'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.checkbox}
                            sx={{color: theme.palette.success.main,
                                '&.Mui-checked': {color: theme.palette.success.main}
                            }}
                        />
                    </div>
                </div>
                <br/>
                {captchaURL &&
                    <div className={captchaURL && s.displayNone}>
                        <img className={s.imgCaptcha} src={captchaURL}/>
                        <input
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
                        color={'success'}
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