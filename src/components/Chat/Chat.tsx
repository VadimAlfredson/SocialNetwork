import React, {FC} from "react";


type MessagesChatType = {
    name: string
    message: string
    icon: string
    id: number
}



const Chat: React.FC = () => {
    return <div>
        <MessagesChat />
    </div>
}

export default Chat

const MessagesChat: React.FC = () => {
    let messagesChat: MessagesChatType[] = [{name: 'test', message: 'Hi!', icon: '', id: 1}, {name: 'test2', message: 'Hi!!!', icon: '', id: 2}]
    return <div>{messagesChat.map((m: MessagesChatType) =>
        <MessageChat
            key={m.id}
            icon={m.icon}
            message={m.message}
            name={m.name}
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