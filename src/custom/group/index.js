import React from "react";
import { GroupItem } from "../index";


const GroupList = ({ homechurchInfo }) => {
  console.log('homeinfo', homechurchInfo[0]);
  return (
    <div className="container">
      <div className="col-md-12 spad-custom">
        <h2 align="center" className="cell-header-text">
          <b>Home Church Locations</b>
        </h2>
        <div className="row">
          <div className="col">
            {/* {homechurchInfo.map(({ grpId, ...otherprops }) => (
              <GroupItem key={grpId} {...otherprops} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
