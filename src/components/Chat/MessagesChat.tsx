import React, {useEffect, useRef} from "react";
import {useAppSelector} from "../../Redux/reduxStore";
import s from "./Chat.module.css";
import {MessagesChatType} from "../../DAL/api/chat-api";
import MessageChat from "./Message";

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

export default MessagesChat
