import React, {FC} from "react";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert/Alert";

type PropsType = {
    open: boolean
    setOpen: (open: boolean) => void
    error: string
}

export const SnackbarError: FC<PropsType> = ({open, setOpen, error}) => {
    function Alert(props: AlertProps) {
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