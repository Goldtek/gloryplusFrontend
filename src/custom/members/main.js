import React from "react";

const Main = ({ title, img }) => {
  return (
    <div className="col-xs-12 col-sm-4 col-md-3">
      <div className="card">
        <a
          className="img-card"
          href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
        >
          <img src={img} alt={img} />
        </a>
        <div className="card-content">
          <h4 className="card-title" style={{ textAlign: "center" }}>
            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
              {" "}
              {title}
            </a>
          </h4>
          {/* <p className="">Pay Your Tithe</p> */}
        </div>
        {/* <div className="card-read-more">
          <a
            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
            className="btn btn-link btn-block"
          >
            view more
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Main;
