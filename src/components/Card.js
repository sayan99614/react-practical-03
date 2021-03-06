import React from "react";

function Card(props) {
  let date = new Date().toString().split(" ");
  function getDay() {
    switch (new Date().getDay()) {
      case 0:
        return "SUNDAY";
      case 1:
        return "MONDAY";
      case 2:
        return "TUESDAY";
      case 3:
        return "WEDNESDAY";
      case 4:
        return "THURSDAY";
      case 5:
        return "FRIDAY";
      case 6:
        return "SATURDAY";
    }
  }
  return (
    <div className="d-flex justify-content-between mt-3 mb-3 sticky bg-white">
      <div className="d-flex justify-content-between">
        <div className="date">{date[2]}</div>
        <div className="d-flex flex-column date-line">
          <div className="fw-bold"> {date[1]}</div>
          <div className="">{date[3]}</div>
        </div>
      </div>
      <div className="day">{getDay()}</div>
    </div>
  );
}

export default Card;
