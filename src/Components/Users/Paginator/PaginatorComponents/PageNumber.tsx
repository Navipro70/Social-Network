import React from "react"
import classes from "../../Users.module.css"

type PropsType = {
    i: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

export const PageNumber: React.FC<PropsType> = ({i, currentPage, setCurrentPage}) => {
    const spanHandler = () => setCurrentPage(i);
    return (
        <span
            key={i}
            className={i === currentPage ? undefined : classes.selected}
            onClick={spanHandler}>{i}
        </span>
    )
};