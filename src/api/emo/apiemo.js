import axios from "axios";

export const postEmo = async (
  iuser,
  emoGrade,
  emoTag,
  failEmo,
  successNext,
  failFN,
) => {
  try {
    const emoData = {
      iuser: iuser,
      emoGrade: emoGrade,
      emoTag: emoTag,
    };

    const res = await axios.post("/api/emo", emoData);
    // console.log(res.data);
    successNext();
  } catch (error) {
    // console.log(error);
    // alert("서버가 불안정합니다. 잠시 뒤 다시 시도해 주세요.");
    failEmo();

    failFN();
  }
};

export const getEmoIuser = async (
  iuser,
  year,
  month,
  getEmoSuccess,
  failFN,
) => {
  // console.log("getEmoIuser");

  try {
    const query = `/api/emo/${iuser}?y=${year}&m=${month}`;
    const res = await axios.get(query);
    // console.log(res.data);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      getEmoSuccess(res.data);
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

    failFN();
  }
};
