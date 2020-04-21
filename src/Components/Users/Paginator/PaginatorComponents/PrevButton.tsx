import React from "react"
import "../Paginator.css"

type PropsType = {
    prevButtonHandler: () => void
}

export const PrevButton: React.FC<PropsType> = ({prevButtonHandler}) => (
    <button className="user-button" onClick={prevButtonHandler}>Prev</button>
);