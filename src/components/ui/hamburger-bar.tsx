import React from "react"
import  HamburgerMenuCSS from './hamburger-bar.module.css'
import { Link } from "react-router-dom";


export function HamburgerMenu(): JSX.Element {
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
                <div>Sign out</div>
            </div>
        </div>
    );
}