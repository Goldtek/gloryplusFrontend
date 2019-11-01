import React from "react";

const PageInfo = ({ title }) => (
      <section className="page-info-section set-bg" style={{ backgroundImage: "url(img/bg.jpg)"  }}>
        <div className="page-info-content">
          <div className="pi-inner">
            <div className="container">
              <h2>{title}</h2>
              <div className="site-breadcrumb">
                <a href="/">Home</a> <i className="fa fa-angle-right"></i>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

export default  PageInfo
