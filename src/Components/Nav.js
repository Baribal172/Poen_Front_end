import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from 'react';
const Nav = () => {
    const [open, setOpen] = useState(false);
    return ( 
    <nav>
        <ul className="navLinks" style={{transform: open ?"translateX(0px)" : "" }}>
        <label htmlFor="nav-toggle" className="icon-close">
            <img onClick={() => setOpen(!open)}
            className="close"
            src="/close.svg" 
            alt="close-menu"/>
        </label>
        <div className="links">
                <Link href="/profile"><li><img src="profielIcon.svg"/><a>Profiel</a></li></Link>
                <Link href="/"><li><img src="homeIcon.svg"/><a>Home</a></li></Link>
                <Link href="/goals"><li><img src="doelenIcon.svg"/><a>Doelen</a></li></Link>
                <Link href="/budget"><li><img src="budgetIcon.svg"/><a>Budget</a></li></Link>
                <Link href="/tips"><li><img src="tipsIcon.svg"/><a>Tips</a></li></Link>
                <Link href="/settings"><li><img src="settingsIcon.svg"/><a>Instellingen</a></li></Link>
                <Link href="/"><li><img src="uitloggenIcon.svg"/><a>Uitloggen</a></li></Link>
        </div>
        </ul>
        <div className="menu">
            <label htmlFor="nav-toggle" className="icon-burger">
                    <img onClick={() => setOpen(!open)}
                    className="hamburger"
                    src="/menu.png" 
                    alt="hamburger-menu"/>
            </label>
            </div>
        <style jsx>{`
            nav {
                display: inline-flex;
                float: right;
                justify-content: flex-end;
                align-items: center;
                font-family: Open sans;
            }

            .navLogo {
                width: 200px;
                object-fit: contain;
            }

            .navLinks {
                position: fixed;
                display: block;
                
                top: 0;
                left: 0;
                height: 100vh;
                width: 100%;
                background-color: #006FFF;
                transform: translateX(-500px);
                transition: 0s;
                z-index: 499;
            }

            .links {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                margin: 60px;
            }

            .navLinks a {
                font-size: 18px;
                font-weight: normal;
                cursor: pointer;
                margin-left: 20px;
                
            }

            .navLinks li {
                padding: 25px;
                color: #fff;
                white-space: nowrap;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .menu {
                display: flex;
                justify-content: flex-end;
            }

            .icon-burger {
                background-color: var(--green);
                width: 45px;
                height: 45px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .hamburger {
                margin-right: 3px;
                width: 25px;
                cursor: pointer;
    
            }
            .icon-close {
                display: flex;
                justify-content: flex-end;
                height: 30px;
            }

            .close {
                width: 20px;
                cursor: pointer;
            }

        `}</style>
        
    </nav>
     );
}
 
export default Nav;