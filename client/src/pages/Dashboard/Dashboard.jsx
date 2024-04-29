import React from "react";
import "./Dashboard.css";
import Header from "./../../components/Header/Header";
import Navbar from "./../../components/Navbar/Navbar";
import Recentsub from "../../components/RecentSubj/Recentsub";
import Upcomingclass from "../../components/UpcomingClass/Upcomingclass";
import Learningprog from "../../components/LearningProgress/Learningprog";
import Deficientsub from "../../components/DeficientSubj/Deficientsub";

function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      {<h1>Welcome, ! </h1>}
      <div className="container">
        <div className="card card1">
          <Learningprog />
        </div>
        <div className="card card2">
          <Recentsub />
        </div>
        <div className="card card3">
          <Deficientsub />
        </div>
        <div className="card card4">
          <Upcomingclass />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
