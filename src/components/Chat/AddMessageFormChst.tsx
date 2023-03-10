import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {sendMessageChatThunkCreator} from "../../Redux/chat_reducer";
import s from "./Chat.module.css";

const ChatForm: React.FC<{}> = ({}) => {

    const statusWS = useAppSelector(state => state.chat.status)
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