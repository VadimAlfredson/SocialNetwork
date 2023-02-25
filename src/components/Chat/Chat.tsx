import React, {FC, useEffect, useState} from "react";
import s from './Chat.module.css'
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {setMessagesChatActionCreator} from "../../Redux/chat_reducer";
import {NavLink} from "react-router-dom";


type MessagesChatType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}

const Chat: React.FC = () => {
    const [webSocketChat, setWebSocketChat] = useState<WebSocket | null>(null)
    useEffect(() => {
        function connectWebSocket() {
            let ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', () => {
                console.log('close ws')
                setTimeout(connectWebSocket, 3000)
            })
            setWebSocketChat(ws)
        }
        connectWebSocket()
    }, [])

    useEffect(() => {
    }, [webSocketChat])
    return <div>
        <MessagesChat webSocketChat={webSocketChat}/>
        <ChatForm webSocketChat={webSocketChat}/>
    </div>
}

export default withAuthNavigate(Chat)

const MessagesChat: React.FC<{webSocketChat: WebSocket | null}> = (props) => {
    const messages = useAppSelector(state => state.chat.messages)
    let [messagesChat, setMessagesChat] = useState<MessagesChatType[]>(messages)
    const dispatch = useAppDispatch()

    useEffect(() => {
        props.webSocketChat?.addEventListener('message', (e) => {
            let newMessagesChat = JSON.parse(e.data)
            setMessagesChat((prev) => [...prev, ...newMessagesChat])
            dispatch(setMessagesChatActionCreator(newMessagesChat))
        })
        console.log(messagesChat)
    }, [messagesChat])
    return <div  className={s.messagesChat}>{messagesChat.map((m: MessagesChatType, index) =>
        <MessageChat
            key = {index}
            userId={m.userId}
            icon={m.photo}
            message={m.message}
            name={m.userName}
        />
    )}</div>
}


type PropsType = {
    icon: string
    name: string
    message: string
    userId: number
}
const MessageChat: FC<PropsType> = (props) => {
    return <div className={s.messageBlock}>
        <NavLink className={s.avatar} to={`/profile/${props.userId}`} ><img className={s.avatar} src={props.icon ? props.icon : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/> </NavLink>
        <NavLink className={s.name} to={`/profile/${props.userId}`} > <div className={s.name}>{props.name}</div> </NavLink>
        <div className={s.message}>{props.message}</div>
    </div>
}

const ChatForm: React.FC<{webSocketChat: WebSocket | null}> = (props) => {
    let [message, setMessage] = useState<string>('')
    let [readyStatus, setReadyStatus] = useState<'ready' | 'pending'>('pending')

    useEffect(() => {
        props.webSocketChat?.addEventListener('open', () => {
            setReadyStatus('pending')
        })
    }, [])
    let sendMessageChat = () => {
        if (!message){
            return;
        }
        props.webSocketChat?.send(message)
        setMessage('')
    }
    return <div>
        <div><textarea
            onChange={e => setMessage(e.target.value)}
            value={message}>
        </textarea></div>
        <div><button
            onClick={sendMessageChat}
            disabled={props.webSocketChat === null || readyStatus !== 'ready'}
        >Send</button></div>
    </div>
}