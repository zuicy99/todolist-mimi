import React from "react";
import { TodoRight } from "../../styles/calen/todostyle";

const CalendarTodo = () => {
  return (
    <TodoRight>
      <div className="center-line"></div>
      <div className="todo-inner">
        <div className="todo-inin">
          <div className="header-todo">
            <p className="todo-date">
              {selectedDate2
                ? selectedDate2.format("YYYY-MM-DD")
                : "날짜를 선택주세요."}
              {/* 23.12.08 금요일 */}
              {/* {`${currentMonth.getFullYear()}년 ${
                currentMonth.getMonth() + 1
              }월 `} */}
            </p>

            <span className="print-emo">
              {/* <div className="blue-line"></div> */}
              <img
                src={`/images/layer${callImageId - 1}.svg`}
                alt={`${process.env.PUBLIC_URL}/images/layer${callImageId}.svg`}
              />
              <p>{callImageStr}</p>
              {/* <div className="emt-line"></div> */}
              {/* <p>{getTodo.hasTodo}</p> */}
            </span>
            <div className="todoinput">
              <input
                type="text"
                value={newContent}
                placeholder="입력해주세요"
                onChange={e => {
                  setNewContent(e.target.value);
                }}
              />

              <button className="plus-list-bt" onClick={handleClickAddTodo}>
                +
              </button>
            </div>
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
              {/* {getTodo.todos.map((item, idx) => {
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
              })} */}
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
    </TodoRight>
  );
};

export default CalendarTodo;
