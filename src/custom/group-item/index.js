import React from "react";

const GroupItem = ({ location, description, checkId }) => {
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
        <div className="tab-content">{description}</div>
      </div>
    </div>
  );
};
export default GroupItem;
