import React from "react";

const GroupItem = ({ location, details, checkId }) => {
  return (
    <div className="tabs">
      <div className="tab">
        <input
          type="checkbox"
          id={checkId}
          className="groupInput"
          style={{ position: "absolute", opacity: "0", zIndex: "-1" }}
        />
        <label className="tab-label" for={checkId}>
          {location}
        </label>
        <div className="tab-content">
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Home-Church Coordinator</th>
      <th scope="col">Home-Church Location</th>
      <th scope="col"> Contact Number</th>
    </tr>
  </thead>
  <tbody>
    {
      details.map(value => {
        return (
          <tr>
            <th scope="row">{value.rowNumber}</th>
            <td>{value.cellName}</td>
            <td>{value.cellAddress}</td>
            <td>{value.contactNumber}</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
};
export default GroupItem;
