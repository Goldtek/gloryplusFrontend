import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
Header,
TopNav,
Footer,
NewsLetter,
PageInfo,
TestifyForm
} from "../../custom";

class TestifyComponent extends Component {
render() {
return (
<Fragment>
<Helmet>
<title>Share your testimony</title>
<meta name="testimony" content="Share your testimony" />
</Helmet>
<TopNav />
<Header />
<PageInfo
title="Share Your Testimony With Us"
bgPicture="url(img/bg-info/red-contact.png)"
/>
<div style={{ minHeight: "80vh" }} className="welcomediv">
<TestifyForm />
</div>
<NewsLetter />
<Footer />
</Fragment>
);
}
}

export default TestifyComponent;
