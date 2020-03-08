import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Player } from "video-react";
// import "./player.css";
import "./testimonial.css";
class Testimonial extends Component {
  render() {
    return (
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div id="customers-testimonials" className="owl-carousel">
                {/* <!--TESTIMONIAL 1 --> */}
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      <q>
                        {" "}
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions. Completely synergize
                        resource taxing relationships via premier niche markets.
                        Professionally cultivate.
                      </q>
                    </p>
                  </div>
                  <div className="testimonial-name">EMILIANO AQUILANI</div>
                </div>

                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Completely synergize resource taxing
                      relationships via premier niche markets. Professionally
                      cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">ANNA ITURBE</div>
                </div>

                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Completely synergize resource taxing
                      relationships via premier niche markets. Professionally
                      cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">LARA ATKINSON</div>
                </div>

                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Completely synergize resource taxing
                      relationships via premier niche markets. Professionally
                      cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">IAN OWEN</div>
                </div>

                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Completely synergize resource taxing
                      relationships via premier niche markets. Professionally
                      cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">MICHAEL TEDDY</div>
                </div>
                {/* <!--END OF TESTIMONIAL 5 --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
