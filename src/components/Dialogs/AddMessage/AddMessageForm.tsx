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
    let addMessageElement = (values: string) => {
        props.AddMessageInDialogs(values);
    }
    return <Formik
        initialValues={{
            textMessage: '',
        }}
        onSubmit={(values => {
            addMessageElement(values.textMessage)
            console.log(values.textMessage)
        })}
        validateOnBlur
    > {({
            values,
            handleBlur,
            handleChange,
            isValid,
            handleSubmit,
            dirty
        }) => (
        <div>
            <input
                type={'textarea'}
                name={'textMessage'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.textMessage}
                placeholder={'Add new message'}
            /><br/>
            <button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={'submit'}
            >Add new message</button>
        </div>
    )}
    </Formik>
}
