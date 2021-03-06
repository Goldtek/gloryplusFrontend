import React from "react";
import "./event.css";
import { Link, useLocation, Redirect } from "react-router-dom";
const EventDetail = ({
  title,
  location,
  day,
  year,
  imagePath,
  description,
  pathName,
  time,
  month,
  eventArr
}) => {
  let currentLocation = useLocation();
  if (currentLocation.pathname === `/event/${pathName}`) {
    // console.log(currentLocation.pathname, "location.pathname");
    // console.log(pathName);
  } else {
    return <Redirect to="/events" />;
    // console.log(currentLocation, pathName);
  }

  return (
    <>
      <section className="page-section spad">
        <div className="container">
          <div className="row">
            <div className="col-md-8 single-post">
              <span className="post-thumb">
                <img src={imagePath} alt={pathName} />
              </span>

              <div className="post-content">
                <br />
                <div className="date">
                  <i className="fa fa-calendar"></i>&nbsp;
                  <b> </b>
                  &nbsp;
                  <i className="fa fa-map-marker"></i> <b>{location}</b>
                </div>
                <h3 className="post-title">{title}</h3>
                <div className="post-metas">
                  <div className="post-meta">
                    by <Link to="#"> &nbsp; admin &nbsp;</Link>
                  </div>
                  <div className="post-meta">
                    Categories: <Link to="#"> {title}</Link>
                  </div>
                </div>
                <p>{description}.</p>{" "}
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

            <div className="col-md-4 col-sm-6 sidebar">
              <div className="widget">
                <h4 className="widget-title">Recent Events</h4>
                <div className="recent-post-widget">
                  {eventArr.slice(0, 5).map(({ id, ...recentEvent }) => (
                    <div className="rp-item" key={id}>
                      <Link to={`/event/${recentEvent.pathName}`}>
                        <div
                          className="rp-thumb set-bg"
                          style={{
                            backgroundImage:
                              `url(` + recentEvent.imagePath + `)`
                          }}
                        ></div>
                        <div className="rp-content">
                          <p>
                            {recentEvent.day} {recentEvent.month}{" "}
                            {recentEvent.year}
                          </p>
                          <h5>{recentEvent.title}</h5>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EventDetail;
