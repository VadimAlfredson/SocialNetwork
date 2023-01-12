import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import s from './login.module.css';

type PropsType = {
    onUsersChange: (pageNumber: number, pageSize: number, term: string, friends: boolean) => void
    pageSize: number
}

const FormSearchUsers: FC<PropsType> = (props) => {
    const validationSchema = yup.object().shape({
        search: yup.string().required('Required'),
    })

    return <Formik
        initialValues={{
            search: '',
            subscriptionsCheckbox: false,
        }}
        validateOnBlur
        onSubmit={(values => {
            console.log(values)
            debugger
            props.onUsersChange(1, props.pageSize, values.search, values.subscriptionsCheckbox)
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
                <div ></div>
                <input
                    className={''}
                    type={'text'}
                    name={'search'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.search}
                    placeholder={'search'}
                />
                <div className={''}>
                    <div className={''}>
                        <input
                            type={'checkbox'}
                            name={'subscriptionsCheckbox'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <button
                    className={''}
                    disabled={!isValid && !dirty}
                    onClick={() => {
                        handleSubmit()
                    }}
                    type={'submit'}
                >Search
                </button>
            </div>
        )}
    </Formik>
};

export default FormSearchUsers
