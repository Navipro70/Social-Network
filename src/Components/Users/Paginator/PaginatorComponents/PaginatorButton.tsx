import React from "react"
import "../Paginator.css"

type PropsType = {
    buttonHandler: () => void
    buttonName: string
}

export const PaginatorButton: React.FC<PropsType> = ({buttonHandler, buttonName}) => (
    <button className="user-button" onClick={buttonHandler}>{buttonName}</button>
);