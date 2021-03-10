import React from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    // установил 10, чтобы была фиксированная шинина страницы
    let pages = []
    for (let i = 1; i <= 10; i++){
        pages.push(i)
    }

    return <div className={s.counter}>
            {pages.map(p => {
                return <span className={currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
    </div>
}
export default Paginator