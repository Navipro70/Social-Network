import React from "react";
import classes from "./FieldControls.module.css"
import Button from "@material-ui/core/Button";

export const Textarea = ({input, meta, ...props}) => {
    const {error, submitFailed, active} = meta;
    const validation = error && submitFailed && !active;
    return (
        <div >
            <textarea {...input} {...props}/>
            <Button type="submit" variant="contained"
            color="primary"
            disabled={validation}>Add new post</Button>
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

export const SettingField = ({input, meta, ...props}) => {
    const {error, submitFailed, active} = meta;
    const validation = error && submitFailed && !active;
    return (
        <>
            <input {...input} {...props}/>
            {validation && <>
                <span style={{color: "red", marginBottom: "2px"}}> *</span>
                <div>
                    <span style={{color: "red", marginBottom: "2px"}}>
                        {error}
                    </span>
                </div></>}
            </>
    )
};