import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        this.state = {
            loggedIn: false
        }
        /**** change the link to that of react based on routing and aplying authentication to it */
        return (
            <div className="top-nav-section hidden-xs">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div className="social">
                        <a href="https://www.facebook.com/gloryplusintl/" target="_blank">
                            <i className="ti-facebook"></i>
                        </a>
                        <a href="https://twitter.com/GloryplusI" target="_blank">
                            <i className="ti-twitter-alt"></i>
                        </a>
                        <a href="https://www.instagram.com/gloryplusintl/" target="_blank">
                            <i className="ti-instagram"></i>
                        </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7 col-lg-6">
                        <div className="counter-top">
                            <h5>Upcoming Event:</h5>
                            <div className="counter">
                                <div className="counter-item"><h4>10</h4>Days</div>
                                <div className="counter-item"><h4>08</h4>hours</div>
                                <div className="counter-item"><h4>40</h4>Mins</div>
                                <div className="counter-item"><h4>56</h4>secs</div>
                            </div>
                            <a href="#" className="top-readmore hidden-sm">readmore</a>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-2 col-lg-3">
                    {this.state.loggedIn ? (
                        <div className="user-input">
                            <a href="#">My account <i className="fa fa-angle-down"></i></a>
                        </div>
                        ): null}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default TopNav;