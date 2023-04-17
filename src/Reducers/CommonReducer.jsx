import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    openAlert: false,
    message: '',
    severity: '',
};

const CommonReducer = createSlice({
    name: 'CommonReducer',
    initialState,
    reducers: {
        setOpenAlert: (state, action) => {
            state.openAlert = true;
            const data = action.payload;
            state.message = data.alertInfo;
            state.severity = data.alertSeverity;
        },
        setCloseAlert: (state, action) => {
            state.openAlert = false;
            state.message = '';
            state.severity = '';
        }
    }
});

export const { setOpenAlert,setCloseAlert } = CommonReducer.actions;
export default CommonReducer.reducer

