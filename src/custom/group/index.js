import React from "react";
import { GroupItem } from "../index";
// import groupData from "./group-data";
import { useLocation } from "react-router-dom";
const GroupList = ({ homechurchInfo }) => {
  let location = useLocation();
  return (
    <div className="container">
      <div className="col-md-12 spad-custom">
        <h2 align="center" className="cell-header-text">
          <b>Home Church Locations</b>
        </h2>
        <div className="row">
          <div className="col">
            {homechurchInfo.map(({ grpId, ...otherprops }) => (
              <GroupItem key={grpId} {...otherprops} />
            ))}
          </div>
          <code>{location.pathname}</code>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
