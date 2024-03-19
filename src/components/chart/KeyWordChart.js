import { useEffect, useRef } from "react";

const KeyWordChart = props => {
  const good = props.good;
  const normal = props.normal;
  const bad = props.bad;
  const step = 100 / 7;

  const goodRef = useRef(null);
  const normalRef = useRef(null);
  const badRef = useRef(null);

  useEffect(() => {
    goodRef.current.style.width = step * good + "%";
    normalRef.current.style.width = step * normal + "%";
    badRef.current.style.width = step * bad + "%";
  });

  return (
    <div className="feel-keywordbox">
      <div className="keyword-title">
        <p>이번주 키워드 차트</p>
      </div>
      <div className="keyword-inner">
        <ul>
          <li>
            <div className="keyword_left">
              <div>
                <img src="/images/sun.svg" alt=""></img>
              </div>
              <p>긍정</p>
            </div>
            <div className="keyword_right">
              <span className="barGood" ref={goodRef}></span>
              {/* <img src="/images/sunbar.svg" alt="" ref={goodRef} /> */}
              <p>{good}일</p>
            </div>
          </li>

          <li>
            <div className="keyword_left">
              <div>
                <img src="/images/cloud.svg" alt=""></img>
              </div>
              <p>보통</p>
            </div>
            <div className="keyword_right">
              <span className="barNormal" ref={normalRef}></span>
              {/* <img src="/images/cloudbar.svg" alt="" ref={normalRef} /> */}
              <p>{normal}일</p>
            </div>
          </li>

          <li>
            <div className="keyword_left">
              <div>
                <img src="/images/rain.svg" alt=""></img>
              </div>
              <p>부정</p>
            </div>
            <div className="keyword_right">
              <span className="barBad" ref={badRef}></span>
              {/* <img src="/images/rainbar.svg" alt="" ref={badRef} /> */}
              <p>{bad}일</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyWordChart;
