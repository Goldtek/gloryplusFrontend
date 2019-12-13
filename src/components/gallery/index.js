    import React, { Component, Fragment } from "react";
    // import axios from "axios";
    import { Helmet } from "react-helmet";
    // import "./gallery.css";
    import axios from "axios";
    import { css } from "@emotion/core";
    import { FadeLoader } from "react-spinners";
    import {
    Header,
    TopNav,
    Footer,
    PageInfo,
    NewsLetter,
    SingleGallery
    } from "../../custom";

    const API = "./db/galleryData.json";
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
    class Gallery extends Component {
    state = { gallery: [] };
    // componentWillMount() {
    //   const pathame = this.props.match.params.id;
    //   axios.get(API).then(({ data: gallery }) => {
    //     this.setState({ gallery });
    //   });

    //   const result = this.state.gallery.filter(
    //     single => single.pathName === `${pathame}`
    //   );

    //   console.log(result);
    // }

    componentDidMount() {
    // // const pathame = this.props.match.params.id;
    // fetch(API)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ gallery: data });
    //     // console.log(this.state.gallery);
    //   })
    //   .catch(console.log());

    this.setState({ loading: true }, () => {
    axios.get(API).then(result =>
    this.setState({
    loading: false,
    gallery: [...result.data]
    })
    );
    });
    }

    render() {
    const pathID = this.props.match.params.id;
    const { gallery, loading } = this.state;
    // const filteredGallery = gallery.filter(filtGallery =>
    //   filtGallery.pathName.toLowerCase().includes(pathID.toLowerCase())
    // );
    // console.log(filteredGallery);
    return (
    <Fragment>
    <Helmet>
    <title>Gallery-{pathID.charAt(0).toUpperCase() + pathID.slice(1)}</title>
    <meta name="description" content=" gallery" />
    </Helmet>
    <TopNav />
    <Header />
    <PageInfo title="Gallery" bgPicture="url(img/bg.jpg)" />

    {loading ? (
    <div style={{ minHeight: "25vh" }}>
    <div className="col-md-4"></div>
    <div
    className="col-md-4"
    style={{
    marginTop: "35px",
    marginBottom: "20px"
    }}
    >
    {" "}
    <FadeLoader
    css={override}
    sizeUnit={"px"}
    size={50}
    color={"#b42b2b"}
    height={25}
    />
    </div>
    <div className="col-md-4"></div>
    </div>
    ) : (
    <div style={{ minHeight: "25vh" }}>
    {gallery
    .filter(filtGallery =>
    filtGallery.pathName
    .toLowerCase()
    .includes(pathID.toLowerCase())
    )
    .map(({ galleryId, ...otherfilters }) => (
    <SingleGallery
    key={galleryId}
    {...otherfilters}
    name={pathID}
    />
    ))}
    </div>
    )}

    <NewsLetter />
    <Footer />
    </Fragment>
    );
    }
    }

    export default Gallery;
