import React from "react";
import classes from "./FieldControls.module.css"
import {reset} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const {error, submitFailed, active} = meta;
    const validation = error && submitFailed && !active;
    const styles = [];
    if (validation) styles.push(classes.error);
    return (
        <div className={styles.join(' ')}>
            <textarea {...input} {...props}/>
            {validation && <span>{error}</span>}
        </div>
    )
};

export const LoginInput = ({input, meta, ...props}) => {
    const {error, submitFailed, active} = meta;
    const validation = error && submitFailed && !active;
    const styles = [];
    if (validation)styles.push(classes.error);
    return (
        <div className={styles.join(' ')}>
            <input {...input} {...props}/>
            {validation && <span>{error}</span>}
        </div>
    )
};