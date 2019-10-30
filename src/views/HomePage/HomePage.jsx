/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-case-declarations */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./homepage.scss";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import moment from "moment";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Types from "../../store/visitors/types";

import VisitManagement from "./components/VisitManagement";

const Homepage = () => {
  const [allFilters, setFilters] = useState([]);
  const visitors = useSelector(state => state.Visitors.visitors);
  const checkedInVisitorsCount = visitors.filter(
    visitor => visitor.visitor_check_in
  ).length;
  const [filteredVisits, setFilteredVisits] = useState(
    [...visitors].sort((a, b) =>
      moment(a.visit_date) > moment(b.visit_date) ? -1 : 1
    )
  );

  const [hideOnScroll, setHideOnScroll] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: Types.GET_VISITORS });
  }, []);

  // .filter(visit => moment(visit.visit_date).isSame(new Date(), "d"))
  React.useMemo(() => {
    setFilteredVisits(
      visitors.sort((a, b) =>
        moment(a.visit_date) > moment(b.visit_date) ? -1 : 1
      )
    );
  }, [visitors]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  const filterHandler = filter => {
    const filters = [...allFilters.filter(f => f.name !== filter.name), filter];
    console.log("dhdhdhdhdhdhd", filters);
    setFilters(filters);
    const allVisits = [...visitors];
    let currentVisits = [...allVisits];
    for (const currentFilter of filters) {
      switch (currentFilter.type) {
        case "name":
          currentVisits = currentVisits.filter(visit => {
            if (filter.value) {
              return visit.visitor_name.includes(filter.value);
            }
            return true;
          });

          break;
        case "date":
          if (currentFilter.value !== "all") {
            let date = moment();
            if (currentFilter.value === "tomorrow") {
              date = date.add(1, "days");
            } else if (currentFilter.value === "yesterday") {
              date = date.subtract(1, "days");
            }
            currentVisits = currentVisits.filter(visit =>
              moment(visit.visit_date).isSame(date, "d")
            );
          } else {
            currentVisits = [...currentVisits];
          }

          break;

        case "host":
          currentVisits = currentVisits.filter(visit => {
            if (filter.value) {
              return visit.host_name.includes(filter.value);
            }
            return true;
          });
          break;

        case "hostCompany":
          currentVisits = currentVisits.filter(visit => {
            if (filter.value) {
              return visit.host_company.includes(filter.value);
            }
            return true;
          });
          break;

        default:
          currentVisits = [...visitors];
      }
    }

    setFilteredVisits(currentVisits);
  };

  return (
    <div className="home-page">
      <Navbar />
      <main className="main-content">
        <Sidebar />
        <div className="main">
          <Header
            visible={hideOnScroll}
            visitorCount={visitors.length}
            checkedInVisitorsCount={checkedInVisitorsCount}
          />
          <VisitManagement
            filterHandler={filterHandler}
            visits={filteredVisits}
            hideOnScroll={!hideOnScroll}
          />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
