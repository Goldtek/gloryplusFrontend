import React, { Component } from "react";
import $ from "jquery";
import { a } from "react-router-dom";

// import TextTruncate from "react-text-truncate";
import "./nav.css";
class Header extends Component {
componentDidMount() {
$(".nav-switch").on("click", function (event) {
console.log("toggle");
$(".main-menu").slideToggle(400);
event.preventDefault();
});

}
state = {
loggedIn: false,
liveStream: false
};

render() {
return (
<div className="main-header-area">
<div className="container">
<div className="getfund-nav-container breakpoint-off"> 
<nav className="getfund-navbar justify-content-between" id="listingNav"> 
<a className="nav-brand" href="/"><img src="img/logo/logo-full.png" alt="logo"/></a> 
<div className="getfund-navbar-toggler"> <span className="navbarToggler"><span></span><span></span><span></span></span> </div>
<div className="getfund-menu"> 
<div className="getfundcloseIcon">
<div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
</div> 
<div className="getfundnav">
<ul>
<li onClick={() => window.location.reload(true)}>
<a href="/" exact={true} className="sf-with-ul">
Home
</a>
</li>
<li>

<a href="/group" exact={true} className="sf-with-ul">
Cell Location
</a>
</li>


<li> <a className="sf-with-ul" href="#">What We Do</a>
<ul className="dropdown">
<li><a href="/galleries" exact={true}>
Gallery
</a></li>
<li><a href="/events" exact={true}>
Event
</a></li>
<li><a href="/sermon" exact={true}>
Sermon
</a></li>
</ul>
</li>
<li><a href="/testify" exact={true}>
Testify
</a></li>

<li> <a className="sf-with-ul" href="#">Who We Are</a>
<ul className="dropdown">
<li><a href="/about" exact={true}>
About us
</a></li>
<li><a href="/contact" exact={true}>
Contact Us
</a></li>
</ul>
</li>
<li><a href="/live" exact={true}>
Live Stream
</a></li>
<li><a href="#" exact={true}>
Prayer Request
</a></li>


<li className="right-side">
<ul>
<li><a class="btn btn-primary btn-give" data-animation="animated fadeInRight" href="/donate">Give <i className="fas fa-hand-holding-heart"></i></a></li>
</ul>
</li>
</ul>
</div>

</div>
</nav>
</div>
</div>
</div>

);
}
}

export default Header;