import React, { useEffect, useState } from "react";
import "./event.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";
import Header from "../header";
import Footer from "../footer";
import TopNav from "../top-nav";
import PageInfo from "../page-info";

import { firestore } from '../firebase';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const EventDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [eventData, setEvent] = useState({});

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const doc = await firestore.collection('events').doc(id).get();
    setEvent(doc.data());
    setLoading(false);
  };

  if (loading) {
    return (
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
    );
  }

  return (
    <>
    <TopNav />
    <Header/>
    <PageInfo title={eventData.title} bgPicture="url(img/bg-info/church-events.png)" />
      <section className="page-section spad">
        <div className="container">
          <div className="row">
            <div className="col-md-8 single-post">
              <span className="post-thumb">
                <img src={eventData.img} alt={id} />
              </span>

              <div className="post-content">
                <br />
                <div className="date">
                  <i className="fa fa-calendar"></i>&nbsp;
                  <b> </b>
                  &nbsp;
                  <i className="fa fa-map-marker"></i> <b>{eventData.address}</b>
                </div>
                <h3 className="post-title">{eventData.title}</h3>
                <div className="post-metas">
                  <div className="post-meta">
                    by <Link to="#"> &nbsp; admin &nbsp;</Link>
                  </div>
                  <div className="post-meta">
                    Categories: <Link to="#"> {eventData.title}</Link>
                  </div>
                </div>
                <p>{eventData.details}.</p>{" "}
                {/* <blockquote>
                  “Give to the one who asks you, and do not turn away from the
                  one who want to borrow from you.” <span>Jesus</span>
                </blockquote> */}
              </div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="post-tags">
                    {/* <Link to="#">Hope & Faithful</Link>
                    <Link to="#">color Story</Link>
                    <Link to="#">Sermon & Pray</Link> */}
                  </div>
                </div>
              </div>
              <div className="post-nav">
                <Link to="/events" className="prev-post">
                  <i className="fa fa-angle-double-left"></i> Previous Page
                </Link>
              </div>
            </div>

        
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default EventDetail;
