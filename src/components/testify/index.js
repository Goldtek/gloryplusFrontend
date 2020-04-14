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
<TestifyForm />
</div>
<NewsLetter />
<Footer />
</Fragment>
);
}
}

export default TestifyComponent;
