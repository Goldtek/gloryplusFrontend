import React, { Component, Fragment } from "react";
import $ from "jquery";
import { GalleryItem, GalleryBtn } from "../index";
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    $(document).ready(function() {
      $(".filter-button").click(function() {
        var value = $(this).attr("data-filter");

        if (value == "all") {
          //$('.filter').removeClass('hidden');
          $(".filter").show("1000");
        } else {
          //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
          //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter")
            .not("." + value)
            .hide("3000");
          $(".filter")
            .filter("." + value)
            .show("3000");
        }
      });

      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container gallery-div">
          <div align="center">
            <GalleryBtn title="All" filter="all" />
            <GalleryBtn title="men" filter="men" />
            <GalleryBtn title="pacesetter" filter="pacesetter" />
          </div>

          <GalleryItem
            alt="img1"
            shuffle="men"
            caption="men"
            img="img/event/men.png"
          />
          <GalleryItem
            alt="men"
            shuffle="men"
            caption="men"
            img="img/event/men2.jpg"
          />
          <GalleryItem
            alt="img3"
            shuffle="pacesetter"
            caption="pacesetter"
            img="img/event/2.jpeg"
          />
          <GalleryItem
            alt="img4"
            shuffle="pacesetter"
            caption="pacesetter"
            img="img/event/sermon.jpeg"
          />
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
