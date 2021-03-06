import React, { Component } from "react";
import { Link } from "react-router-dom";
class Main extends Component {
  state = {
    isActive: true
  };

  payTithe = e => {
    this.setState({
      isActive: false
    });
  };
  render() {
    return (
      <div>
        {this.state.isActive ? (
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="card">
              <Link className="img-card" to="#">
                <img src={this.props.img} alt={this.props.img} />
              </Link>
              {/* <div className="card-content">
          <Link to="#"> </Link>

          <p className="">Pay Your Tithe</p>
        </div> */}
              <div className="card-read-more">
                <button
                  className="btn btn-link btn-block"
                  onClick={this.payTithe}
                >
                  <small className="md-txt">
                    <a href="#!">{this.props.title}</a>
                  </small>
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Main;
