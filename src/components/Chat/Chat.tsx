import React, {useEffect} from "react";
import s from './Chat.module.css'
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {useAppDispatch} from "../../Redux/reduxStore";
import {
    startMessagesChatThunkCreator,
    stopMessagesChatThunkCreator,
} from "../../Redux/reducers/chat_reducer";
import MessagesChat from "./MessagesChat";
import ChatForm from "./AddMessageFormChst";


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