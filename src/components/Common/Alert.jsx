import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCloseAlert } from '../../Reducers/CommonReducer'
function AlertPopup() {
    const dispatch = useDispatch();
    const { openAlert, severity, message } = useSelector((state) => state.CommonReducer);
    console.log("IN Alert:", openAlert, severity, message);
    return (
        <Snackbar
            open={openAlert}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={3000}
            onClose={() => {
                dispatch(setCloseAlert())
            }}>

            <Alert
                onClose={() => {
                    dispatch(setCloseAlert())
                }}
                variant='filled'
                severity={severity}>
                {message}
            </Alert>

        </Snackbar>

    )
}
export default AlertPopup;


