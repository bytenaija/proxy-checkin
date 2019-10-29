import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="company">
        <strong>1Penn</strong>
        <i className="fas fa-chevron-down" />
      </div>

      <div className="visit-bar">
        <h2 className="sidebar-header">ANALYSE</h2>

        <a href="/" className="active enabled">
          Visitor Log
        </a>

        <a href="/" className="disabled">
          Reports
          <span className="tag">Coming Soon</span>
        </a>

        <div className="manage">
          <h2 className="sidebar-header">MANAGE</h2>

          <a href="/">Visitor experience</a>

          <a href="/">Invites</a>
          <a href="/">Devices</a>
        </div>
      </div>

      <div className="settings">
        <span>SETTINGS</span>
        <i className="fas fa-plus" />
      </div>
    </div>
  );
};

export default Sidebar;
