import React from "react";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import MuiAlert from "@material-ui/lab/Alert/Alert";

export const SnackbarError = ({open, setOpen, error}) => {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    return (
        <Snackbar open={open} onClick={() => setOpen(false)}>
            <Alert severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
};