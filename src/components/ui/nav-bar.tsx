import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './nav-bar.css'

export function TopNavBar(): JSX.Element {
    return(
        <div className="nav-barContainer">
            <div>
                <img className="logoImage" src="/logo.svg" alt="logo" />  
            </div>
            <div className="accountIcon">
                <AccountCircleIcon/>
            </div>
        </div>
    )
}