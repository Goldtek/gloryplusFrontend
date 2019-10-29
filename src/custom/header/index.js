import React, { Component } from 'react';

class Header extends Component {
    render() {
         /**** change the link to that of react based on routing */
        return(
            <header className="header-section">
                <div className="container">		
                    <a href="index.html" className="site-logo"><img src="img/logo.png" alt="" />></a>
                    <a href="" className="site-btn hidden-xs">send donation</a>
                 
                    <div className="nav-switch">
                        <i className="fa fa-bars"></i>
                    </div>
                    <nav className="main-menu">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="sermons.html">Sermons</a></li>
                            <li><a href="event.html">Event</a></li>
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;