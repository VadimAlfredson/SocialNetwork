import s from './../Profile.module.css';
import React from 'react';

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
        debugger
        this.setState({
            status: e.currentTarget.value
        });
    }

/*   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): void {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }*/

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
                value={this.props.status}/>
                </div>
            }
        </div>
    )
}
}