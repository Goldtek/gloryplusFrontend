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
            location="Ajah"
            checkId="chck1"
            description={
              <div className="container">
                <ul className="list-group groupOrder">
                  <li className="list-group-item">
                    <b>
                      Badore:
                      <br />
                    </b>
                    <address>
                      <p>
                        <b className="fa fa-user "></b> Elemson Ifeanyi
                      </p>
                      <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> No 2 Badore street Ajah
                      </p>
                      <p>
                        <b className="fa fa-phone"></b> 08067407355
                      </p>
                    </address>
                  </li>
                  <li className="list-group-item">
                    <b>
                      Lamgbasa:
                      <br />
                    </b>
                    <address>
                      <p>
                        <b className="fa fa-user "></b> Chisom Dike
                      </p>
                      <p>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        No 2 Badore street Ajah
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
            location="Lekki"
            checkId="chck2"
            description={
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>#</th> <th>Location</th> <th>Address</th>
                      <th>Contact Person</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="active">1</td>
                      <td class="success">Lekki Phase I</td>
                      <td class="warning">1 Admiralty Way Lekki</td>
                      <td class="danger">Chisom: 08066378961</td>
                    </tr>
                  </tbody>
                </table>
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
