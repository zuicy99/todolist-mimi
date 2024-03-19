import React, { useEffect, useState } from "react";
import "../../styles/calen/todostyle";
import styled from "@emotion/styled";
import { patchTodo } from "../../api/todo/apitodo";
import { useNavigate } from "react-router-dom";

const TodoInput = props => {
  const item = props.item;
  // console.log(item);
  const [memo, setMemo] = useState(item.todoContent);
  const [edit, setEdit] = useState(props.mode);

  const handleClickEdit = _complete => {
    if (_complete) {
      setEdit(true);
    } else {
      const obj = {
        iuser: props.iuserInfo.iuser,
        itodo: item.itodo,
        todoContent: memo,
      };
      patchTodo(obj, patchSuccess, failFn);
    }
    // 수정 내용 완료
    // if(_수정완료 === false)
  };
  const navigate = useNavigate();
  const failFn = () => {
    alert("잠시 서버가 불안정합니다.\n다시 시도해주세요.");
    navigate("/");
  };
  const patchSuccess = () => {
    // 수정완료
    setEdit(false);
  };

  const handleOnChangeMemo = e => {
    setMemo(e.target.value);
  };

  const handelDelete = () => {
    if (props.onDelete) {
      // onDelete 함수를 호출하여 아이템 삭제
      console.log(item.itodo);
      props.onDelete(item.itodo); // 여기서 item.id는 삭제할 항목의 고유 식별자일 것입니다.
    }
  };

  useEffect(() => {
    setMemo(item.todoContent);
  }, [item]);
  return (
    <div className="todo-list">
      <div className="red-line"></div>
      <p>
        {edit ? (
          <>
            <input
              type="text"
              value={memo}
              onChange={e => {
                handleOnChangeMemo(e);
              }}
            />
            <button
              onClick={() => {
                handleClickEdit(false);
              }}
            >
              완료
            </button>
          </>
        ) : (
          <>
            <span
              onClick={() => {
                handleClickEdit(true);
              }}
            >
              {memo}
              {/* {item.itodo} */}
            </span>
            <button
              onClick={() => {
                handelDelete();
              }}
              className="delet-bt"
            >
              <img src="/images/delete-w.svg" alt="Delete" />
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default TodoInput;
