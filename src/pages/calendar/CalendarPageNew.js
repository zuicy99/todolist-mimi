import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CalenStyle } from "../../styles/calen/calenstyle";
import { TodoRight } from "../../styles/calen/todostyle";
import TodoInput from "../../components/calenders/TodoInput";
import { deleteTodo, getTodoIuser, postTodo } from "../../api/todo/apitodo";
import { useNavigate, useParams } from "react-router-dom";
import { getEmoIuser } from "../../api/emo/apiemo";

import { Calendar, Badge } from "antd";
import moment from "moment/moment";
import dayjs from "dayjs";

const initTodoList = [];

export const CalenPageNew = props => {
  // console.log("iuser: ", props.iuserInfo.iuser);
  const [todoList, setTodoList] = useState(initTodoList);
  // 투두리스트
  const [callImageStr, setCallImageStr] = useState("");
  const emoImages = [
    `${process.env.PUBLIC_URL}/images/layer1.svg`,
    `${process.env.PUBLIC_URL}/images/layer2.svg`,
    `${process.env.PUBLIC_URL}/images/layer3.svg`,
    `${process.env.PUBLIC_URL}/images/layer4.svg`,
    `${process.env.PUBLIC_URL}/images/layer5.svg`,
  ];
  const [callImageId, setCallImageId] = useState(0);

  const handleDeleteTodo = item => {
    // console.log(item.itodo);
    deleteTodo(props.iuserInfo.iuser, item.itodo, deleteSuccess, failFn);
  };
  const deleteSuccess = () => {
    alert("삭제에 성공하였습니다.");
    const gogo = selectedDate2.format("YYYY-MM-DD");
    const dd = gogo.split("-");
    // 서버에 보내서 todo 목록 얻기
    getTodoIuser(
      props.iuserInfo.iuser,
      dd[0],
      dd[1],
      dd[2],
      getTodoIuserSucess,
      failFn,
    );

    getEmoIuser(props.iuserInfo.iuser, dd[0], dd[1], getEmoSuccess, failFn);
  };
  const navigate = useNavigate();
  const failFn = () => {
    alert("잠시 서버가 불안정합니다.\n다시 시도해주세요.");
    navigate("/");
  };

  const getTodoIuserSucess = _data => {
    setTodoList(_data.todos);
    setCallImageId(_data.emotionGrade);
    setCallImageStr(_data.emotionTag);
  };

  useEffect(() => {
    // 화면 로딩시 오늘 날짜를 통해 목록 받기
    var now = moment();
    const dd = now.format("YYYY-MM-DD");
    const ddd = dd.split("-");

    getTodoIuser(
      props.iuserInfo.iuser,
      ddd[0],
      ddd[1],
      ddd[2],
      getTodoIuserSucess,
      failFn,
    );

    getEmoIuser(props.iuserInfo.iuser, ddd[0], ddd[1], getEmoSuccess, failFn);
  }, []);

  // 코드 수정 (2023 12 22)
  const [newContent, setNewContent] = useState("");
  const handleClickAddTodo = () => {
    if (todoList.length >= 10) {
      alert("리스트 추가는 10개까지 입니다.");
      return;
    }
    if (newContent === "") {
      alert("내용을 입력하세요.");
      return;
    }

    const obj = {
      iuser: props.iuserInfo.iuser,
      todoContent: newContent,
      startDate: selectedDate2.format("YYYY-MM-DD"),
      endDate: selectedDate2.format("YYYY-MM-DD"),
    };
    postTodo(obj, postTodoSuccess, failFn);
  };

  const postTodoSuccess = _obj => {
    alert("등록에 성공하였습니다.");
    setNewContent("");
    const gogo = selectedDate2.format("YYYY-MM-DD");
    const dd = gogo.split("-");

    // 서버에 보내서 todo 목록 얻기
    getTodoIuser(
      props.iuserInfo.iuser,
      dd[0],
      dd[1],
      dd[2],
      getTodoIuserSucess,
      failFn,
    );

    getEmoIuser(props.iuserInfo.iuser, dd[0], dd[1], getEmoSuccess, failFn);
  };

  const [isEmoList, setIsEmoList] = useState([]);

  const getEmoSuccess = _data => {
    setIsEmoList(_data);
  };

  // 캘린더 관련
  // 일별 자료 출력하기
  const dateCellRender = value => {
    const selectDate = dayjs(value).format("YYYY-MM-DD");

    // const selectDate = `${value.year()}-${value.month() + 1}-${value.date()}`;

    const findeShowList = isEmoList.filter(item => item.day === selectDate);
    return (
      <ul className="events">
        {findeShowList.map(item => (
          <li
            key={item.day}
            onClick={() => {
              //   showModal(item);
            }}
          >
            {/* emotionTag */}
            {item.emotionTag !== null ? (
              <Badge status="error" text={item.emotionTag} />
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    );
  };

  // 각각의 셀의 날짜를 보고, 정보를 출력하는 역할
  const cellRender = (current, info) => {
    if (info.type === "date") {
      return dateCellRender(current);
    } else if (info.type === "month") {
      return dateCellRender(current);
    }
    return info.originNode;
  };

  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateSelect = value => {
    const gogo = value.format("YYYY-MM-DD");
    const dd = gogo.split("-");

    // 서버에 보내서 todo 목록 얻기
    getTodoIuser(
      props.iuserInfo.iuser,
      dd[0],
      dd[1],
      dd[2],
      getTodoIuserSucess,
      failFn,
    );
    setSelectedDate2(value);
  };

  useEffect(() => {
    setSelectedDate2(dayjs());
  }, []);

  // 이전 달의 데이터 자료 불러오는 코드
  const onPanelChange = value => {
    const selectDate = dayjs(value).format("YYYY-MM-DD");
    const ddd = selectDate.split("-");
    getTodoIuser(
      props.iuserInfo.iuser,
      ddd[0],
      ddd[1],
      ddd[2],
      getTodoIuserSucess,
      failFn,
    );

    getEmoIuser(props.iuserInfo.iuser, ddd[0], ddd[1], getEmoSuccess, failFn);
  };

  return (
    <CalenStyle>
      <div className="left">
        <p>
          {selectedDate2
            ? selectedDate2.format("YYYY-MM-DD")
            : "No date selected"}
        </p>
        <div className="calendar">
          <Calendar
            cellRender={cellRender}
            onSelect={handleDateSelect}
            onPanelChange={onPanelChange}
            value={selectedDate2}
          />
        </div>
      </div>
      <TodoRight>
        <div className="center-line"></div>
        <div className="todo-inner">
          <div className="todo-inin">
            <div className="header-top">
              <p className="todo-date">
                {selectedDate2
                  ? selectedDate2.format("YYYY-MM-DD")
                  : "날짜를 선택주세요."}
              </p>

              <span className="print-emo">
                <img
                  src={`/images/layer${callImageId - 1}.svg`}
                  alt={`${process.env.PUBLIC_URL}/images/layer${callImageId}.svg`}
                />
                <p>{callImageStr}</p>
              </span>
            </div>

            <div className="list-add">
              <div className="todoinput">
                <input
                  type="text"
                  value={newContent}
                  placeholder="일정을 입력해주세요"
                  onChange={e => {
                    setNewContent(e.target.value);
                  }}
                />

                <button className="plus-list-bt" onClick={handleClickAddTodo}>
                  +
                </button>
              </div>

              {/* <div className="hr-center"></div> */}

              <div className="todo-main">
                <div
                  style={{
                    overflowX: "hidden",
                    overflowY: "auto",
                  }}
                >
                  {todoList.map((item, idx) => {
                    return (
                      <TodoInput
                        iuserInfo={props.iuserInfo}
                        key={idx}
                        item={item}
                        mode={false}
                        onDelete={() => {
                          handleDeleteTodo(item);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TodoRight>
    </CalenStyle>
  );
};

export default CalenPageNew;
