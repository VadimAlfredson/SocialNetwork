import s from './../Profile.module.css';
import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useAppDispatch} from "../../../Redux/reduxStore";
import {putStatusThunkCreator} from "../../../Redux/reducers/profile_reducer";

type PropsType = {
    status: string
    isOwner: boolean
}

export const ProfileStatus: FC<PropsType> = (props) => {
    const dispatch = useAppDispatch()
    let [editMode, setEditMode] = useState(false)

    let activeStatusInput = () => setEditMode(!props.isOwner)

    let deactivateEditMode = () => {
        setEditMode(false)
        if (status !== props.status) {
        dispatch(putStatusThunkCreator(status))}
    }

    let [status, setStatus] = useState(props.status)

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div>  {
            !editMode &&
                <div>
            <span>{props.status || ''}</span>
                    <span onClick={activeStatusInput} >{!props.isOwner && <img className={s.statusEditImg} src={process.env.PUBLIC_URL + '/free-icon-edit-button-84380.png'}/>}</span>
                </div>
            }
            {editMode &&
                <div>
            <input
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={deactivateEditMode}
                value={status}/>
                </div>
            }
        </div>
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
