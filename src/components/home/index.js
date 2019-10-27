import React, { Component, Fragment } from 'react';
import { Hero, Header, TopNav } from '../../custom';


class Home extends Component {
    render(){
        return(
            <Fragment>
                <TopNav />
                <Header />
                <Hero />
            </Fragment>
        );
    }
}


export default Home;