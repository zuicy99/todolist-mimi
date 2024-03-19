import axios from "axios";

export const getChart = async (iuser, setChartData, setEmoChart, failFN) => {
  try {
    const res = await axios.get(`/api/emo/chart/${iuser}`);
    // console.log(res.data);
    setChartData(res.data);
    // Novo 데이터 구성을 참조
    const data = {
      data: [
        {
          id: "Feel",
          color: "hsl(326, 70%, 50%)",
          data: [
            {
              x: "월",
              y: res.data.emoChart[0].emotionGrade,
            },
            {
              x: "화",
              y: res.data.emoChart[1].emotionGrade,
            },
            {
              x: "수",
              y: res.data.emoChart[2].emotionGrade,
            },
            {
              x: "목",
              y: res.data.emoChart[3].emotionGrade,
            },
            {
              x: "금",
              y: res.data.emoChart[4].emotionGrade,
            },
            {
              x: "토",
              y: res.data.emoChart[5].emotionGrade,
            },
            {
              x: "일",
              y: res.data.emoChart[6].emotionGrade,
            },
          ],
        },
      ],
    };

    // console.log("서버자료 변환 ", data);
    setEmoChart(data);
  } catch (error) {
    // console.log(error);
    // alert("서버 상태가 불안정합니다. 잠시 후 시도해 주세요.");
    setChartData({
      emoChart: [
        {
          emotionGrade: 5,
          dayOfTheWeek: 0,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 1,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 2,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 3,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 4,
        },
        {
          emotionGrade: 3,
          dayOfTheWeek: 5,
        },
        {
          emotionGrade: 1,
          dayOfTheWeek: 6,
        },
      ],
      good: 3,
      normal: 4,
      bad: 0,
    });
    // Novo 데이터 구성을 참조
    const data = {
      data: [
        {
          id: "Feel",
          color: "hsl(326, 70%, 50%)",
          data: [
            {
              x: "월",
              y: 3,
            },
            {
              x: "화",
              y: 3,
            },
            {
              x: "수",
              y: 3,
            },
            {
              x: "목",
              y: 2,
            },
            {
              x: "금",
              y: 1,
            },
            {
              x: "토",
              y: 4,
            },
            {
              x: "일",
              y: 2,
            },
          ],
        },
      ],
    };

    // console.log("서버자료 변환 ", data);
    setEmoChart(data);
    failFN();
  }
};
