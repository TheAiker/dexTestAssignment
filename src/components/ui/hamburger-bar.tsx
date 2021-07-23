import React from "react"
import './hamburger-bar.css'

export function HamburgerMenu(): JSX.Element {
    return (
        <div className="hamburgerMenuContainer">
            <div className="topMenuButtons" >
                <div>Teams</div>
                <div>Players</div>
            </div>
            <div className="signOutButton">
                <div>Sign out</div>
            </div>
        </div>
    );
}