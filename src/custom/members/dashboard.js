import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Main } from "./index";
import ImageInput from "./ImageInput";
class Dashboard extends React.Component {
  state = {
    avatar: false
  };
  render() {
    const { avatar } = this.state;
    return (
      <section className="page-section spad partner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="panel rounded shadow">
                <div className="panel-body">
                  <div className="inner-all">
                    <ul className="list-unstyled">
                      <li className="text-center">
                        {/* <img
                          data-no-retina=""
                          className="img-circle img-responsive img-bordered-primary"
                          src="https://image.flaticon.com/icons/svg/1177/1177568.svg"
                          alt="John Doe"
                        /> */}
                        <form>
                          <ImageInput
                            maxHeight={64}
                            name="avatarURL"
                            className="create-contact-avatar-input"
                          />
                        </form>{" "}
                      </li>
                      <li className="text-center">
                        <h4 className="text-capitalize">John Doe</h4>
                        <p className="text-muted text-capitalize">
                          Department: Choir
                        </p>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="btn btn-success text-center btn-block btn-gpi"
                        >
                          {/* PRO Account */}
                          {avatar ? <> Change Picture</> : <>Upload Picture</>}
                        </Link>
                      </li>
                      <li>
                        <br />
                      </li>
                      <li>
                        <div className="btn-group-vertical btn-block">
                          <Link to="#" className="btn btn-default">
                            <i className="fa fa-cog pull-right"></i>Edit Account
                          </Link>
                          <Link to="#" className="btn btn-default">
                            <i className="fa fa-sign-out pull-right"></i>Logout
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="panel panel-theme rounded shadow">
                <div className="panel-heading">
                  <div className="pull-left">
                    <h3 className="panel-title">Contact</h3>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="panel-body no-padding rounded">
                  <ul className="list-group no-margin">
                    <li className="list-group-item">
                      <i className="fa fa-envelope mr-5"></i>{" "}
                      example@example.com
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-globe mr-5"></i> www.example.com
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-phone mr-5"></i> +55 xx xxx xxx
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Main title="TITHE" img="/img/partner/tithe.png" />
            <Main title="PARTNERSHIP" img="/img/partner/partner.jpeg" />
            <Main title="SEED OF FAITH" img="img/partner/seed.png" />
            <Main title="GPA " img="/img/partner/glory.png" />
            <Main title="DEPARTMENT" img="/img/partner/gpa.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
