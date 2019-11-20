import React from "react";

const GroupItem = props => {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id={props.grp_Location} />
        <label className="tab-label" for={props.grp_Location}>
          {props.grp_Location.toUpperCase()}
        </label>
        <div className="tab-content table-responsive">
          {" "}
          <table
            summary="This table shows how to create responsive tables using Bootstrap's default functionality"
            class="table  table-striped"
          >
            <thead>
              <tr>
                <th>Cordinator</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {props.location_Details.map(({ id, ...cell }) => (
                <tr key={id}>
                  <td>{cell.leader}</td>
                  <td>{cell.phone}</td>
                  <td>{cell.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default GroupItem;
