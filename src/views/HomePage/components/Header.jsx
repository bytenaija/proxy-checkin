/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import moment from "moment";
import DisplayStatistics from "./DisplayStatistics";

const Header = ({ visible, checkedInVisitorsCount, visitorCount }) => {
  const expectedVisitors = { name: "Expected visitors", value: visitorCount };
  const checkedinVisitors = {
    name: "Checked in visitors",
    value: checkedInVisitorsCount
  };
  if (!visible) {
    return null;
  }
  return (
    <div className="header">
      <div className="header-date">
        <h2>1Penn Visitor Log</h2>
        <div className="date">
          {moment().format("dddd")},
          <span className="format-red">{moment().format("MMM Do")}</span>
        </div>
      </div>

      <div className="header-statistics">
        <DisplayStatistics statistics={expectedVisitors} />
        <DisplayStatistics
          statistics={checkedinVisitors}
          icon="check-circle"
          color="green"
        />
      </div>
    </div>
  );
};

export default Header;
