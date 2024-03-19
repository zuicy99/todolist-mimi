import styled from "@emotion/styled";
export const IntroPage = styled.div`
  header {
    position: relative;
    display: flex;
    height: 394px;
    margin-right: 23px;
    justify-content: center;
  }

  header p {
    height: 109px;
    font-size: 80px;
  }

  .introtitl {
    color: #00042d;
    margin-top: 90px;
  }
  .introtitr {
    color: white;
    margin-top: 90px;
  }

  .intro-l {
    position: relative;
    display: block;
    /* width: 720px; */
    width: 50%;
    float: left;
    text-align: center;
  }

  .intro-l img {
    width: 85px;
    height: 86px;
  }
  .intro-l ul p {
    display: block;
    color: #989898;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .intro-log {
    display: block;
    margin-top: 18px;
  }

  .intro-log input {
    width: 529px;
    height: 53px;
    font-size: 25px;
    color: #a3a3a3;
    border: 1px solid #afafaf;
    margin-top: 22px;
    padding-left: 15px;
  }
  .intro-log input::placeholder {
    font-size: 25px;
    color: #a3a3a3;
    padding-left: 0px;
    margin-top: 100px;
  }

  .intro-log select {
    margin-top: 22px;
    width: 530px;
    height: 53px;
    color: #a3a3a3;
    font-size: 25px;
    padding-left: 10px;
    border: 1px solid #afafaf;
  }
  .intro-log button {
    margin-top: 22px;
    margin-left: 485px;
    width: 45px;
    height: 29px;
    border-radius: 4px;
    border: 1px solid #dfdfdf;
    background: #fff;
    box-shadow: 0px 1px 5.3px 0px rgba(0, 0, 0, 0.25);

    color: #9a9a9a;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
  }

  .intro-r {
    position: relative;

    /* width: 720px; */
    width: 50%;

    text-align: center;
    float: right;
  }

  .intro-r img {
    width: 85px;
    height: 86px;
  }
  .intro-r p {
    color: #fff;

    font-family: JejuMyeongjo;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4;
    padding-top: 3.25rem;
  }
`;
