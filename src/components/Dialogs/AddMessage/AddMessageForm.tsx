import React from "react";
import {dialogsPageType} from "../../../Redux/dialogs_reducer";
import s from "../Dialogs.module.css";
import {Formik} from "formik";
import * as yup from "yup";

export const AddMessageForm = (props: {
    dialogsPage: dialogsPageType,
    AddMessageInDialogs: (textMessage: string) => void
}) => {
    const validationSchema = yup.string()
    let addMessageElement = (values: string) => {
        props.AddMessageInDialogs(values);
    }
    return <Formik
        initialValues={{
            textMessage: '' as string,
        }}
        validateOnBlur
        onSubmit={(values, {resetForm}) => {
            addMessageElement(values.textMessage)
            console.log(values.textMessage)
            resetForm({values: undefined})
        }}
        validationSchema={validationSchema}
    >
        {({
            values,
            handleBlur,
            handleChange,
            isValid,
            handleSubmit,
            dirty
        }) => (
        <div className={s.divAddMessage}>
            <input
                className={s.inputAddMessage}
                type={'textarea'}
                name={'textMessage'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.textMessage}
                placeholder={'Add new message'}
            /><br/>
            <button
                className={s.buttonAddMessage}
                disabled={!isValid && !dirty}
                onClick={() => {handleSubmit()}}
                type={'submit'}
            >Sent
            </button>
        </div>
    )}
    </Formik>
}
