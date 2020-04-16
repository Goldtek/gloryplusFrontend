import React, { Component } from "react";
import "./tithe.css";
class Tithe extends Component {
  render() {
    return (
      <div className="col-md-12 col-lg-12 col-xs-12">
        <section className="site-container padding-tb ">
          <section className="card wow fadeInLeft card-form">
            <h3 className="wow fadeInDown md-txt" data-wow-delay="0.4s">
              <small className="md-txt">
                <b>{this.props.title}</b>
              </small>
            </h3>
            <form action="#" className="form" method="post">
              <div className="row">
                <div className="col-xs-6">
                  <div
                    className="form__wrapper wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="text"
                      className="form__input"
                      id="fname"
                      name="fname"
                    />
                    <label className="form__label" htmlFor="first name">
                      <span className="form__label-content">First Name</span>
                    </label>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div
                    className="form__wrapper wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="text"
                      className="form__input"
                      id="lname"
                      name="lname"
                    />
                    <label className="form__label" htmlFor="last name">
                      <span className="form__label-content">Last Name</span>
                    </label>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div
                    className="form__wrapper wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="email"
                      className="form__input"
                      id="email"
                      name="email"
                    />
                    <label className="form__label" htmlFor="email">
                      <span className="form__label-content">email</span>
                    </label>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div
                    className="form__wrapper wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="text"
                      className="form__input"
                      id="phone"
                      name="phone"
                    />
                    <label className="form__label" htmlFor="phone">
                      <span className="form__label-content">phone number</span>
                    </label>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div
                    className="form__wrapper wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="text"
                      className="form__input"
                      id="location"
                      name="location"
                    />
                    <label className="form__label" htmlFor="location">
                      <span className="form__label-content">location</span>
                    </label>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div
                    className="form__wrapper wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="text"
                      className="form__input"
                      id="zip"
                      name="zip"
                    />
                    <label className="form__label" htmlFor="zip">
                      <span className="form__label-content">zip</span>
                    </label>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div
                    className="form__wrapper wow fadeInDown input-daterange "
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="text"
                      className="dateselect form__input"
                      required="required"
                      id="date"
                      name="date"
                    />
                    <label className="form__label" htmlFor="date">
                      <span className="form__label-content">date</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-xs-6">
                {" "}
                <div
                  className="form__wrapper--submit wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <div className="form__input-submit">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-block proceed"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-xs-6">
                {" "}
                <div
                  className="form__wrapper--submit wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <div className="form__input-submit">
                    <button
                      className="btn btn-block btn-info"
                      type="button"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="text-center text-small wow fadeInLeft"
              data-wow-delay="0.8s"
            >
              <a href="#" className="modal__toggle">
                {this.props.verse}
              </a>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Tithe;
