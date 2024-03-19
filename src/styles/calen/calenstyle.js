import styled from "@emotion/styled";

export const CalenStyle = styled.div`
  min-width: 1024px;
  min-height: 960px;
  display: flex;
  overflow-y: hidden;

  .left {
    width: 40%;
    height: 100%;
    /* background-color: aqua; */
    margin: auto;
    background: #00042d;
  }
  .left p {
    color: white;
    font-size: 20px;
    margin-left: 10px;
  }
  .calendar {
  }

  .calendar .month {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    font-size: 2rem;
    gap: 30px;
    background-color: blue;
    padding: 50px;
  }

  .calendar .month .calen-prev,
  .calendar .month .calen-next {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }

  .calendar .week {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    padding: 0 110px;
  }
  .calendar .week div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .calendar .days {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 60px;
    font-size: 2rem;
  }
  .calendar .days .day {
    width: 14.28%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #222b7c;
    /* justify-content: center; */
    padding-bottom: 50px;
  }

  .calendar .day::before {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
    /* background: #222b7c; */
    /* opacity: 0.5; */
  }

  .calendar .day:hover::before {
    background: #222b7c;
    opacity: 0.5;
  }

  .calendar .days .today {
    font-size: 3rem;
  }

  .calendar .days .event {
    position: relative;
  }

  .calendar .days .event::after {
    content: "";
    position: absolute;
    width: 30%;
    height: 7px;
    /* background-color: red; */
    border-radius: 30px;
    left: 50%;
    bottom: 40%;
    transform: translateX(-50%);
  }

  .center-line {
    width: 2px;
    height: 100%;
    /* background-color: red; */
    background: #00042d;
    opacity: 0.5;
  }
`;
