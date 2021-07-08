import React from "react";
import { useState } from "react";
import "./progressBar.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressBar, Container, Row, Col ,Button} from "react-bootstrap";
function Progress(props) {
  const [percentage, setPercent] = useState([]);
  const [weeklyPrg, setWeekPrg] = useState();
  const [monthlyPrg, setMonthPrg] = useState();
  const [WeeklyStatus , setWstatus] = useState(false);
  const [monthlyStatus , setMstatus] = useState(false);
  const sum =(obj,num)=>{
    let prev=0;

    let weeklyPrg =obj.map(obj1 => obj1.calBurn).reduce((prev, next,index) =>{
      console.log(index,prev,next);
      if(index<=num){
          return(prev +next)
        }
      return(prev);
      });
      let expectedweeklyPrg =obj.map(obj1 => obj1.expectedCalBurn).reduce((prev, next,index) =>{
        console.log(index,prev,next);
        if(index<=num){
            return(prev +next)
          }
        return(prev);
        });
      let Percent=Math.floor((weeklyPrg/expectedweeklyPrg)*100);
      console.log(Percent)
      return(Percent)
   }
  const dayHandler =()=>{
    setWstatus(false);
    setMstatus(false);
  }
  const weekHandler =() => {
    setWstatus(true);
    setMstatus(false);
    let weekPercent = sum(props.workoutsData,7);
    setWeekPrg(weekPercent)
  }

  const monthHandler=()=>{
    setMstatus(true);
    setWstatus(false);
    let monthPercent = sum(props.workoutsData,30);
    setMonthPrg(monthPercent);
  }
  const daysPassedMethod = (date) => {
    let daysPassed = Math.floor(
      Math.abs(date - new Date()) / (1000 * 60 * 60 * 24)
    );
    console.log(daysPassed);
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
  };

  return (
    <div>
       {!WeeklyStatus ? <Button onClick={weekHandler} id="progressButton" variant="secondary">Weekly Progress</Button> : <Button id="progressButton" variant="secondary" onClick={dayHandler}>Daily Progress</Button>}
      {!monthlyStatus ? <Button onClick={monthHandler} id="progressButton" variant="secondary">Monthly Progress</Button>:<Button id="progressButton" variant="secondary" onClick={dayHandler} >Daily Progress</Button>}
      <Container className="progressBarScroll">
        
        {(WeeklyStatus) ? 
        <CircularProgressbar className="circleBar" value={weeklyPrg} maxValue={100} text={`${weeklyPrg}%`} />
          :(monthlyStatus)?
          <CircularProgressbar className="circleBar" value={monthlyPrg} maxValue={100} text={`${monthlyPrg}%`} />
         : props.workoutsData.map((obj, i) => {
          let percent = Math.floor((obj.calBurn / obj.expectedCalBurn) * 100);

          let date = daysPassedMethod(obj.date);

          return (
            <Row xs={2} md={2} lg={2} className="spaceing">
              <Col xs={3} md={3} lg={3}>
                {date}
              </Col>
              <Col xs={9} md={9} lg={9}>
                <ProgressBar
                  variant={
                    percent > 70
                      ? "success"
                      : percent > 55
                      ? "warning"
                      : "danger"
                  }
                  now={percent}
                  label={`${percent}%`}
                  visuallyHidden
                />
              </Col>
              {/* <Col className={} xs={1} md={1} lg={1}>{percent}%</Col> */}
            </Row>
          );
        })}
      </Container>

    </div>
  );
}
export default Progress;
