import React, { Component } from "react";
import { GroupItem } from "../index";
class GroupList extends Component {
  render() {
    const rows = [ 
      {
        rowNumber: 1,
        cellName: 'Kingston',
        cellAddress: '2 abiola way',
        contactNumber: '08170675644'
      },
      {
        rowNumber: 2,
        cellName: 'Grace',
        cellAddress: '18, kudirat way',
        contactNumber: '09087677887'
      },
      {
        rowNumber: 3,
        cellName: 'Admirers',
        cellAddress: 'okata, lagos',
        contactNumber: '08056787656'
      },
      {
        rowNumber: 4,
        cellName: 'Royalty',
        cellAddress: 'opebi allen',
        contactNumber: '07032262642'
      }
    ]
    return (
      <div
        className=""
        style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="col-md-2"></div>
        <div className="col-md-8 cell-div">
          <h2 align="center" className="cell-header-text">
            <b>Home Church Locations</b>
          </h2>
          {/* <hr className="style-seven" /> */}
          <GroupItem
            location="Ikeja"
            checkId="chck1"
            details={rows}
          />
          <GroupItem
            location="Ogudu"
            checkId="chck2"
            details={rows}
          />
          <GroupItem
            location="Ikeja"
            checkId="chck3"
            details={rows}
          />
          <GroupItem
            location="Festac"
            checkId="chck4"
            details={rows}
          />
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}

export default GroupList;
