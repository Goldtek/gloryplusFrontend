import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
    Header,
    TopNav,
    Footer,
    NewsLetter,
    PageInfo,
    WelcomeForm
} from "../../custom";

class FirstTimers extends Component {
    render() {
        const { homechurchInfo } = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>Welcome to GPI</title>
                    <meta name="welcome page" content="Welcome to GPI" />
                </Helmet>
                <TopNav />
                <Header />
                <PageInfo
                    title="Welcome To Glory Plus International"
                    bgPicture="url(img/bg-info/red-contact.png)"
                />
                <div style={{ minHeight: "95vh" }} className="welcomediv">
                    <WelcomeForm homechurches={homechurchInfo} />
                </div>
                <NewsLetter />
                <Footer />
            </Fragment>
        );
    }
}

export default FirstTimers;
