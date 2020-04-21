import React from "react"
import "../Paginator.css"

type PropsType = {
    nextButtonHandler: () => void
}

export const NextButton: React.FC<PropsType> = ({nextButtonHandler}) => (
    <button className="user-button" onClick={nextButtonHandler}>Next</button>
);