import React from "react";

const GroupItem = props => {
  return (
    <div className="tabs">
      <div className="tab">
        <input
          type="checkbox"
          id={props.grpId}
          className="groupInput"
          style={{ position: "absolute", opacity: "0", zIndex: "-1" }}
        />
        <label className="tab-label" htmlFor={props.grpId}>
          {props.grp_Location}
        </label>
        <div className="tab-content">
          <div className="container">
            <ul className="list-group groupOrder">
              {props.location_Details.map(({ id, ...items }) => (
                <li className="list-group-item" key={id}>
                  <b></b>
                  <address>
                    <p>
                      <b className="fa fa-user "></b>
                      &nbsp;
                      {items.leader}
                    </p>
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      {items.address}
                    </p>
                    <p>
                      <b className="fa fa-phone"></b>
                      &nbsp;
                      {items.phone}
                    </p>
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GroupItem;
