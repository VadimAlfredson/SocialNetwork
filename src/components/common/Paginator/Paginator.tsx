import React, {FC, useEffect, useState} from "react";
import s from "../Paginator/paginator.module.css"
import {useAppSelector} from "../../../Redux/reduxStore";
import {
    getCurrentPage,
    getFriends,
    getPageSize,
    getTerm,
    getTotalUsersCount
} from "../../../Redux/selectors/users_selectors";

type PropsType = {
    onPageChange: (p: number, pageSize: number, term: string, friend?: boolean) => void
}

let Paginator: FC<PropsType> = (props) => {

    const pageSize = useAppSelector(getPageSize)
    const totalUsersCount = useAppSelector(getTotalUsersCount)
    const currentPage = useAppSelector(getCurrentPage)
    const term = useAppSelector(getTerm)
    const friend = useAppSelector(getFriends)

    let [activePage, setActivePage] = useState(1)
    let firstPage = activePage > 2 ? activePage - 2 : activePage > 1 ? activePage -1 : 1
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = firstPage; i <= pageCount; i++) {
        pages.push(i)
    }

    useEffect(() => {
        if (activePage != currentPage) {
        setActivePage(currentPage ? currentPage : 1)
        }
    }, [currentPage])

    return (
        <div className={s.paginator}>
            {activePage > 3 &&
                <span className={currentPage === 1 ? s.activePage : s.pageNumber}
                                         onClick={() => {
                                             props.onPageChange(1, pageSize, term)
                                             setActivePage(1)
                                         }} key={1}
                            >{1}</span>
                        }
            {activePage > 4 &&
                <button className={s.pageNumber} onClick={() => {
                    setActivePage(activePage => activePage-1)
                    if (friend === true) {
                        props.onPageChange(activePage - 1, pageSize, term, friend)
                    } else {
                        props.onPageChange(activePage - 1, pageSize, term)
                    }
                }}>{`<<`}</button>
            }
            {pages
                .filter(p => p >= firstPage && p <= activePage + 2)
                .map(p => {
                        return <span className={currentPage === p ? s.activePage : s.pageNumber}
                                     onClick={() => {
                                         if (friend === true) {
                                             props.onPageChange(p, pageSize, term, friend)
                                         } else {
                                             props.onPageChange(p, pageSize, term)
                                         }
                                         setActivePage(p)
                                     }} key={p}
                        >{p}</span>
                    }
                )}

            {activePage < pageCount -2 &&
                <button className={s.pageNumber}
                        onClick={() => {
                            setActivePage(activePage => activePage+1)
                            if (friend === true) {
                                props.onPageChange(activePage + 1, pageSize, term, friend)
                            } else {
                                props.onPageChange(activePage + 1, pageSize, term)
                            }
                        }}
                >{`>>`}</button>
            }
            {activePage < pageCount - 2 &&
                <span className={currentPage === pageCount ? s.activePage : s.pageNumber}
                                         onClick={() => {
                                             props.onPageChange(pageCount, pageSize, term)
                                             setActivePage(pageCount)
                                         }} key={pageCount}
                            >{pageCount}</span>
                        }
        </div>
    )
};

export default Paginator

/*

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

export default Paginator*/
