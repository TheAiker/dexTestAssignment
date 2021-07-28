import React from "react";
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavBarCSS from './nav-bar.module.css'

export function TopNavBar(): JSX.Element {
    return(
        <div className={NavBarCSS.navBarContainer}>
            <div>
                <img className={NavBarCSS.logoImage} src="/logo.svg" alt="logo" />  
            </div>
            <div className={NavBarCSS.accountIcon}>
                <Link to="/signUp"><AccountCircleIcon/></Link>
            </div>
        </div>
    )
}