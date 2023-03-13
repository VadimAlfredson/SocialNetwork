import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {sendMessageChatThunkCreator} from "../../Redux/reducers/chat_reducer";
import s from "./Chat.module.css";
import {getStatus} from "../../Redux/selectors/chat_selectors";

const ChatForm: React.FC<{}> = ({}) => {

    const statusWS = useAppSelector(getStatus)
    const dispatch = useAppDispatch()
    let [message, setMessage] = useState<string>('')
    let sendMessageChat = () => {
        debugger
        if (message !== '') {
            dispatch(sendMessageChatThunkCreator(message))
        }
        setMessage('')
    }
    return <div className={s.chatForm}>
        <div><textarea
            className={s.chatInput}
            onChange={e => setMessage(e.target.value)}
            value={message}>
        </textarea></div>
        <div>
            <button
                className={statusWS === 'ready' ? s.buttonSend : s.buttonSendDisabled}
                onClick={sendMessageChat}
                disabled={statusWS !== 'ready'}
            >Send
            </button>
        </div>
    </div>
}

export default ChatForm