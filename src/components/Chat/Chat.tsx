import React, {FC, useEffect, useState} from "react";
import s from './Chat.module.css'


type MessagesChatType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}

const webSocketChat = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const Chat: React.FC = () => {
    return <div>
        <MessagesChat />
        <ChatForm />
    </div>
}

export default Chat

const MessagesChat: React.FC = (props) => {
    const [messagesChat, setMessagesChat] = useState<MessagesChatType[]>([])

    useEffect(() => {
        webSocketChat.addEventListener('message', (e) => {
            let newMessagesChat = JSON.parse(e.data)
            setMessagesChat(prev => [...prev, ...newMessagesChat])
        })
    }, [])
    return <div  className={s.messagesChat}>{messagesChat.map((m: MessagesChatType, index) =>
        <MessageChat
            key = {index}
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
}
const MessageChat: FC<PropsType> = (props) => {
    return <div className={s.messageBlock}>
        <img className={s.avatar} src={props.icon ? props.icon : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
        <div className={s.name}>{props.name}</div>
        <div className={s.message}>{props.message}</div>
    </div>
}

const ChatForm = () => {
    let [message, setMessage] = useState('')
    let sendMessageChat = () => {
        if (!message){
            return;
        }
        webSocketChat.send(message)
        setMessage('')
    }
    return <div>
        <div><textarea
            onChange={e => setMessage(e.target.value)}
            value={message}>
        </textarea></div>
        <div><button
            onClick={sendMessageChat}
            disabled={webSocketChat.readyState !== webSocketChat.OPEN}
        >Send</button></div>
    </div>
}