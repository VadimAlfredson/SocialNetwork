import React, {useEffect, useRef} from "react";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    startMessagesChatThunkCreator,
    stopMessagesChatThunkCreator,
} from "../../Redux/reducers/chat_reducer";
import MessagesChat from "./MessagesChat";
import ChatForm from "./AddMessageFormChst";
import {getMessages} from "../../Redux/selectors/chat_selectors";


const Chat: React.FC = () => {
    const dispatch = useAppDispatch()
    const refScrollBottom = useRef<HTMLDivElement>(null)
    const messages = useAppSelector(getMessages)
    useEffect(() => {
        refScrollBottom.current?.scrollIntoView({behavior: 'smooth', block: 'end'})
    }, [])
    useEffect(() => {
        dispatch(startMessagesChatThunkCreator())
        return () => {
            dispatch(stopMessagesChatThunkCreator())
        }
    }, [])

    return <div>
        <MessagesChat/>
        <ChatForm/>
        <div
            ref={refScrollBottom}
        ></div>
    </div>
}

export default withAuthNavigate(Chat)