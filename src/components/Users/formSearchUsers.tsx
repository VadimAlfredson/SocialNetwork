import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import s from './users.module.css';
import {useAppSelector} from "../../Redux/reduxStore";

type PropsType = {
    onUsersChange: (pageNumber: number, pageSize: number, term: string, friends: boolean) => void
}

const FormSearchUsers: FC<PropsType> = (props) => {
    const pageSize =  useAppSelector(state => state.users.pageSize)
    const validationSchema = yup.object().shape({
        search: yup.string(),
    })

    return <Formik
        initialValues={{
            search: '',
            subscriptionsCheckbox: false,
        }}
        validateOnBlur
        onSubmit={(values => {
            console.log(values)
            props.onUsersChange(1, pageSize, values.search, values.subscriptionsCheckbox)
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
            <div className={s.formSearchBlock}>
                <input
                    className={s.searchInput}
                    type={'text'}
                    name={'search'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.search}
                    placeholder={'text'}
                />
                <button
                    className={s.searchButton}
                    /*disabled={!isValid}*/
                    onClick={() => {
                        handleSubmit()
                    }}
                    type={'submit'}
                >Search
                </button>
                <div className={s.searchCheckbox}>
                    <div className={''}>
                        <input
                            type={'checkbox'}
                            name={'subscriptionsCheckbox'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className={s.searchText}>Only subscriptions</div>
            </div>
        )}
    </Formik>
};

export default FormSearchUsers
