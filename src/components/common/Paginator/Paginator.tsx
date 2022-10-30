import React, {useState} from "react";
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
    let portionSize = 10
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize
    return (
            <div>
                {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>left</button>
                }
                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                        return <span className={props.currentPage === p ? s.activePage : null}
                                     onClick={() => {
                                         props.onPageChange(p)
                                     }} key={p}
                        >{p}</span>
                    }
                )}
                {portionCount > portionNumber &&
                <button
                onClick={() => {setPortionNumber(portionNumber + 1)}}
                >right</button>
                }
            </div>
    )
};

export default Paginator