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
                      src="https://res.cloudinary.com/ielemson/image/upload/v1583945144/testimonial-1_bw9ydw.jpg"
                      alt=""
                    />
                    <p>
                      This word became flesh for Mama yesterday as she
                      experienced complete and total restoration. Mama had been
                      diagnosed with diabetes, and as years went by her
                      condition got worse, this got her bedridden. Last week,
                      the resident pastor of Gloryplus international Aba...
                      <a href="!#">readmore</a>
                    </p>
                  </div>
                  <div className="testimonial-name">Diabetes Healed!</div>
                </div>

                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="https://res.cloudinary.com/ielemson/image/upload/v1583946761/testimonial-2_2_1000x1080_vm2gjm.jpg"
                      alt=""
                    />
                    <p>
                      My mum had a seizure which in the past, frequently plagued
                      her and leaves her totally worn-out after each crisis,
                      with the attendant funds that I and my siblings have to
                      part with at the hospital so as she could be treated...
                      <a href="!#">readmore</a>
                    </p>
                  </div>
                  <div className="testimonial-name">Seizure Healed!</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="https://res.cloudinary.com/ielemson/image/upload/v1583945117/glory-plus/testimonials/testimonial-3_zd7fgs.jpg"
                      alt=""
                    />
                    <p>
                      "A friend of mine asked me to pray for her. She and the
                      husband had believed God for a Property of their own in a
                      choice area. After we had prayed that the Will of God be
                      done, she called to break the good news of a fat better...
                      <a href="!#">readmore</a>
                    </p>
                  </div>
                  <div className="testimonial-name">Miracle Property</div>
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
