import React, { Component } from 'react';


class Hero extends Component {
    render() {
        return (
            <section className="hero-section set-bg" data-setbg="img/bg.jpg">
                <div className="hero-content">
                    <div className="hc-inner">
                        <div className="container">
                            <h2>Living in God’s Amazing Grace!</h2>
                            <p>For God did not send his Son into the world to condemn the world, but to save the world through him.</p>
                            <a href="" className="site-btn sb-wide sb-line">join with us</a>
                        </div>
                    </div>
                </div>
	        </section>
        );
    }
}

export default Hero;