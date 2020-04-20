import React, {FC, useState} from "react";
import "./Paginator.css";
import classes from "../Users.module.css";
import {connect} from "react-redux";
import {PrevButton} from "./PaginatorComponents/PrevButton";
import {NextButton} from "./PaginatorComponents/NextButton";
import {compose} from "redux";
import {PageNumber} from "./PaginatorComponents/PageNumber";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

type ExternalProps = {
    setCurrentPage: (page: number) => void
}

type PropsType = ExternalProps & MapStateToPropsType

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

const mapStateToProps = (state: AppStateType) => ({
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
});


export default compose(
    connect<MapStateToPropsType, null, ExternalProps, AppStateType>(mapStateToProps, null),
    React.memo
)(Paginator)
