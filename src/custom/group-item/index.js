import React from "react";

const GroupItem = props => {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id={props.grp_Location} />
        <label className="tab-label" for={props.grp_Location}>
          {props.grp_Location.toUpperCase()}
        </label>
        <div className="tab-content">
          {props.location_Details.map(({ id, ...cell }) => (
            <div className="row" key={id}>
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
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
                    <i className="fa fa-phone text-info mx-2"></i> <b>Phone:</b>{" "}
                    &nbsp;{cell.phone}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GroupItem;
