import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import TextTruncate from "react-text-truncate";
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
      {events.map(({ id, ...eventData }) => (
        <div className="el-item event-div" key={id}>
          <div className="row">
            <div className="col-md-4 ">
              <div
                className="el-thubm set-bg-event "
                style={{
                  backgroundImage: `url(${eventData.imagePath})`
                }}
              ></div>
            </div>
            <div className="col-md-8 ">
              <div className="el-content txt-pad">
                <div className="el-header">
                  <div className="el-date">
                    <h2>{eventData.day}</h2>
                    {eventData.month}
                  </div>
                  <h3>{eventData.title}</h3>
                  <div className="el-metas">
                    <div className="el-meta">
                      <i className="fa fa-calendar"></i> {eventData.time}
                    </div>
                    <div className="el-meta">
                      <i className="fa fa-map-marker"></i> {eventData.location}
                    </div>
                  </div>
                </div>
                <p>
                  <TextTruncate
                    line={3}
                    element="span"
                    truncateText="…"
                    text={eventData.description}
                    // textTruncateChild={`/event/${eventData.pat
                  />
                </p>
                {/* <a href="/event/" className="btn btn-danger btn-sm">
Read more
</a> */}
                <Link
                  to={`/event/${eventData.pathName}`}
                  className="btn btn-danger btn-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventItem;
