import React, { useState } from "react";
import "./userProfile.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgressBar from "./progressBar";
import ProgressTable from "./progressTable";
import PeogressGraph from "./progressGraph";
import UserProfile from "./userProfile";
function Profile() {
  const [daysName, setDays] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const [workoutsData, setWorkoutData] = useState([
    {
      date: new Date("2021-07-06T08:32:16.040Z"),
      calBurn: 1000,
      expectedCalBurn: 1500,
      plan: "Beginner Workout",
    },
    {
      date: new Date("2021-07-05T08:32:16.040Z"),
      calBurn: 1200,
      expectedCalBurn: 2000,
      plan: "Beginner Workout",
    },
    {
      date: new Date("2021-07-04T08:32:16.040Z"),
      calBurn: 1000,
      expectedCalBurn: 2500,
      plan: "Intermediate Workout",
    },
    {
      date: new Date("2021-07-03T08:32:16.040Z"),
      calBurn: 2300,
      expectedCalBurn: 2500,
      plan: "Intermediate Workout",
    },
    {
      date: new Date("2021-07-02T08:32:16.040Z"),
      calBurn: 1200,
      expectedCalBurn: 2000,
      plan: "Advanced Workout",
    },
    {
      date: new Date("2021-07-01T08:32:16.040Z"),
      calBurn: 1000,
      expectedCalBurn: 2500,
      plan: "Advanced Workout",
    },
    {
      date: new Date("2021-06-01T08:32:16.040Z"),
      calBurn: 2300,
      expectedCalBurn: 2500,
      plan: "Advanced Workout",
    },
    {
      date: new Date("2021-06-01T08:32:16.040Z"),
      calBurn: 1000,
      expectedCalBurn: 2500,
    },
    {
      date: new Date("2021-05-01T08:32:16.040Z"),
      calBurn: 0,
      expectedCalBurn: 2500,
    },
  ]);
  return (
    <div>
      <Container className="conatinerStyle">
        <Row xs={1} md={1} lg={2} className="RowStyle">
          <Col lg={5}>
            <UserProfile></UserProfile>
          </Col>
          <Col  lg={7} >
          <ProgressTable
              daysName={daysName}
              workoutsData={workoutsData}
            ></ProgressTable>
        
          </Col>
        </Row>
        <Row xs={1} md={1} lg={2}>
        <Col>
        <ProgressBar
              daysName={daysName}
              workoutsData={workoutsData}
            ></ProgressBar>
          </Col>
          <Col>
           
            <PeogressGraph
              daysName={daysName}
              workoutsData={workoutsData}
            ></PeogressGraph>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
export default Profile;
