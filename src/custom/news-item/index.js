import React from "react";

const NewsItem = ({ imagePath, time, title }) => (
  <div className="col-sm-6 col-md-4">
    <div className="blog-item">
      <div
        className="bi-thumb set-bg"
        style={{
          backgroundImage: "url(img/blog/1.jpg)"
        }}
      ></div>
      <div className="bi-content">
        <div className="date">On Monday 13 May, 2018</div>
        <h4>
          <a href="single-blog.html">Give To End Childhood illnesses</a>
        </h4>
      </div>
    </div>
  </div>
);

export default NewsItem;
