import React from "react";
import user from "../../../assets/images/user.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <span className="brand">
          <i className="fas fa-chevron-left" />
          proxy
          <span className="brand-red">visitor</span>
        </span>
      </div>
      <div className="navbar-user">
        <strong>Company Name</strong>
        <img className="employee-image" src={user} alt="employee" />
      </div>
    </div>
  );
};

export default Navbar;
