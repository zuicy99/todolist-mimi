import styled from "@emotion/styled";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = props => {
  const iuserInfo = props.iuserInfo;
  const navigate = useNavigate();
  const LayPage = styled.div`
    width: 114px;
    min-height: 960px;
    display: flex;
    overflow-y: hidden;
    /* background-color: hotpink; */
    .nav {
      position: relative;
      display: flex;
      width: 114px;
      height: 100%;
      background-color: #f1f1f1;
      /* text-align: center; */
    }

    .nav-img {
      position: absolute;
      text-align: center;
      margin-top: 150px;
      margin-left: 38px;
    }
    .nav-img img {
      /* text-align: center; */
      display: block;
      width: 33px;
      height: 30px;
      margin-top: 60px;
      /* padding-top: 20px; */
      /* margin-left: 34px; */
      cursor: pointer;
    }

    .nabout-icon {
      position: relative;
    }

    .nabout-icon img {
      position: relative;
      width: 33px;
      height: 30px;
      margin-top: 750px;
      margin-left: 35px;
    }
    .nabout-icon p {
      position: absolute;
      margin-left: 50%;
    }
    .logout {
      position: absolute;
      /* font-weight: 900; */
      /* font-size: 10px; */
      top: 89%;
      align-items: center;
      left: 29%;
    }
    .logout img {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  `;

  const goRouter = _path => {
    if (iuserInfo.userNickName === "") {
      alert("로그인을 해주세요.");
      navigate("/");
      return;
    }
    if (_path === "/feel") {
      if (iuserInfo.hasEmotion === 1) {
        alert(
          "하루에 한번만 감정등록이 가능합니다. \n이미 감정을 등록했습니다.",
        );
        navigate("/calendar");
        return;
      }
    }
    navigate(_path);
  };
  return (
    <LayPage>
      <div className="nav">
        <div className="nabout-icon">
          <Link to="/about">
            <img src="/images/nabout.svg" alt="ABOUT" />
            <p>ABOUT</p>
          </Link>
        </div>
        <div
          className="logout"
          onClick={() => {
            window.location.href = "/";
            // navigate("/");
          }}
        >
          <img src="/images/logout.svg" alt="LOGOUT" />
          <p>LOGOUT</p>
        </div>

        <div className="nav-img">
          <Link to="/">
            <img src="/images/nintro.svg" alt="첫화면" />
            <p>첫화면</p>
          </Link>
          <div
            onClick={() => {
              goRouter("/feel");
            }}
          >
            <img src="/images/ncheck.svg" alt="감정상태" />
            <p>감정상태</p>
          </div>
          <div
            onClick={() => {
              goRouter("/calendar");
            }}
          >
            <img src="/images/ncalen.svg" alt="캘린더" />
            <p>캘린더</p>
          </div>
          <div
            onClick={() => {
              goRouter("/chart");
            }}
          >
            <img src="/images/nchart.svg" alt="차트" />
            <p>차트</p>
          </div>
        </div>
      </div>
    </LayPage>
  );
};

export default Header;
