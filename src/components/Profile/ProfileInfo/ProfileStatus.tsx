import s from './../Profile.module.css';
import React from 'react';

export class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activeStatusInput = () => {
        this.setState(
            {editMode: true}
        )
    }

render () {
    return (
        <div>  {
            !this.state.editMode &&
                <div>
            <span onDoubleClick={this.activeStatusInput.bind(this)} >{this.props.status}</span>
                </div>
            }
            { this.state.editMode &&
                <div>
            <input value={this.props.status}/>
                </div>
            }
        </div>
    )
}
}