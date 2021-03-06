import React from "react";

const GroupItem = ({ grp_Location, location_Details }) => {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id={grp_Location} />
        <label className="tab-label" htmlFor={grp_Location}>
          {grp_Location.toUpperCase()}
        </label>
        <div className="tab-content table-responsive">
          {" "}
          <table className="table  table-striped">
            <thead>
              <tr>
                <th>Cordinator</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {location_Details.map(({ id, ...cell }) => (
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
