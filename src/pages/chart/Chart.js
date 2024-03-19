import React, { useEffect, useState } from "react";

import "../../styles/chart/chart.css";

import KeyWordChart from "../../components/chart/KeyWordChart";
import LineChart from "../../components/chart/LineChart";
import { getChart } from "../../api/emo/apichart";
import OneWeekEmo from "../../components/chart/OneWeekEmo";
import { useNavigate } from "react-router-dom";

const Chart = props => {
  // console.log("iuser: ", props.iuserInfo.iuser);
  // 화면에 보여줄 서버 데이터 관리
  const [chartData, setChartData] = useState(null);
  const [emoChart, setEmoChart] = useState([]);
  // 사용자 이름
  const [userName, setUserName] = useState(props.iuserInfo.userNickName);

  const getChartAction = () => {
    // console.log("자료호출");
    getChart(props.iuserInfo.iuser, setChartData, setEmoChart, failFn);
  };

  const navigate = useNavigate();
  const failFn = () => {
    alert("잠시 서버가 불안정합니다.\n다시 시도해주세요.");
    navigate("/");
  };

  useEffect(() => {
    getChartAction();
  }, []);

  return (
    <div className="chart-page">
      <div className="main-box">
        <div className="box-inner">
          {chartData ? (
            <OneWeekEmo weekData={chartData.emoChart} userName={userName} />
          ) : (
            ""
          )}
          <hr className="half-line"></hr>
          {chartData ? <LineChart lineData={emoChart}></LineChart> : ""}
          <img className="arrow" src="/images/nextbotton.png" alt="" />
          <div className="line-chartkeyword">
            <p>우울감</p>
          </div>
          {chartData ? (
            <KeyWordChart
              good={chartData.good}
              normal={chartData.normal}
              bad={chartData.bad}
            ></KeyWordChart>
          ) : (
            ""
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default Chart;
