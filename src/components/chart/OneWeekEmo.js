const OneWeekEmo = props => {
  const weekData = props.weekData;
  const userName = props.userName;
  // console.log("weekData", weekData);
  const dayArr = ["월", "화", "수", "목", "금", "토", "일"];

  console.log("weekData :", weekData);
  return (
    <div className="feel-facebox">
      <div className="feel-title">
        <p>
          <strong>{userName}</strong>님은 한 주를 이렇게 보냈어요
        </p>
      </div>
      <div className="feel-face">
        <ul>
          {weekData.map((item, index) => (
            <li key={index}>
              {item.emotionGrade === 1 && (
                <img src="/images/layer0.svg" alt="" />
              )}
              {item.emotionGrade === 2 && (
                <img src="/images/layer1.svg" alt="" />
              )}
              {item.emotionGrade === 3 && (
                <img src="/images/layer2.svg" alt="" />
              )}
              {item.emotionGrade === 4 && (
                <img src="/images/layer3.svg" alt="" />
              )}
              {item.emotionGrade === 5 && (
                <img src="/images/layer4.svg" alt="" />
              )}
              <p>{dayArr[index]}요일</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OneWeekEmo;
