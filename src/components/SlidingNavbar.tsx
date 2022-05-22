
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./slidingNavbar.scss"
import LeftArrow from "../res/leftarrow.svg"
interface SlidingNavbarProps {
    
}
 
interface SlidingNavbarState {
    collapsed: boolean;
}
 
class SlidingNavbar extends React.Component<SlidingNavbarProps, SlidingNavbarState> {
    state = { collapsed: false };
    render() { 
        return (
            <>
                <div className={`navbar-collapse${this.state.collapsed ? " collapsed" : ""}`} onClick={() => this.toggleCollapsed()}>
                        <img src={LeftArrow} />
                </div>
                <div className={`navbar${this.state.collapsed ? " collapsed" : ""}`}>
                    <div className='navbar-gradient' />
                    
                    <div className='navbar-content'>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/resume">Resume</NavLink>
                                </li>
                                <li><NavLink to="/projects">Projects</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }

    toggleCollapsed() {
        this.setState({collapsed: !this.state.collapsed});
    }
}
 
export default SlidingNavbar;