import s from './../Profile.module.css';
import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useAppDispatch} from "../../../Redux/reduxStore";
import {putStatusThunkCreator} from "../../../Redux/reducers/profile_reducer";
import {Box, TextField, Typography} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

type PropsType = {
    status: string
    isOwner: boolean
    ownerId: number
    userId: number
}

export const ProfileStatus: FC<PropsType> = (props) => {
    const dispatch = useAppDispatch()
    let [editMode, setEditMode] = useState(false)

    let activeStatusInput = () => setEditMode(!props.isOwner)

    let deactivateEditMode = () => {
        setEditMode(false)
        if (status !== props.status) {
            dispatch(putStatusThunkCreator(status))
        }
    }

    let [status, setStatus] = useState(props.status)

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    useEffect(() => {
        console.log(props.ownerId === props.userId)
    }, [props.userId])
    return (
        <Box>  {
            !editMode && <Box display={'flex'}
                              flexDirection={'row'}
                              alignItems='center'
                              m={'0 auto 15px auto'}
                              justifyContent={'center'}
            >
                <Typography
                    variant={'subtitle1'}
                    color={'#D0D3D4'}

                ><em>{props.status || ''}</em></Typography>

                <span onClick={activeStatusInput}>{(props.ownerId === props.userId) &&
                    <ModeEditIcon color={'info'} sx={{ml: '10px'}}/>}</span>
            </Box>
        }
            <Box display={'flex'} justifyContent={'center'} margin={'auto'}>{editMode &&
                    <TextField
                        id="status"
                        label="Status"
                        variant="standard"
                        onChange={onStatusChange}
                        autoFocus={true}
                        value={status}
                        onBlur={deactivateEditMode}
                        color={'info'}
                        fullWidth={true}
                        sx={{m: '0 20px', maxWidth: '300px'}}
                    />
            }
            </Box>
        </Box>
    )
}

/*
export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeStatusInput = () => {
        this.setState(
            {editMode: true}
        )
    }

    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        );
        this.props.putStatusThunkCreator(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render () {
        return (
            <div>  {
                !this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeStatusInput} >{this.props.status || 'status'}</span>
                </div>
            }
                { this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}*/
