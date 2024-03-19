import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/errorpage/error.css";

const ErrorPage = () => {
  const LayOutPage = styled.div`
    min-height: 960px;
    display: flex;
    overflow-y: hidden;
    /* background-color: hotpink; */
    .nav {
      position: relative;
      display: flex;
      height: 100%;
      background-color: #f1f1f1;
      /* text-align: center; */
    }

    .nav-img {
      position: absolute;
      text-align: center;
      margin-top: 200px;
      margin-left: 38px;
    }
    .nav-img img {
      /* text-align: center; */
      display: block;
      width: 33px;
      height: 30px;
      margin-top: 67px;
      /* margin-left: 34px; */
    }

    .nabout-icon {
      position: relative;
    }

    .nabout-icon img {
      position: relative;
      width: 33px;
      height: 30px;
      margin-top: 800px;
      margin-left: 35px;
    }
    .nabout-icon p {
      position: absolute;
      margin-left: 50%;
    }
  `;
  return (
    <LayOutPage>
      <div className="error-wap">
        <div className="error-mainbox">
          <div className="error-title">
            <h1>해당 페이지를 찾을 수 없습니다.</h1>
            <img src="/images/logob.png" alt=""></img>
          </div>

          <hr></hr>
          <div className="error-middle">
            <p>원하시는 결과를 찾을 수 없습니다.</p>
            <p>올바른 URL을 입력하였는지 확인하세요.</p>
          </div>
          <Link to="/">
            <input
              type="Button"
              value={"첫 페이지로"}
              className="error-button"
            ></input>
          </Link>
        </div>
      </div>
    </LayOutPage>
  );
};

export default ErrorPage;
