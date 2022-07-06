import React from "react";
import {UserType} from "../../Redux/users_reducers";

let Users = (props: UserType[]) => {
    return (
        <div>
            {
            props.users.map((u: UserType) => <div key={u.id}></div>)
        }
        </div>
    )
}

export default Users