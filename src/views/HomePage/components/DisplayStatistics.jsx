import React from "react";

const DisplayStatistics = ({ statistics, icon, color }) => {
  return (
    <div className="stats">
      <div className="name">{statistics.name}</div>
      <span className="value">{statistics.value}</span>
      {icon && <i className={`fas fa-${icon}`} style={{ color }} />}
    </div>
  );
};

export default DisplayStatistics;
