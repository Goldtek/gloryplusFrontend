import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import moment from 'moment';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const EventItem = ({ events, loading }) => {
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
    <div>
      {events.map(({ id, ...eventData }) => {
         const check = moment(eventData.date.seconds * 1000);
         const month = check.locale("en").format('MMM');
         const day = check.format('D');
         const year  = check.format('YYYY');
        const time =  check.locale("en").format('LTa');
      
        return (
        <div
          className="el-item event-div"
          key={id}
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <div className="row">
            <div className="col-md-4 ">
              <div className="el-thubm set-bg-event" style={{backgroundImage: `url(${eventData.img})`}}></div>
            </div>
            <div className="col-md-8">
              <div className="el-content txt-pad" style={{ padding: "5px" }}>
                <div className="el-header">
                  <div className="el-date">
                    <h2>{day}</h2>
                    {month}
                  </div>
                  <h3>{eventData.title}</h3>
                  <div className="el-metas">
                    <div className="el-meta">
                      <i className="fa fa-calendar"></i> {eventData.time}
                    </div>
                    <div className="el-meta">
                      <i className="fa fa-map-marker"></i> {eventData.address}
                    </div>
                  </div>
                </div>

                <p className="event-details">
                  {eventData.details.slice(0, 200) + `...`}
                </p>
                <Link
                  to={`/event/${eventData.uid}`}
                  className="btn btn-danger btn-md"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      )}
    </div>
  );
};

export default EventItem;
