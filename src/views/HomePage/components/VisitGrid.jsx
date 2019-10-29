import React from "react";
import moment from "moment";
import VisitInformation from "./VisitInformation";
import HorinzontalRule from "./HorizontalRule";

const VisitGrid = ({ visits }) => {
  const format = "h:mm A";
  const items = [];
  new Array(24).fill().forEach((acc, index) => {
    items.push(moment({ hour: index }).format(format));
  });

  return (
    <div className="visit-grid">
      <div className="rule">
        {items.map((item, index) => {
          const hour = moment({ hour: index + 1 }).format(format);

          const { length } = visits.filter(visit => {
            const date = moment(visit.visit_date, format);
            console.log(date);
            return date.isBetween(item, hour, "hour");
          });

          return (
            <HorinzontalRule
              text={item}
              key={item}
              numberOfVisits={length}
              firstColor="#f56373"
              isGradient={index === 0}
              secondColor="#000947"
            />
          );
        })}
      </div>
      <div className="visit-pane">
        {visits.map(visit => (
          <VisitInformation visit={visit} key={visit.visit_id} />
        ))}
      </div>
    </div>
  );
};

export default VisitGrid;
