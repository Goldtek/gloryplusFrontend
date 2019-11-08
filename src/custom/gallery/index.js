import React, { Component, Fragment } from "react";
import $ from "jquery";
class Gallery extends Component {
  componentWillMount() {
    $(document).ready(function() {
      // filter
      $("gallery-nav  a").on("click", function(event) {
        event.preventDefault();
        // current class
        $("gallery-nav li.current").removeClass("current");
        $(this)
          .parent()
          .addClass("current");

        // set new heading
        $("h1.heading").text($(this).text());

        // filter link text
        var category = $(this)
          .text()
          .toLowerCase()
          .replace(" ", "-");

        // remove hidden class if "all" is selected
        if (category === "all-projects") {
          $("ul#gallery li:hidden")
            .fadeIn("slow")
            .removeClass("hidden");
        } else {
          $("ul#gallery li").each(function() {
            if (!$(this).hasClass(category)) {
              $(this)
                .hide()
                .addClass("hidden");
            } else {
              $(this)
                .fadeIn("slow")
                .removeClass("hidden");
            }
          });
        }
        return false;
      });
      // lightbox
      $("ul#gallery a").on("click", function(event) {
        event.preventDefault();
        var link = $(this)
          .find("img")
          .attr("src");
        $(".gallery img").attr("src", "");
        $(".gallery img").attr("src", link);
        $(".gallery").fadeIn("slow");
      });
      // close lightbox
      $(".gallery").on("click", function(event) {
        event.preventDefault();
        $(".gallery").fadeOut("slow");
      });
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container gallery-cont">
          <nav className="gallery-nav">
            <ul>
              <li className="current">
                <a href="#">All projects</a>
              </li>
              <li>
                <a href="#">Front-end</a>
              </li>
              <li>
                <a href="#">Back-end</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
          </nav>
          <div id="projects">
            {/* <h1 className="heading">All Projects</h1> */}
            <ul id="gallery">
              <li className="design">
                <a href="#">
                  <img src="https://www.facebook.com/gloryplusintl/photos/a.112199953446422/119556469377437/?type=3&theater" />
                </a>
              </li>
              <li className="apps">
                <a href="#">
                  <img src="https://source.unsplash.com/y1yQQmozTBw/700x700" />
                </a>
              </li>
              <li className="back-end">
                <a href="#">
                  <img src="https://source.unsplash.com/b18TRXc8UPQ/700x700" />
                </a>
              </li>
              <li className="apps design">
                <a href="#">
                  <img src="https://source.unsplash.com/klRB1BB9pV8/700x700" />
                </a>
              </li>
              <li className="front-end">
                <a href="#">
                  <img src="https://source.unsplash.com/y1yQQmozTBw/700x700" />
                </a>
              </li>
              <li className="front-end design">
                <a href="#">
                  <img src="https://source.unsplash.com/1vwwZ-BmmrE/700x700" />
                </a>
              </li>
              <li className="apps">
                <a href="#">
                  <img src="https://source.unsplash.com/WLOCr03nGr0/700x700" />
                </a>
              </li>
              <li className="back-end">
                <a href="#">
                  <img src="https://source.unsplash.com/iOykDIkZLQw/700x700" />
                </a>
              </li>
            </ul>
          </div>

          <div className="gallery">
            <a className="close" href="#">
              <i>
                <span className="bar"></span>
                <span className="bar"></span>
              </i>
            </a>
            <img src="" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
