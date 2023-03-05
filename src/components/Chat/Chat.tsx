import React, {FC, useEffect, useRef, useState} from "react";
import s from './Chat.module.css'
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    startMessagesChatThunkCreator,
    setMessagesChatActionCreator,
    stopMessagesChatThunkCreator, sendMessageChatThunkCreator, statusWSType
} from "../../Redux/chat_reducer";
import {NavLink} from "react-router-dom";


type MessagesChatType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}

const Chat: React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(startMessagesChatThunkCreator())
        return () => {
            dispatch(stopMessagesChatThunkCreator())
        }
    }, [])

    return <div>
        <MessagesChat/>
        <ChatForm/>
    </div>
}

export default withAuthNavigate(Chat)

const MessagesChat: React.FC<{}> = ({}) => {
    const refScrollBottom = useRef<HTMLDivElement>(null)
    const messages = useAppSelector(state => state.chat.messages)
    useEffect(() => {
        refScrollBottom.current?.scrollIntoView({behavior: 'smooth', block: 'end'})
    }, [messages])
    return <div className={s.messagesChat}><div>{messages.map((m: MessagesChatType, index) =>
        <MessageChat
            key={index}
            userId={m.userId}
            icon={m.photo}
            message={m.message}
            name={m.userName}
        />
    )}</div>
        <div
        ref={refScrollBottom}
        ></div>
    </div>
}


type PropsType = {
    icon: string
    name: string
    message: string
    userId: number
}
const MessageChat: FC<PropsType> = (props) => {
    return <div className={s.messageBlock}>
        <NavLink className={s.avatar} to={`/profile/${props.userId}`}><img className={s.avatar}
                                                                           src={props.icon ? props.icon : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
        </NavLink>
        <NavLink className={s.name} to={`/profile/${props.userId}`}>
            <div className={s.name}>{props.name}</div>
        </NavLink>
        <div className={s.message}>{props.message}</div>
    </div>
}

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
    return <div>
        <div><textarea
            onChange={e => setMessage(e.target.value)}
            value={message}>
        </textarea></div>
        <div>
            <button
                onClick={sendMessageChat}
                disabled={statusWS !== 'ready'}
            >Send
            </button>
        </div>
    </div>
}