import React from "react";
import "../../styles/about.css";

const About = props => {
  console.log("iuser: ", props.iuserInfo.iuser);
};

const about = () => {
  return (
    <div className="aboutwrap">
      <div className="service">
        <div className="service_movie">
          <div>
            <iframe
              width="550"
              height="400"
              src="https://www.youtube.com/embed/l9VMBYRVbdI?si=_G-K9aEmt8Gz3KoJ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h1>서비스 시연 영상</h1>
        </div>
      </div>
      <div className="service_introduction">
        <div className="service_fe">
          <p>Front-End</p>
          <ul>
            <div className="b_tag"></div>
            <li>이름: 김주영</li>
            <li>담당파트:인트로 페이지,캘린더 및 투두,카테고리</li>
            <li>
              <a
                href="https://github.com/zuicy99?tab=repositories"
                className="a_tag"
              >
                깃허브
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/2023-12-08-3-8868ca145fbe440fb611dc3aa25c9422"
                className="a_tag"
              >
                (공통)노션
              </a>
              <a
                href="https://www.notion.so/0f430cfabee342fd9e25182b2b9ed216?v=3d11f80134e747068cfb9d953864783f"
                className="a_tag"
              >
                (개인)노션
              </a>
            </li>
            <div className="b_tag"></div>
            <li>이름: 김도현</li>
            <li>담당파트:에러 페이지 및 차트,피그마</li>
            <li>
              <a href="https://github.com/dsa9925" className="a_tag">
                깃허브
              </a>
            </li>
            <li>
              <a
                href="https://navy-sphere-b07.notion.site/8901958a33c446c2b9a33db9c7125970?pvs=4"
                className="a_tag"
              >
                (개인)노션1
              </a>
              <a
                href="https://navy-sphere-b07.notion.site/78a03a12b9f14a60ae85624c8d9c7c7a?pvs=4"
                className="a_tag"
              >
                (개인)노션2
              </a>
            </li>
            <div className="b_tag"></div>
            <li>이름: 송보경</li>
            <li>담당파트:about 페이지 및 이모션,canva </li>
            <li>
              <a
                href="https://github.com/giasong123/mimi.git"
                className="a_tag"
              >
                (공통)깃허브
              </a>
              <a
                href="https://github.com/giasong123?tab=repositories"
                className="a_tag"
              >
                (개인)깃허브
              </a>
            </li>

            <li>
              <a
                href="https://www.notion.so/930adf8c31a544c5a7f510056352c88f?v=191854589ec04ffdab3fefc34823809b&pvs=4"
                className="a_tag"
              >
                노션
              </a>
            </li>
          </ul>
        </div>
        <div className="service_be">
          <p>Back-End</p>
          <ul>
            <div className="b_tag"></div>
            <li>
              <a
                href="https://github.com/joe-in-me/team6_back_end.git"
                className="a_tag"
              >
                (공통)깃허브
              </a>
            </li>
            <li>이름:조현민</li>
            <li>담당파트:투두</li>
            <div className="b_tag"></div>
            <li>이름: 백승준</li>
            <li>담당파트:이모션</li>
            <div className="b_tag"></div>
            <li>이름: 노혜선</li>
            <li>담당파트:유저</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default about;
