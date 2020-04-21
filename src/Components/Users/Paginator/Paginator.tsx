import React, {FC, useState} from "react";
import "./Paginator.css";
import classes from "../Users.module.css";
import {PrevButton} from "./PaginatorComponents/PrevButton";
import {NextButton} from "./PaginatorComponents/NextButton";
import {PageNumber} from "./PaginatorComponents/PageNumber";

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
            {portionNumber > 1 && <PrevButton prevButtonHandler={prevButtonHandler}/>}
            {filteredPages}
            {portionNumber < pagesCount / 10 && <NextButton nextButtonHandler={nextButtonHandler}/>}
        </div>
    )
};


export default React.memo(Paginator)