import axios from "axios";
import { SERVER_URL } from "../config";

export const getTodoIuser = async (
  iuser,
  year,
  month,
  day,
  getTodoIuserSucess,
  failFN,
) => {
  // console.log("getTodoIuser");

  try {
    const query = `/api/todo/${iuser}?y=${year}&m=${month}&d=${day}`;
    // const query = `/api/todo/${7}?y=${2023}&m=${12}&d=${21}`;
    // /api/todo/7?y=2023&m=12&d=21/
    const res = await axios.get(query);
    // console.log("할일 목록 서버 데이터 :", res.data);

    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      // console.log("데이터 정상 : ", res.data.todos);
      getTodoIuserSucess(res.data);
    } else {
      // 프론트는 요청을 잘못했나?
      // 백엔드에서 값의 종류나 단어를 바꿨나?
      alert("잘못된 요청입니다.");
    }
  } catch (error) {
    // console.log(error);
    // alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
    // 샘플 즉, 서버 오류시 샘플 데이터로 작업하기
    // {"emotion":null,"emotionTag":null,"todos":[]}
    const sampleData = {
      todos: [
        {
          itodo: 130,
          todoContent: "Morbi non lectus.",
          startDate: "2023-12-21",
          endDate: "2023-12-21",
          startTime: "00:00:00",
          endTime: "23:59:59",
          repeatEndDate: null,
          repeatType: null,
          repeatNum: null,
        },
        {
          itodo: 187,
          todoContent:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          startDate: "2023-12-21",
          endDate: "2023-12-21",
          startTime: "00:00:00",
          endTime: "23:59:59",
          repeatEndDate: null,
          repeatType: null,
          repeatNum: null,
        },
      ],
      emotionGrade: 5,
      emotionTag: "기쁜",
    };
    getTodoIuserSucess(sampleData);

    failFN();
  }
};

export const patchTodo = async (obj, patchSuccess, failFN) => {
  // console.log("patchTodo");
  try {
    const res = await axios.patch("/api/todo", obj);
    // console.log(res.data);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      patchSuccess(res.data);
    } else {
      // 프론트는 요청을 잘못했나?
      // 백엔드에서 값의 종류나 단어를 바꿨나?
      alert("잘못된 요청입니다.");
    }
  } catch (error) {
    // console.log(error);
    // alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");

    failFN();
  }
};

export const deleteTodo = async (iuser, itodo, deleteSuccess, failFN) => {
  // console.log("deleteTodo");
  try {
    const _url = `/api/todo/${iuser}/${itodo}`;
    // console.log(_url);

    // /{iuser}/{itodo}?iuser=1&itodo=1
    // `/api/todo/${iuser}/${itodo}?iuser=${iuser}&itodo=${itodo}`,
    const res = await axios.delete(_url);
    // console.log(res.data);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      deleteSuccess(res.data);
    } else {
      // 프론트는 요청을 잘못했나?
      // 백엔드에서 값의 종류나 단어를 바꿨나?
      alert("잘못된 요청입니다.");
    }
  } catch (error) {
    // console.log(error);
    // alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");

    failFN();
  }
};

export const postTodo = async (obj, postTodoSuccess, failFN) => {
  // console.log("postTodo");
  try {
    const res = await axios.post(`/api/todo`, obj);
    // console.log(res.data);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      postTodoSuccess(res.data.result);
    } else {
      // 프론트는 요청을 잘못했나?
      // 백엔드에서 값의 종류나 단어를 바꿨나?
      alert("잘못된 요청입니다.");
    }
  } catch (error) {
    // console.log(error);
    // alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");

    failFN();
  }
};

// post 바디
// {
//   "iuser": 1,
//   "todoContent": "todoContent",
//   "startDate": "2023-12-21",
//   "endDate": "2023-12-21"
// }

// export const postTodoIuser = async (
//   iuser,
//   todoContent,
//   startDate,
//   endDate,
//   setGetTodo,
// ) => {
//   console.log("postTodoIuser");

//   try {
//     const res = await axios.post(`/api/todo`);
//     console.log(res.data);
//     setPostTodo(res.data);
//   } catch (error) {
//     console.log(error);
//     alert("서버가 불안정합니다. 잠시 후 실행해 주세요.");
//     // 샘플 즉, 서버 오류시 샘플 데이터로 작업하기
//     // {"emotion":null,"emotionTag":null,"todos":[]}
//   }
// };
