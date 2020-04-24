import React, {ChangeEvent, FC, useEffect, useState} from "react";
import classes from "../Information.module.css";
import {Input} from "@material-ui/core";

type PropsType = {
    isOwner: boolean
    statusText: string
    setStatus: (statusText: string) => void
}

const StatusHook: FC<PropsType> = ({isOwner, statusText, setStatus}) => {
    const [status, statusChanger] = useState<string>(statusText);
    const [visible, toggleVisible] = useState<boolean>(false);

    useEffect(() => {
        statusChanger(statusText)
    }, [statusText]);

    const spanOnClick = (): void => {
        toggleVisible(true)
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        statusChanger(event.target.value.slice(0, 30));
    };

    const inputKeyDown = (event: KeyboardEventInit): void => {
        if (event.key === "Enter") inputOnBlur();
    };

    const inputOnBlur = (): void => {
        toggleVisible(false);
        setStatus(status)
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
                && <Input type="text"
                          value={status}
                          onChange={onInputChange}
                          onBlur={inputOnBlur}
                          onKeyDown={inputKeyDown}
                          autoFocus/>}
            </div>
        </div>
    )
};

export default StatusHook;