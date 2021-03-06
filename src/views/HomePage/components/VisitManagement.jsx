import React from "react";
import FilterHeader from "./FilterHeader";
import FilterInput from "./FilterInput";
import VisitGrid from "./VisitGrid";

const VisitManagement = ({ visits, filterHandler, hideOnScroll }) => {
  return (
    <div className="visit-management">
      <div
        className="general-filter-header"
        style={{
          position: hideOnScroll ? "fixed" : "relative",
          top: 0
        }}
      >
        <FilterHeader filterHandler={filterHandler} />
        <FilterInput filterHandler={filterHandler} />
      </div>
      <div className="visitor-list-grid">
        <VisitGrid visits={visits} />
      </div>
    </div>
  );
};

export default VisitManagement;
