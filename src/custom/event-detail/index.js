import React from "react";
import "./event.css";
import { Link } from "react-router-dom";
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
  // let me = useLocation();
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
                  <b>
                    {" "}
                    {day} {month} {year}
                  </b>
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
                <div className="col-sm-5">
                  <div className="social-share">
                    <p>Share</p>

                    <div
                      class="fb-share-button"
                      data-href="https://www.facebook.com/gloryplusintl/"
                      data-layout="button_count"
                    ></div>
                    {/* <Link to="">
                      <i className="fab fa-facebook-f"></i>
                    </Link> */}
                    {/* <Link to="">
                      <i className="fab fa-twitter"></i>
                    </Link> */}

                    {/* <Link to="">
                      <i className="fab fa-instagram"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="post-nav">
                <Link to="/events" className="prev-post">
                  <i className="fa fa-angle-double-left"></i> Previous Page
                </Link>
                {/* <Link to="" className="next-post">
                  Next Post <i className="fa fa-angle-double-right"></i>
                </Link> */}
              </div>

              {/* <form className="comment-form">
                <h2>Leave a comment</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Website" />
                <textarea placeholder="Messeges"></textarea>
                <button type="submit" className="site-btn">
                  Send message
                </button>
              </form> */}
            </div>

            <div className="col-md-4 col-sm-6 sidebar">
              {/* <div className="widget">
                <form className="search-widget">
                  <input type="text" placeholder="Search..." />
                  <button>
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div> */}

              {/* <div className="widget">
                <h4 className="widget-title">Categories</h4>
                <ul>
                  <li>
                    <Link to="">Color Story</Link>
                  </li>
                  <li>
                    <Link to="">Hope & Faithful</Link>
                  </li>
                  <li>
                    <Link to="">Pray & Church</Link>
                  </li>
                  <li>
                    <Link to="">Prayer & God</Link>
                  </li>
                  <li>
                    <Link to="">Sermon & Pray</Link>
                  </li>
                </ul>
              </div> */}

              <div className="widget">
                <h4 className="widget-title">Recent Events</h4>
                <div className="recent-post-widget">
                  {eventArr.map(({ id, ...recentEvent }) => (
                    <div className="rp-item" key={id}>
                      <div
                        className="rp-thumb set-bg"
                        style={{
                          backgroundImage: `url(` + recentEvent.imagePath + `)`
                        }}
                      ></div>
                      <div className="rp-content">
                        <p>
                          {recentEvent.day} {recentEvent.month}{" "}
                          {recentEvent.year}
                        </p>
                        <h5>{recentEvent.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* 
              <div className="widget">
                <h4 className="widget-title">Archives</h4>
                <ul className="archive">
                  <li>
                    <Link to="">February 2018</Link>
                  </li>
                  <li>
                    <Link to="">June 2017</Link>
                  </li>
                  <li>
                    <Link to="">March 2016</Link>
                  </li>
                  <li>
                    <Link to="">November 2015</Link>
                  </li>
                </ul>
              </div> */}

              {/* <div className="widget">
                <h4 className="widget-title">Popular Tags</h4>
                <div className="tags">
                  <Link to="#">Creative</Link>
                  <Link to="#">Unique</Link>
                  <Link to="#">Photography</Link>
                  <Link to="#">Pray</Link>
                  <Link to="#">Wordpress Template</Link>
                  <Link to="#">Church</Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EventDetail;
