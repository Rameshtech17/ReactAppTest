import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const buildQueryParams = (params) => {
    const enc = window.encodeURIComponent;
    const queryString = Object.keys(params)
        .map((list) => `${enc(list)} = ${enc(params[list])}`)
        .join('&');
    return `?${queryString}`;
}
export const getList = createAsyncThunk(
    'list\getList',
    async (action) => {
        // const url = 'www.test.com';
        const url = 'https://gorest.co.in/public/v2/users'
        const res = await axios.get(url);
        // const res = await axios.get(
        //     `${url}${buildQueryParams({
        //         action,
        //     })}`
        // );
        if (res && res.status === 200
            && res.data) {
            return res.data
        }
        return [];
    }
);

const initialState = {
    list: [],
    openList: false,
    errorMsg: '',
};

const ListReducer = createSlice({
    name: 'ListReducer',
    initialState,
    reducers: {
        setOpenList: (state, action) => {
            state.openList = action.payload || false;

        }
    },
    extraReducers: {
        [getList.fulfilled]: (state, action) => {
            state.list = action.payload || [];
            // state.list = [];
            state.errorMsg = '';
        },
        [getList.rejected]: (state, action) => {
            state.list = [];
            state.errorMsg = 'Api Faild';
        },
        [getList.pending]: (state, action) => {
            // state.list= action.payload?.value || [];
            state.errorMsg = 'loading';
        },
    },

});

export const { setOpenList } = ListReducer.actions;
export default ListReducer.reducer

