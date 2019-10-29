import React from "react";
import moment from "moment";
import { Icon } from "semantic-ui-react";

const VisitInformation = ({ visit }) => {
  const getRelativeDate = fullDate => {
    const date = moment(fullDate);
    if (moment().diff(date, "days") >= 1) {
      return date.fromNow(); // '2 days ago' etc.
    }
    return date.calendar().split(" ")[0];
  };

  return (
    <div
      className="visitor-information"
      style={{
        background: visit.visitor_check_in ? "#F4F5F6" : "#FFFFFF"
      }}
    >
      <div className="card-info">
        <i className="fas fa-address-card" />
        <div>
          <div>{moment(visit.visit_date).format("LT")}</div>
          {getRelativeDate(visit.visit_date)}
        </div>
      </div>

      <div className="visitor-info visitor">
        {visit.visitor_name}
        <br></br>
        {visit.visitor_company}
      </div>

      <div className="visitor-info note">
        {visit.note && <Icon name="chat" />}
      </div>

      <div className="visitor-info host">{visit.host_name}</div>

      <div className="visitor-info host-company">{visit.host_company}</div>
      <div className="visitor-info check-in">
        {visit.visitor_check_in ? (
          <div className="checked-in">
            <span>Checked In at 7:55am</span>
            <Icon name="check circle" />
          </div>
        ) : (
          <div className="checkin">
            <span>Check In</span>
            <Icon name="check circle" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VisitInformation;
