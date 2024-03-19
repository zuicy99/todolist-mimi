import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CalenStyle } from "../../styles/calen/calenstyle";
import { TodoRight } from "../../styles/calen/todostyle";
import TodoInput from "../../components/calenders/TodoInput";
import { deleteTodo, getTodoIuser } from "../../api/todo/apitodo";
import { useNavigate, useParams } from "react-router-dom";

const initTodoList = [];
const initChoiceDate = "";
const initGetTodo = {
  emotion: null,
  emotionTag: null,
  todos: [],
};
const initPostTodo = {
  iuser: 7,
  todoContent: "todoContent",
  startDate: "2023-12-20",
  endDate: "2023-12-20",
};
export const CalenPage = () => {
  const { iuser, itodo } = useParams();

  const param = useParams();
  // console.log(param.iuser);

  // 선택된 날짜 state
  const [choiceDate, setChoiceDate] = useState(initChoiceDate);
  // 선택된 날짜의 API 전달
  const [getTodo, setGetTodo] = useState(initGetTodo);
  const [postTodo, setPostTodo] = useState(initPostTodo);

  const [todoList, setTodoList] = useState(initTodoList);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [currentYear, setCurrentYear] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();
  // 0은 현재 -1 이전으로 이동
  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
  };

  // 주어진 연도와 월에 해당하는 월의 총 일수/ +1, 0 현재 월의 마지막날
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 연도와 월의 1일
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateDates = () => {
    const daysInMonth = getDaysInMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
    );
    const firstDayOfWeek = getFirstDayOfMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
    );

    const datesArray = Array.from(
      { length: daysInMonth + firstDayOfWeek },
      (_, i) => {
        if (i < firstDayOfWeek) {
          const prevMonthDays = getDaysInMonth(
            currentMonth.getFullYear(),
            currentMonth.getMonth() - 1,
          );
          return prevMonthDays - firstDayOfWeek + i + 1; // 이전 달의 날짜
        }
        return i - firstDayOfWeek + 1; // 현재 달의 날짜
      },
    );

    // 다음 달의 날짜 추가
    const remainingDays = (7 - ((daysInMonth + firstDayOfWeek) % 7)) % 7;
    for (let i = 0; i < remainingDays; i++) {
      datesArray.push(i + 1); // 다음 달의 날짜
    }

    return datesArray.map((day, index) => (
      <div
        key={index}
        className={`day ${day <= 0 ? "prev disable" : "current"}`}
        onClick={() => {
          // 목록에 보여줄 날짜 Set
          setChoiceDate(
            `${currentMonth.getFullYear()}년 ${
              currentMonth.getMonth() + 1
            }월 ${day}일`,
          );

          // 서버에 보내서 todo 목록 얻기
          getTodoIuser(
            param.iuser,
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            day,
            // setGetTodo,
            setTodoList,
            setCallImageId,
            setCallImageStr,
            failFn,
          );
        }}
      >
        {day > 0 && day}
      </div>
    ));
  };
  const navigate = useNavigate();
  const failFn = () => {
    alert("잠시 서버가 불안정합니다.\n다시 시도해주세요.");
    navigate("/");
  };

  // 투두리스트
  const [callImageStr, setCallImageStr] = useState("");
  const emoImages = [
    `${process.env.PUBLIC_URL}/images/layer1.svg`,
    `${process.env.PUBLIC_URL}/images/layer2.svg`,
    `${process.env.PUBLIC_URL}/images/layer3.svg`,
    `${process.env.PUBLIC_URL}/images/layer4.svg`,
    `${process.env.PUBLIC_URL}/images/layer5.svg`,
  ];
  // const callImageId = getTodo.emotionGrade;
  const [callImageId, setCallImageId] = useState(0);

  // const getTodoListAxio = () => {
  //   // 서버에 get 호출해서 전체 목록받기
  //   setTodoList([
  //     { iuser: iuser, work: "강아지 밥주기" },
  //     { work: "강아지 산책시키기" },
  //     { work: "강아지 운동시키기" },
  //   ]);
  // };

  // const postTodoAddAxio= (){
  //   const list={
  //     iuser:{iuser},
  //     todoContent:"",
  //     startDate:currentMonth.toISOString().split("T")[0],
  //     endDate:currentMonth.toISOString().split("T")[0],
  //   };
  //   postTodoAdd(list,setGetTodo)
  // }
  const handleClickAddTodo = () => {
    if (todoList.length < 10) {
      const arr = [...todoList];
      arr.push({
        itodo: todoList.length + 1,
        todoContent: "할일추가해주세요",
      });
      setTodoList(arr);
      // console.log(arr);
    } else {
      alert("리스트 추가는 10개까지 입니다.");
    }
  };

  const handleDeleteTodo = item => {
    // console.log(handleDeleteTodo);
    deleteTodo(iuser, itodo, item, failFn);
    // setTodoList();
  };
  // console.log(getTodo.emotionGrade);
  return (
    <CalenStyle>
      <div className="left">
        <div className="calendar">
          <div className="month">
            <button className="calen-prev" onClick={handlePrevMonth}>
              <img src="/images/iconleft.svg" alt="Previous Month" />
            </button>
            <div className="date">{`${currentMonth.getFullYear()}년 ${
              currentMonth.getMonth() + 1
            }월 ${selectedDate.getDate()}일`}</div>
            <button className="calen-next" onClick={handleNextMonth}>
              <img src="/images/iconright.svg" alt="" />
            </button>
          </div>

          <div className="week">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          <div className="days">{generateDates()}</div>
        </div>
      </div>
      <div className="center-line"></div>

      <TodoRight>
        <div className="todo-inner">
          <div className="todo-inin">
            <div className="header-todo">
              <p className="todo-date">
                {choiceDate ? choiceDate : "날짜를 선택주세요."}
                {/* 23.12.08 금요일 */}
                {/* {`${currentMonth.getFullYear()}년 ${
                  currentMonth.getMonth() + 1
                }월 `} */}

                <button className="plus-list-bt" onClick={handleClickAddTodo}>
                  +
                </button>
              </p>

              <span className="print-emo">
                <div className="blue-line"></div>
                <img
                  // src={`/images/layer${getTodo.emotionGrade - 1}.svg`}
                  src={`/images/layer${callImageId - 1}.svg`}
                  // alt={`${process.env.PUBLIC_URL}/images/layer${getTodo.emotionGrade}.svg`}
                  alt={`${process.env.PUBLIC_URL}/images/layer${callImageId}.svg`}
                />
                {/* <p>{getTodo.emotionTag}</p> */}
                <p>{callImageStr}</p>
                {/* <div className="emt-line"></div> */}
                {/* <p>{getTodo.hasTodo}</p> */}
              </span>
            </div>
            <div className="hr-center"></div>

            <div className="todo-main">
              <div
                style={{
                  // height: "500px",
                  // background: "red",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
              >
                {todoList.map((item, idx) => {
                  return (
                    <TodoInput
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
            {/* <ul className="todo-list">
              <div className="red-line"></div>
              <p>강아지 밥주기</p>
            </ul>
            <button className="delet-bt">
              <img src="./images/deleten.svg"  alt=""/>
            </button>

            <ul className="todo-list">
              <div className="red-line"></div>
              <p>강아지 밥주기</p>
              <button>
                <img src="./images/deleten.svg"  alt=""/>
              </button>
            </ul> */}
          </div>
        </div>
      </TodoRight>
    </CalenStyle>
  );
};

export default CalenPage;
