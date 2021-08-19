import React from "react";
import { Link, useLocation } from 'react-router-dom'
import NavBarCSS from './navBar.module.css'
import profilePic from '../../../assets/icon/profile_rounded.svg'
import logoPic from '../../../assets/icon/logo.svg'

export function TopNavBar(): JSX.Element {
    const location = useLocation();
    if (location.pathname === '/signUp' || location.pathname ==='/signIn') {
        return <></>;
    }
    return(
        <div className={NavBarCSS.navBarContainer}>
            <div className={NavBarCSS.LogoImageContainer}>
                <img className={NavBarCSS.logoImagePic} src={logoPic} alt="logo" />  
            </div>
            <div className={NavBarCSS.accountIconContainer}>
                <Link to='/signIn'><img className={NavBarCSS.accountIconPic}src={profilePic} alt="" /></Link>
            </div>
        </div>
    )
}