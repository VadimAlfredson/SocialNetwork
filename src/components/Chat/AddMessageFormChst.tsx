import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {sendMessageChatThunkCreator} from "../../Redux/reducers/chat_reducer";
import s from "./Chat.module.css";
import {getStatus} from "../../Redux/selectors/chat_selectors";
import {Box, Button, TextField} from "@mui/material";

const ChatForm: React.FC<{}> = ({}) => {

    const statusWS = useAppSelector(getStatus)
    const dispatch = useAppDispatch()
    let [message, setMessage] = useState<string>('')
    let sendMessageChat = () => {
        debugger
        if (message !== '') {
            dispatch(sendMessageChatThunkCreator(message))
        }
        setMessage('')
    }
    return <Box display={'flex'} flexDirection={'row'} gap={0.5} position={'sticky'}>
        <TextField
            label={'message'}
            id={'chatMessage'}
            fullWidth={true}
            variant={'outlined'}
            onChange={e => setMessage(e.target.value)}
            value={message}
            color={'success'}
            sx={{
                "& .MuiOutlinedInput-root":{"& > fieldset": {border: '1px solid grey'},
                    '&:hover': {boxShadow: '0 0 3px  rgba(50,125,155)',
                        backgroundColor: 'rgba(50,125,155,0.05)'}},
                input: {color: '#D0D3D4'}
            }}
            InputLabelProps={{
                sx: { color: "rgba(50,125,155,0.45)"/*, "&.Mui-focused": { color: "green" } */},
            }}
        />
            <Button
                /*className={statusWS === 'ready' ? s.buttonSend : s.buttonSendDisabled}*/
                onClick={sendMessageChat}
                disabled={statusWS !== 'ready'}
                color={'success'}
                variant={statusWS !== 'ready' ? 'outlined' : 'contained'}
            >Send
            </Button>
    </Box>
}

export default ChatForm