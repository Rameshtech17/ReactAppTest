import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../Reducers/ListReducer";
import Chip from '@material-ui/core/Chip';
import { Box } from '@mui/material';

import { TextField } from "@material-ui/core";
function List() {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.List)
    const [text, setText] = useState('test');

    console.log("State Data:", list)
    const getListData = () => {
        dispatch(getList())
    }
    return (
        <>

            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

            <button onClick={
                getListData
            }>Get list</button>
            {list.map((op) => {
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Box
                            sx={{
                                marginX: '5%',
                                width: '30%',
                                backgroundColor: '#cdf2fa',
                                borderRadius: '2%'

                            }}
                        >
                            <Chip label={op.name}
                                variant="outlined"
                            />
                        </Box>
                    </Box>
                )

            })}
            {/* <Chip label="Chip Outlined" variant="outlined" /> */}
        </>
    )

}
export default List;