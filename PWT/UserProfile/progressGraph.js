import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import "./graph.css";
function ChartsPage(props) {

  const [WeeklyStatus, setWstatus] = useState(false);
  const [monthlyStatus, setMstatus] = useState(false);
  const [data, setFilterData] = useState([]);


  const [dataLine, setData] = useState({
    labels: CreateArray(props.workoutsData, 1)[0],
    datasets: [
      {
        label: "Actual Cal Burn",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: CreateArray(props.workoutsData, 1)[1],
      },
      {
        label: "Expected Cal Burn",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: CreateArray(props.workoutsData, 1)[2],
      },
    ],
  });

  function daysPassedMethod(date) {
    let daysPassed = Math.floor(
      Math.abs(date - new Date()) / (1000 * 60 * 60 * 24)
    );
    switch (daysPassed) {
      case 0:
        console.log("Today", date.getMonth());
        return "Today";
      case 1:
        console.log("Yesterday");
        return "Yesterday";

      default:
        if (daysPassed < 8) {
          let day = date.getDay();
          return props.daysName[day];
        } else {
          return `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`;
        }
    }
  }
  function UpdateDataLine(num) {
    let datasets1 = dataLine.datasets.map((obj, i) => {
      if (i == 0) {
        return { ...obj, data: CreateArray(props.workoutsData, num)[1] };
      } else if (i == 1) {
        return { ...obj, data: CreateArray(props.workoutsData, num)[2] };
      }
    });

    setData({
      ...dataLine,
      datasets: datasets1,
      labels: CreateArray(props.workoutsData, num)[0],
    });
  }
  const weekHandler = () => {
    setWstatus(true);
    setMstatus(false);
    UpdateDataLine(7);
  };

  const dayHandler = () => {
    
    setWstatus(false);
    setMstatus(false);
    UpdateDataLine(1);
  };
  const monthHandler = () => {
   
    setWstatus(false);
    setMstatus(true);
    UpdateDataLine(30);
  };

  function CreateArray(data, num) {
    let filterData = num == 7 || num == 30
        ? data.filter((obj, i) => {
            return i < num;
          })
        : data;

    let x = filterData.map((obj, i) => {
      if (i < num || num == 1) {
        return daysPassedMethod(obj.date);
      }
    });
    let y = filterData.map((obj, i) => {
      if (i < num || num == 1) {
        return obj.calBurn;
      }
    });
    let z = filterData.map((obj, i) => {
      if (i < num || num == 1) {
        return obj.expectedCalBurn;
      }
    });
    return [x, y, z];
  }

  console.log(dataLine);
  return (
    <MDBContainer className="MdbconatainerStyle">
      {!WeeklyStatus ?
      <Button onClick={weekHandler} id="progressButton" variant="secondary">
        Weekly Progress
      </Button> : <Button id="progressButton" variant="secondary" onClick={dayHandler}>
        Daily Progress
      </Button>}
      {monthlyStatus?
      <Button id="progressButton" variant="secondary" onClick={dayHandler}>
        Daily Progress
      </Button>:
      <Button onClick={monthHandler} id="progressButton" variant="secondary">
        Monthly Progress
      </Button>}
      <h3 >
        {WeeklyStatus
          ? "Weekly Progress"
          : monthlyStatus
          ? "Monthly Progress"
          : " Daily Progress"}{" "}
      </h3>
      <Line data={dataLine} options={{ responsive: true }} />
      
    </MDBContainer>
  );
}

export default ChartsPage;
