import React, { Component, Fragment } from "react";
import $ from "jquery";
import Modal from "./modal";
import "./testimonial.css";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Testimonial extends Component {
  state = {
    open: false,
    activeItem: []
  };

  onOpenModal = testimony => {
    this.setState({ activeItem: testimony }, () =>
      this.setState({ open: true })
    );
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { tesmonies: testimony } = this.props;
    const { open } = this.state;
    return (
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-center m-auto">
              {/* <h2>Testimony</h2> */}
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* <!-- Carousel indicators --> */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                {/* <!-- Wrapper for carousel items --> */}

                <div className="carousel-inner">
                  <Fragment>
                    {testimony.map(testimony => (
                      <div
                        className={`item carousel-item ${testimony.status}`}
                        key={testimony.id}
                      >
                        <div className="img-box">
                          <img src={testimony.img} alt="" />
                        </div>
                        <p>
                          {testimony.description.slice(0, 400) + `...`}

                          <button
                            className="btn btn-link"
                            role="link"
                            data-toggle="modal"
                            data-target=".bs-example-modal-new"
                            onClick={() => this.onOpenModal(testimony)}
                          >
                            read more
                          </button>
                        </p>
                      </div>
                    ))}
                    <Modal
                      title={this.state.activeItem.title}
                      description={this.state.activeItem.description}
                    />
                  </Fragment>
                </div>

                {/* <!-- Carousel controls --> */}
                <a
                  className="carousel-control left carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                <a
                  className="carousel-control right carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
