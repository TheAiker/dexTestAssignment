import React from "react"
import  HamburgerMenuCSS from './hamburger-bar.module.css'
import { Link, useLocation} from 'react-router-dom';
import { SignOutButton } from '../button/signOutButton';

export function HamburgerMenu(): JSX.Element {
    const location = useLocation();
    if (location.pathname === '/signUp' || location.pathname ==='/signIn') {
        return <></>;
    }
    return (
        <div className={HamburgerMenuCSS.hamburgerMenuContainer}>
            <div className={HamburgerMenuCSS.topMenuButtons} >
                <div> 
                    <Link to='/teams'>Teams</Link>
                </div>
                <div> 
                    <Link to='/players'>Players</Link>
                </div>
            </div>
            <div className={HamburgerMenuCSS.signOutButton}>
                <div><SignOutButton/></div>
            </div>
        </div>
    );
}