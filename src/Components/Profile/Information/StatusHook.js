import React, {useEffect, useState} from "react";
import classes from "./Information.module.css";

const StatusHook = (props) => {
    const [status, statusChanger] = useState(props.statusText);
    const [visible, toggleVisible] = useState(false);

    useEffect(() => {
        statusChanger(props.statusText)
    }, [props.statusText]);

    const spanOnClick = () => {
        toggleVisible(true)
    };

    const onInputChange = (e) => {
        statusChanger(e.target.value.slice(0, 30));
    };

    const inputKeyDown = event => {
        if(event.key === "Enter") inputOnBlur()
    };

    const inputOnBlur = () => {
        toggleVisible(false);
        props.setStatus(status)
    };

        return <div>
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
};

export default StatusHook;