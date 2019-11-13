import React from "react";
import { GroupItem } from "../index";
// import groupData from "./group-data";

const GroupList = props => {
  return (
    <div style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}>
      <div className="col-md-2"></div>
      <div className="col-md-8 cell-div">
        <h2 align="center" className="cell-header-text">
          <b>Home Church Locations</b>
        </h2>
        {props.homechurchInfo.map(({ id, ...otherprops }) => (
          <GroupItem key={id} {...otherprops} />
        ))}
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default GroupList;
