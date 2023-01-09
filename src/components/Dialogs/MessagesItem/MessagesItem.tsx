import React, {useEffect} from "react";
import s from "../Dialogs.module.css";
import {dialogsType} from "../../../Redux/dialogs_reducer";

export const MessagesItem = (props: {
    message: string,
    dialogs: dialogsType[],
    dialogId: number
    iconUserInMessage: string
}) => {
    useEffect(() => {

    }, [props.dialogId])
    let photoUser = () => {
        let arr = props.dialogs.filter(i => i.id === props.dialogId);
           return arr[0] ? arr[0].photos.large : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}
    let iconUser = photoUser()
    console.log(photoUser())
    return <div className={s.divMessage}>
        <div>
            <img className={s.iconMessage} src={props.iconUserInMessage}/>
        </div>
        <div className={s.messageForm}>
            <a>{props.message}</a>
        </div>
    </div>
}