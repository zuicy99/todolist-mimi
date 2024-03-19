import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
// import Calendar from "./pages/calendar/CalenPage";
import Calendar from "./pages/calendar/CalendarPageNew";
// import Calendar2 from "./pages/calendar/CalendarPageNew";
import Chart from "./pages/chart/Chart";
import Feel from "./pages/feel/Feel";
import Intro from "./pages/intro/Intro";

import { Wrap } from "./styles/basic";
import Header from "./components/Header";
import ErrorPage from "./pages/errorpage/ErrorPage";

const initUserInfo = { iuser: 0, result: 0, userNickName: "" };
const App = () => {
  const [iuserInfo, setIuserInfo] = useState(initUserInfo);
  const mainStyle = {
    width: "calc(100% - 114px)",
  };
  return (
    <Wrap>
      <Header iuserInfo={iuserInfo} setIuser={setIuserInfo}></Header>
      <main style={mainStyle}>
        <Routes>
          {iuserInfo.userNickName === "" ? (
            <Route
              path="/"
              element={<Intro iuserInfo={iuserInfo} setIuser={setIuserInfo} />}
            />
          ) : (
            <Route path="/" element={<Calendar iuserInfo={iuserInfo} />} />
          )}

          <Route path="/about" element={<About iuserInfo={iuserInfo} />} />

          {/* <Route
            path="/calendar/:iuser"
            element={<Calendar iuserInfo={iuserInfo} />}
          /> */}
          <Route
            path="/calendar"
            element={<Calendar iuserInfo={iuserInfo} />}
          />

          <Route path="/chart" element={<Chart iuserInfo={iuserInfo} />} />
          <Route path="/feel" element={<Feel iuserInfo={iuserInfo} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Wrap>
  );
};

export default App;
