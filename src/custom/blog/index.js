import React, { Component } from "react";
import { SermonList } from "../";

class Blog extends Component {
  render(h) {
    return (
      <section className="blog-section ">
        <div className="container">
          <div className="row">
            <SermonList />
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
