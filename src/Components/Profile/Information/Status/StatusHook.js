import React, {useEffect, useState} from "react";
import classes from "../Information.module.css";

const StatusHook = ({isOwner, statusText, ...props}) => {
    const [status, statusChanger] = useState(statusText);
    const [visible, toggleVisible] = useState(false);

    useEffect(() => {
        statusChanger(statusText)
    }, [statusText]);

    const spanOnClick = () => {
        toggleVisible(true)
    };

    const onInputChange = (e) => {
        statusChanger(e.target.value.slice(0, 30));
    };

    const inputKeyDown = event => {
        if (event.key === "Enter") inputOnBlur()
    };

    const inputOnBlur = () => {
        toggleVisible(false);
        props.setStatus(status)
    };
    if (!isOwner) return <span>{status || "No status"}</span>;

    return (
        <div>
            <span
                placeholder="Введите статус"
                className={classes.status}
                onClick={spanOnClick}>
                {status || "Change status"}
            </span>
            <div>
                {visible
                && <input type="text"
                          value={status}
                          onChange={onInputChange}
                          onBlur={inputOnBlur}
                          onKeyDown={inputKeyDown}
                          autoFocus
                />}
            </div>
        </div>
    )
};

export default StatusHook;