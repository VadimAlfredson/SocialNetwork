import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css';
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {AddMessage} from "./AddMessage/AddMessage";
import {
    deleteMessagesUnmountThunkCreator,
    deleteMessageThunkCreator,
    dialogsType,
    getDialogsThunkCreator,
    getMessagesUserThunkCreator,
    messageType,
    postMessageToUserThunkCreator,
    setCompanionIconAndNameAC,
} from "../../Redux/reducers/dialogs_reducer";
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    getCompanionIcon, getCompanionId,
    getCompanionName,
    getDialogId,
    getDialogs,
    getMessages
} from "../../Redux/selectors/dialogs_selectors";
import {getDefaultPhoto, getOwnerId, getOwnerPhoto} from "../../Redux/selectors/auth_selectors";
import {
    Box,
    FormControl,
    InputLabel,
    List,
    ListItem,
    ListItemText, MenuItem, Select, SelectChangeEvent,
    Stack,
    Typography
} from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';


const Dialogs = () => {
    const dialogs: dialogsType[] = useAppSelector(getDialogs)
    const messages: messageType[] = useAppSelector(getMessages)
    const dialogId: number = useAppSelector(getDialogId)
    const OwnerId: number = useAppSelector(getOwnerId)
    const defaultPhoto: string = useAppSelector(getDefaultPhoto)
    const companionIcon: string = useAppSelector(getCompanionIcon)
    const companionName: string = useAppSelector(getCompanionName)
    const companionId: number | null = useAppSelector(getCompanionId)
    const ownerPhoto: string = useAppSelector(getOwnerPhoto)
    const navigate = useNavigate()

    const [dialogsCount, setDialogsCount] = useState(10)
    const [dialog, setDialog] = useState<string>('')

    const dispatch = useAppDispatch()


    let onDeleteMessageChange = (messageId: string, userId: number) => {
        dispatch(deleteMessageThunkCreator(messageId, userId))
    }


    useEffect(() => {
        dispatch(getDialogsThunkCreator())
        return () => {dispatch(deleteMessagesUnmountThunkCreator())}
    }, [])

    let getCompanionIconAndName = (userId: number) => {
        dialogs.find(i => i.id === userId ?
                dispatch(setCompanionIconAndNameAC({photo: i.photos.large ? i.photos.large : defaultPhoto, userName: i.userName, companionId: i.id})) :
          console.log('sd')
            )
    }
    const onGetMessagesUser = (userId: number) => {
        dispatch(getMessagesUserThunkCreator(userId))
        getCompanionIconAndName(userId)
        navigate("/dialogs/" + userId)

    }
    const onMessageSentChange = (userId: number, bodyMessage: string) => {
        dispatch(postMessageToUserThunkCreator(userId, bodyMessage))
    }

    let [dialogsState, setDialogsState] = useState([] as dialogsType[])

    useEffect(() => {
        let dialogsArr = [] as dialogsType[]
        if (dialogs.length > 0){
        for (let i = 0; i < (dialogs.length > dialogsCount ? dialogsCount : dialogs.length); i++) {
            dialogsArr.push(dialogs[i])
        }}
        setDialogsState(dialogsArr)
        console.log(dialogsArr)
    }, [dialogs, dialogId, dialogsCount, dialog])

    const handleChange = (event: SelectChangeEvent) => {
        setDialog(event.target.value as string);
        onGetMessagesUser(Number(event.target.value))
    };

    /*let dialogUsers =
        dialogs[0] ?
        dialogsState.map(
        d => <DialogItem
            name={d.userName}
            id={d.id}
            key={d.id}
            onGetMessagesUser={onGetMessagesUser}/>
        ) : <NavLink to={'/users'}>Search friends</NavLink>;*/

    let dialogUsers =
        dialogs[0] ?
        dialogsState.map(
        d => <ListItem onClick={() => {onGetMessagesUser(d.id)}}
        sx={{backgroundColor: '#151515', m: '5px 0 0 0',
            '&:hover': {
                border: '1px solid rgba(200,150,0)',
                backgroundColor: 'rgba(200,150,0,0.1)',
                cursor: 'pointer'
            }}}
        >
            <ListItemText primary={d.userName} />
            </ListItem>
        ) : <NavLink to={'/users'}>Search friends</NavLink>;

    let messagesItem =
        messages[0] ?
            messages.map(
                m =>
                    <MessagesItem
                        message={m.body}
                        key={m.id}
                        senderId={m.senderId}
                        OwnerId={OwnerId}
                        companionIcon={companionIcon}
                        ownerPhoto={ownerPhoto}
                        viewed={m.viewed}
                        onDeleteMessageChange={onDeleteMessageChange}
                        messageId={m.id}
                        recipientId={m.recipientId}
                        defaultPhoto={defaultPhoto}
                    />
            ) : <div><h3 className={s.h3text}>start chatting first</h3></div>
    return (
        <Box display={'flex'} flexDirection={{xs: 'column', sm: 'row'}}>
            <Stack display={{xs: 'none', sm: 'flex'}} width={{xs: '100%', sm: '250px'}} flexDirection={'column'}>
                <List>
                <ListItem onClick={() => {navigate('/users')}} sx={{backgroundColor: '#151515', borderRadius: '5px 5px 0 0',
                    '&:hover': {
                        border: '1px solid rgba(200,150,0)',
                        backgroundColor: 'rgba(200,150,0,0.1)',
                        cursor: 'pointer'
                    }}}
                >
                        <AddCommentIcon color={'warning'} />
                    <ListItemText primary={<Typography color={'#c89600'} textAlign={'center'}>add dialog</Typography>}/>
                </ListItem>
                {dialogUsers}
                </List >
            {(dialogsCount < dialogs.length) &&
                <div className={s.getMoreDialogs} onClick={() => setDialogsCount(dialogsCount => dialogsCount + 5)}>Get more dialogs</div>}
            </Stack>

            <FormControl color={'info'}
                         sx={{
                             width: '95%',
                             m: '0 2.5%',
                             display: {xs: 'auto', sm: 'none'},
                             "& .MuiOutlinedInput-root":{"& > fieldset": {border: '1px solid #D0D3D4'}},
                             input: {color: '#D0D3D4'},
                             label: {color: '#D0D3D4'},
                             value: {color: '#D0D3D4'},
                         }}
                         /*InputLabelProps={{
                             sx: { color: "grey"/!*, "&.Mui-focused": { color: "green" } *!/},
                         }}*/>
                <InputLabel id="dialog-select-label">Dialog</InputLabel>
                <Select
                    color={'info'}
                    labelId="dialog-select-label"
                    id="dialog-select"
                    value={dialog}
                    label="Dialog"
                    onChange={handleChange}
                > {dialogs.map((dialog) => <MenuItem key={dialog.id} value={dialog.id} sx={{backgroundColor: '#151515'}}><Typography color={'#D0D3D4'}>{dialog.userName}</Typography></MenuItem>
                )}
                </Select>
            </FormControl>

            <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
                {/*<NavLink to={`/profile/${companionId}`} className={s.companionName}>{companionName}</NavLink>*/}
                <div className={s.message}>
                    {messagesItem}
                </div>
                <div className={s.addMessage}>
                    <AddMessage
                        dialogId={dialogId}
                        onMessageSentChange={onMessageSentChange}
                    />
                </div>
            </Box>
        </Box>

    )
}

export default Dialogs