import React, { Component } from "react";
import { GroupItem } from "../index";
class GroupList extends Component {
  render() {
    return (
      <div
        className=""
        style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="col-md-2"></div>
        <div className="col-md-8 cell-div">
          <h2 align="center" className="cell-header-text">
            <b>Home Church Locations</b>
          </h2>
          {/* <hr className="style-seven" /> */}
          <GroupItem
            location="Ikeja"
            checkId="chck1"
            description={
              <div className="container">
                <ul className="list-group groupOrder">
                  <li className="list-group-item">
                    <b>
                    </b>
                    <address>
                      <p>
                        <b className="fa fa-user "></b> Godspower 
                      </p>
                      <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> No 1 Sodipo close
                      </p>
                      <p>
                        <b className="fa fa-phone"></b> 08067407355
                      </p>
                    </address>
                  </li>
                  <li className="list-group-item">
                    <b>
                    </b>
                    <address>
                      <p>
                        <b className="fa fa-user "></b> Chisom Dike
                      </p>
                      <p>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        No 2 Zion street 
                      </p>
                      <p>
                        <b className="fa fa-phone"></b> 08066379681
                      </p>
                    </address>
                  </li>
                </ul>
              </div>
            }
          />
          <GroupItem
            location="Ogudu"
            checkId="chck2"
            description={
              <div className="container">
                <ul className="list-group groupOrder">
                  <li className="list-group-item">
                    <b>
                    </b>
                    <address>
                      <p>
                        <b className="fa fa-user "></b> Stephanie Esiokwu
                      </p>
                      <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> No 2 Badore street
                      </p>
                      <p>
                        <b className="fa fa-phone"></b> 08067407355
                      </p>
                    </address>
                  </li>
                  <li className="list-group-item">
                    <b>
            
                    </b>
                    <address>
                      <p>
                        <b className="fa fa-user "></b>Jennifer Johnson
                      </p>
                      <p>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        No 5 palace street 
                      </p>
                      <p>
                        <b className="fa fa-phone"></b> 08066379681
                      </p>
                    </address>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}

export default GroupList;
