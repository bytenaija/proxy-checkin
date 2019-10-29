import React from "react";
import CustomSelect from "./CustomSelect";

const FilterHeader = ({ filterHandler }) => {
  const options = [
    { key: "yesterday", value: "yesterday", text: "Yesterday" },
    { key: "today", value: "today", text: "Today" },
    { key: "tomorrow", value: "tomorrow", text: "Tomorrow" }
  ];
  return (
    <div className="filter-header">
      <div className="search-visit">
        <div className="search-panel">
          <div className="search">
            <span className="fas fa-search" />
            <input
              placeholder="Search People"
              onChange={e =>
                filterHandler({ type: "name", value: e.target.value })}
            />
          </div>
        </div>
        <div className="filter-date">
          <div className="filter">
            <CustomSelect options={options} filterHandler={filterHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
