import React from "react";
import moment from "moment";
import VisitInformation from "./VisitInformation";
import HorinzontalRule from "./HorizontalRule";

const VisitGrid = ({ visits }) => {
  visits = visits.sort(function(a, b) {
    a = new Date(a.visit_date);
    b = new Date(b.visit_date);

    let results;

    results =
      a.getHours() > b.getHours() ? 1 : a.getHours() < b.getHours() ? -1 : 0;

    if (results === 0)
      results =
        a.getMinutes() > b.getMinutes()
          ? 1
          : a.getMinutes() < b.getMinutes()
          ? -1
          : 0;

    if (results === 0)
      results =
        a.getSeconds() > b.getSeconds()
          ? 1
          : a.getSeconds() < b.getSeconds()
          ? -1
          : 0;

    return results;
  });
  const format = "h A";
  const items = [];
  new Array(24).fill().forEach((acc, index) => {
    items.push(moment({ hour: index }).format(format));
  });

  return (
    <div className="visit-grid">
      <div className="rule">
        {items.map((item, index) => {
          const visitLists = visits.filter(visit => {
            const date = moment(visit.visit_date).format(format);
            return date === item;
          });

          const { length } = visitLists;

          return (
            <HorinzontalRule
              text={item}
              key={item}
              numberOfVisits={length}
              firstColor="#000000"
              isGradient={index === 0}
              secondColor="#F4F5F6"
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
