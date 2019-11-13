import React from "react";

const GroupItem = props => {
  return (
    <div className="container panelDiv">
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
                {props.grp_Location}
              </a>
            </h4>
          </div>
          <div id={`${props.grpId}`} className="panel-collapse collapse in">
            <div className="panel-body">
              {props.location_Details.map(({ id, ...items }) => (
                <div class="row" key={id}>
                  <div class="col-12 col-md-12 col-lg-12 ol-sm-12">
                    <h6 class="text-muted">Cordinators Details</h6>
                    <ul class="list-group">
                      <li class="list-group-item">
                        <i class="fa fa-male text-info mx-2"></i>
                        &nbsp; <b>Name:</b> {items.leader}
                      </li>
                      <li class="list-group-item">
                        <i class="fa fa-map-marker text-info mx-2"></i>{" "}
                        <b>Address:</b> &nbsp;{items.address}
                      </li>
                      <li class="list-group-item">
                        <i class="fa fa-phone text-info mx-2"></i> <b>Phone:</b>{" "}
                        &nbsp;{items.phone}
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
  );
};
export default GroupItem;
