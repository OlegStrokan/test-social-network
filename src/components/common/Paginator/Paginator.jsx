import React, {useState} from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    // установил 10, чтобы была фиксированная шинина страницы
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={s.counter}>
        { portionNumber > 1 ?
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            : <button disabled>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ ({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber ?
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
        :  <button disabled>NEXT</button>}
    </div>
}
export default Paginator