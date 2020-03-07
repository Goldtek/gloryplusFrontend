import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Main } from "./index";
import ImageInput from "./ImageInput";
import "./card.css";
class Dashboard extends React.Component {
  state = {
    avatar: false
  };

  accessChild = event => {
    this.refs.child.fileOpen();
  };
  render() {
    const { avatar } = this.state;
    return (
      <section className="page-section spad partner">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-3 col-md-6 col-sm-4 ">
              <div className="panel rounded shadow">
                <div className="panel-body">
                  <div className="inner-all">
                    <ul className="list-unstyled">
                      <li className="text-center">
                        <form>
                          <ImageInput
                            maxHeight={64}
                            name="avatarURL"
                            className="create-contact-avatar-input"
                            ref="child"
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
                          onClick={this.accessChild}
                        >
                          {/* PRO Account */}
                          {avatar ? <> change image</> : <>upoad image</>}
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
                    <h3 className="panel-title">Contact Info:</h3>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="panel-body no-padding rounded">
                  <ul className="list-group no-margin">
                    <li className="list-group-item">
                      <i className="fa fa-envelope mr-5 rad-txt-primary"></i>{" "}
                      example@example.com
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-map-marker rad-txt-danger"></i>{" "}
                      Hampton Road Lekki
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-phone mr-5 rad-txt-success"></i> +55
                      xx xxx xxx
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <header className="rad-page-title">
              <span>Welcome to our partnership page</span>
              <small className="md-txt">
                {/* <a
                  href="https://www.google.com/maps/place/3720+Emerald+St,+Torrance,+CA+90503/@33.8403836,-118.3543828,17z/data=!4m18!1m15!4m14!1m6!1m2!1s0x80c2b4d407f58b11:0xdedca55964c89054!2s3720+Emerald+St,+Torrance,+CA+90503!2m2!1d-118.3520761!2d33.8403792!1m6!1m2!1s0x80c2b4d407f58b11:0xdedca55964c89054!2s3720+Emerald+St,+Torrance,+CA+90503!2m2!1d-118.3520761!2d33.8403792!3m1!1s0x80c2b4d407f58b11:0xdedca55964c89054"
                  target="_blank"
                >
                  <i class="fa fa-map-marker rad-txt-danger"></i> California
                </a> */}
              </small>{" "}
            </header>
            <Main title="TITHE" img="/img/partner/tithe.png" />
            <Main title="PARTNERSHIP" img="/img/partner/partner.jpeg" />
            {/* <Main title="SEED OF FAITH" img="img/partner/seed.png" /> */}
            {/* <Main title="GPA " img="/img/partner/glory.png" /> */}
            {/* <Main title="DEPARTMENT" img="/img/partner/gpa.jpg" /> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
