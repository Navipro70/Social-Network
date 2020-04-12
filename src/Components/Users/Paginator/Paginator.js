import React, {useState} from "react";
import "./Paginator.css";
import classes from "../Users.module.css";
import {connect} from "react-redux";

const Paginator = React.memo(({totalUsersCount, pageSize, currentPage, setCurrentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount/(pageSize));
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    const[portionNumber, changePortionNumber] = useState(Math.ceil(currentPage/10));
    let leftLimit = (portionNumber-1)*10 + 1;
    let rightLimit = leftLimit + 10;

    return <div className={classes.numbers}>
        {portionNumber > 1 &&
        < button className="user-button" onClick={() => changePortionNumber(portionNumber - 1)} >Prev</button>
        }
        {pages
            .filter(i => i >= leftLimit && i < rightLimit)
            .map(i => <span
            key={i}
            className={i === currentPage ? null : classes.selected}
            onClick={() => setCurrentPage(i)}
        >{i}
        </span>)}
        {portionNumber < pagesCount/10 && <button className="user-button" onClick={() => changePortionNumber(portionNumber + 1)}>
            Next</button>}
    </div>
});

const mapStateToProps = state => ({
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
});

export default connect(mapStateToProps, null)(Paginator);