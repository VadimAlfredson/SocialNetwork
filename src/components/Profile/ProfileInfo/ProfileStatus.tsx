import s from './../Profile.module.css';
import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type PropsType = {
    status: string
    putStatusThunkCreator: (status: string) => void
    isOwner: boolean
}

export const ProfileStatus: FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)

    let activeStatusInput = () => setEditMode(!props.isOwner)

    let deactivateEditMode = () => {
        setEditMode(false)
        props.putStatusThunkCreator(status)
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
            <span onDoubleClick={activeStatusInput} >{props.status || 'status'}</span>
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
