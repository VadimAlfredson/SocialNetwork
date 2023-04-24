import React, {useEffect, useRef} from "react";
import {useAppSelector} from "../../Redux/reduxStore";
import s from "./Chat.module.css";
import {MessagesChatType} from "../../DAL/api/chat-api";
import MessageChat from "./Message";
import {getMessages} from "../../Redux/selectors/chat_selectors";
import { List } from "@mui/material";

const MessagesChat: React.FC<{}> = ({}) => {
    const refScrollBottom = useRef<HTMLDivElement>(null)
    const messages = useAppSelector(getMessages)

    useEffect(() => {
        refScrollBottom.current?.scrollIntoView({behavior: 'smooth', block: 'end'})
    }, [messages])

    return <List sx={{ width: '100%', maxHeight: 600, overflow: 'auto',
        paddingRight: '1px', paddingLeft: '2px',
        '&::-webkit-scrollbar': {
            width: '1em',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(50,125,155,0.20)',
            webkitBoxShadow: 'inset 0 0 6px rgba(50,125,155,0.20)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(50,125,155,.1)',
            outline: '1px solid #327d9b'
        }
    }}
    >{messages.map((m: MessagesChatType, index) =>
        <MessageChat
            key={index}
            userId={m.userId}
            icon={m.photo}
            message={m.message}
            name={m.userName}
        />
    )}
        <div
            ref={refScrollBottom}
        ></div>
    </List>
}

export default MessagesChat
