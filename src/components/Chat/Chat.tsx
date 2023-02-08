import React, {FC} from "react";


type MessagesChatType = {
    name: string
    message: string
    icon: string
    id: number
}

let messagesChat: MessagesChatType[] = [{name: 'test', message: 'Hi!', icon: '', id: 1}]

export const Chat = () => {
    return <div></div>
}

const MessagesChat = () => {
    return messagesChat.map(m =>
        <MessageChat
            key={m.id}
            icon={m.icon}
            message={m.message}
            name={m.name}
        />
    )
}

const MessageChat: FC<MessagesChatType> = (props) => {
    return <div>
        <img src={props.icon}/>
        <div>{props.name}</div>
        <div>{props.message}</div>
    </div>
}