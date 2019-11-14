import React from "react";

const GroupItem = props => {
  return (
    <div className="container">
      <div class="row row-centered">
        <div class="col-xs-3 col-centered"></div>
        <div class="col-xs-12 col-centered">
          <div id="accordion" className="panel-group">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    href={`#${props.grpId}`}
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    &nbsp; &nbsp; {props.grp_Location}
                  </a>
                </h4>
              </div>
              <div id={`${props.grpId}`} className="panel-collapse collapse in">
                <div className="panel-body">
                  {props.location_Details.map(({ id, ...cell }) => (
                    <div className="row" key={id}>
                      <div className="col-12 col-md-12 col-lg-12 ol-sm-12">
                        {/* <h6 className="text-muted">Cordinators Details</h6> */}
                        <ul className="list-group">
                          <li className="list-group-item">
                            <i className="fa fa-male text-info mx-2"></i>
                            &nbsp; <b>Co-ordinator:</b> {cell.leader}
                          </li>
                          <li className="list-group-item">
                            <i className="fa fa-map-marker text-info mx-2"></i>{" "}
                            <b>Address:</b> &nbsp;{cell.address}
                          </li>
                          <li className="list-group-item">
                            <i className="fa fa-phone text-info mx-2"></i>{" "}
                            <b>Phone:</b> &nbsp;{cell.phone}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-3 col-centered"></div>
      </div>
    </div>
  );
};
export default GroupItem;
