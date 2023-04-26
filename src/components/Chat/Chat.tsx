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
import {Box} from "@mui/material";


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

    return <Box display={'flex'} flexDirection={'column'} gap={1} m={'0 5px'} maxHeight={'82vh'}>
        <MessagesChat/>
        <ChatForm/>
        <div
            ref={refScrollBottom}
        ></div>
    </Box>
}

export default withAuthNavigate(Chat)