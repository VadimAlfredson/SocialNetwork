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
    }, [messagesChat])
    return <div>{messagesChat.map((m: MessagesChatType, index) =>
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
    return <div>
        <img src={props.icon}/>
        <div>{props.name}</div>
        <div>{props.message}</div>
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
        <div><textarea onChange={e => setMessage(e.target.value)} value={message}></textarea></div>
        <div><button onClick={sendMessageChat}>Send</button></div>
    </div>
}