import React from "react";
import {dialogsPageType} from "../../../Redux/dialogs_reducer";
import s from "../Dialogs.module.css";
import {Formik} from "formik";
import * as yup from "yup";

/*export const AddMessageForm = (props: {
    dialogsPage: dialogsPageType,
    AddMessageIDialogs: () => void
    UpdateMessageInDialogs: (text: string) => void
    createMessage
    addMessageElement
    onMessageChange
}) => {
    return (
        <div className={s.divAddMessage}>
            <div>
            <textarea
                placeholder={'Add message'}
                className={s.textareaAddMessage}
                ref={props.createMessage}
                onChange={props.onMessageChange}
                value={props.dialogsPage.addNewMessage}
            />
            </div>
            <div>
                <button className={s.buttonAddMessage} onClick={props.addMessageElement}>Sent</button>
            </div>
        </div>
    )
}*/

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
                onClick={handleSubmit}
                type={'submit'}
            >Sent
            </button>
        </div>
    )}
    </Formik>
}
