import React, {FC, useState} from "react";
import s from "../Paginator/paginator.module.css"
import {useAppSelector} from "../../../Redux/reduxStore";

type PropsType = {
    onPageChange: (p: number, pageSize: number, term: string, friend?: boolean) => void
}

let Paginator: FC<PropsType> = (props) => {
    const pageSize = useAppSelector(state => state.users.pageSize)
    const totalUsersCount = useAppSelector(state => state.users.totalUsersCount)
    const currentPage = useAppSelector(state => state.users.currentPage)
    const term = useAppSelector(state => state.users.term)
    const friend = useAppSelector(state => state.users.friends)


    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    ;
    let portionSize = 5
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize
    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
                pages
                    .filter(p => p === 1)
                    .map(p => {
                            return <span className={currentPage === p ? s.activePage : s.pageNumber}
                                         onClick={() => {
                                             props.onPageChange(p, pageSize, term)
                                         }} key={p}
                            >{p}</span>
                        }
                    )
            }
            {portionNumber > 1 &&
                <button className={s.pageNumber} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>{`<<`}</button>
            }
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                        return <span className={currentPage === p ? s.activePage : s.pageNumber}
                                     onClick={() => {
                                         if (friend === true) {
                                             props.onPageChange(p, pageSize, term, friend)
                                         } else {
                                             props.onPageChange(p, pageSize, term)
                                         }
                                     }} key={p}
                        >{p}</span>
                    }
                )}

            {portionCount > portionNumber &&
                <button className={s.pageNumber}
                        onClick={() => {
                            setPortionNumber(portionNumber + 1)
                        }}
                >{`>>`}</button>
            }
            {portionCount > portionNumber &&
                pages
                    .filter(p => p === pageCount)
                    .map(p => {
                            // @ts-ignore
                            return <span className={currentPage === p ? s.activePage : s.pageNumber}
                                         onClick={() => {
                                             props.onPageChange(p, pageSize, term)
                                         }} key={p}
                            >{p}</span>
                        }
                    )}
        </div>
    )
};

export default Paginator


