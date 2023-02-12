import React, {FC, useEffect, useState} from "react";


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
    </div>
}

export default Chat

const MessagesChat: React.FC = (props) => {
    const [messagesChat, setMessagesChat] = useState([])
    useEffect(() => {
        webSocketChat.addEventListener('message', (e) => setMessagesChat(JSON.parse(e.data)))
    }, [messagesChat])
    return <div>{messagesChat.map((m: MessagesChatType) =>
        <MessageChat
            key={m.userId}
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
    key: number
}
const MessageChat: FC<PropsType> = (props) => {
    return <div>
        <img src={props.icon}/>
        <div>{props.name}</div>
        <div>{props.message}</div>
    </div>
}

const ChatForm = () => {
    return <div>
        <div><input/></div>
        <div><button></button></div>
    </div>
}