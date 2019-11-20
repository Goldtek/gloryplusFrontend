import React from "react";
import { GroupItem } from "../index";
// import groupData from "./group-data";

const GroupList = props => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px"
      }}
      className="container"
    >
      <div className="col-md-12 cell-div">
        <h2 align="center" className="cell-header-text">
          <b>Home Church Locations</b>
        </h2>
        <div className="row">
          <div className="col">
            {props.homechurchInfo.map(({ id, ...otherprops }) => (
              <GroupItem key={id} {...otherprops} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
