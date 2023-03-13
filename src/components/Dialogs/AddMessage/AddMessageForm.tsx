import React from "react";
import {dialogsPageType} from "../../../Redux/reducers/dialogs_reducer";
import s from "../Dialogs.module.css";
import {Formik} from "formik";
import * as yup from "yup";

export const AddMessageForm = (props: {
    onMessageSentChange: (userId: number, bodyMessage: string) => void
    dialogId: number
}) => {
    const validationSchema = yup.string()
    let addMessageElement = (values: string) => {
        debugger
        props.onMessageSentChange(props.dialogId, values);
    }
    return <Formik
        initialValues={{
            textMessage: '',
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
            >Send
            </button>
        </div>
    )}
    </Formik>
}
