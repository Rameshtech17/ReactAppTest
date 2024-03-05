import React,{useState,useEffect} from 'react';
import useStyles from '../Style/Header.style';


 const Header =()=>{
    const classes = useStyles()

    return(
        <>
        <div className ={classes.HeaderContainer}>
            <h1>Header </h1>
        </div>
        <div className ={classes.responsiveFont}>
            <h1>visuallyHidden </h1>
        </div>
        </>
    )
}
export default Header;