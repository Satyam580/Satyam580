import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./progressTable.css";
function ProgressTable(props) {
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
    <div className="tableScroll">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>DATE</th>
            <th>Plan</th>
            <th>Actual Cal Burn</th>
            <th>Expected Cal Burn</th>
          </tr>
        </thead>

        <tbody>
          {props.workoutsData.map((obj, i) => {
            let date = daysPassedMethod(obj.date);
            return (
              <tr>
                <td>{date}</td>
                <td>{obj.plan}</td>
                <td>{obj.calBurn}</td>
                <td>{obj.expectedCalBurn}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default ProgressTable;
