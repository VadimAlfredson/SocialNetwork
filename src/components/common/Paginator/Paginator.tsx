import React from "react";
import {UserType} from "../../Redux/users_reducers";
import s from "../Paginator/paginator.module.css"
import {NavLink} from "react-router-dom";

let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    ;
    return (
            <div>
                {pages.map(p => {
                        return <span className={props.currentPage === p ? s.activePage : null}
                                     onClick={() => {
                                         props.onPageChange(p)
                                     }} key={p}
                        >{p}</span>
                    }
                )}
            </div>
    )
};

export default Paginator