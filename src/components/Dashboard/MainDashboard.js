import React from "react";
import AccountList from "./AccountList";
import AccountSummary from "./AccountSummary";

const MainDashboard = () => {
  return (
    <>
      <AccountSummary />
      <AccountList />
    </>
  );
};

export default MainDashboard;
