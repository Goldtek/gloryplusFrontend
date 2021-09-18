import React from "react";

const GroupItem = ({ location_Details }) => {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id={location_Details[0].location.city} />
        <label className="tab-label" htmlFor={location_Details[0].location.city}>
          {location_Details[0].location.city.toUpperCase()}
        </label>
        <div className="tab-content table-responsive">
          {" "}
          <table className="table  table-striped">
            <thead>
              <tr>
                <th>Coordinator</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {location_Details.map(({ id, ...cell }) => (
                <tr key={id}>
                  <td>{cell.coordinator}</td>
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
