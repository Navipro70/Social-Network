import React, {FC, useState} from "react";
import "./Paginator.css";
import classes from "../Users.module.css";
import {PageNumber} from "./PaginatorComponents/PageNumber";
import {PaginatorButton} from "./PaginatorComponents/PaginatorButton";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

const Paginator: FC<PropsType> = ({totalUsersCount, pageSize, currentPage, setCurrentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / (pageSize));
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    const [portionNumber, changePortionNumber] = useState<number>(Math.ceil(currentPage / 10));
    let leftLimit = (portionNumber - 1) * 10 + 1;
    let rightLimit = leftLimit + 10;
    const prevButtonHandler = () => changePortionNumber(portionNumber - 1);
    const nextButtonHandler = () => changePortionNumber(portionNumber + 1);

    const filteredPages = pages
        .filter(i => i >= leftLimit && i < rightLimit)
        .map(i => <PageNumber key={i} i={i} currentPage={currentPage} setCurrentPage={setCurrentPage}/>);

    return (
        <div className={classes.numbers + " numbers"}>
            {portionNumber > 1 && <PaginatorButton buttonHandler={prevButtonHandler} buttonName="Prev"/>}
            {filteredPages}
            {portionNumber < pagesCount / 10 && <PaginatorButton buttonHandler={nextButtonHandler} buttonName="Next"/>}
        </div>
    )
};


export default React.memo(Paginator)