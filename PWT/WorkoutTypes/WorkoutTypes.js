import React, { useState } from "react";
import "./WorkoutTypes.css";
import yoga from "../Images/yoga1.jpeg";
import strech from "../Images/strech.jpeg";
import treadMill from "../Images/treadMill.jpeg";
import pushUps from "../Images/pushUps1.jpeg";
import weightLift from "../Images/weightLift1.jpeg";
import Running from "../Images/Running1.jpeg";

import { Col, Row, Container } from "react-bootstrap";
import Card1 from "./Card";
function WorkoutsTypes() {
  const [title, setTitle] = useState("Workout Categories");
  const [workoutsCategory, setCat] = useState([
    { title: "Treadmill", img: treadMill },
    { title: "PushUp", img: pushUps },
    { title: "Yoga", img: yoga },
    { title: "Lifting", img: weightLift },
    { title: "Running", img: Running },
    { title: "Stretching", img: strech },
  ]);
  return (
    <>
      <div>
        <Container>
          <div className="heading">
            <h2>{title}</h2>
          </div>
          <Row xs={1} md={2} lg={3}>
            {workoutsCategory.map((obj, i) => {
              return (
                <Col key={i}>
                  <Card1 image={obj.img} text={obj.title}></Card1>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
export default WorkoutsTypes;

{
  /* <Col>
          <Card1 image={treadMill} text={"Treadmill"}></Card1>
          </Col>
          <Col>
          <Card1 image={pushUps} text={"PushUp"}></Card1>
          </Col>
          <Col>
          <Card1 image={yoga} text={"Yoga"}></Card1>
          </Col>
          <Col>
          <Card1 image={weightLift} text={"Lifting"}></Card1>
          </Col>
          <Col>
          <Card1 image={Running} text={"Running"}></Card1>
          </Col>
          <Col>
          <Card1 image={strech} text={"Stretching"}></Card1>
          </Col> */
}
