import styled from "@emotion/styled";

export const TodoRight = styled.div`
  width: 50%;
  min-height: 960px;
  display: flex;
  overflow-y: hidden;

  .todo-inner {
    position: relative;
    display: block;
    width: 80%;
    /* min-height: 960px; */
    /* height: 800px; */
    /* opacity: 0.3; */
    /* background: #00042d; */
    /* background: aqua; */
    top: 50%;
    left: 50%;
    /* margin: auto; */

    transform: translate(-50%, -50%);
    /* border-radius: 30px; */
    align-items: center;
  }

  .todo-inin {
    /* width: 80%; */
    /* height: 850px; */
    /* height: 10px; */
    margin: auto;
    /* padding-top: 20px; */
    /* background-color: aqua; */
  }
  .header-todo {
    /* margin-top: 10px; */
    /* margin-bottom: 20px; */
    /* padding-top: 10px; */
    /* padding-bottom: 40px; */
  }
  /* 수정 */
  .header-top {
    width: 100%;
    height: 150px;
    background: #00042d;
    border-radius: 20px;
    padding-left: 30px;
    padding-top: 13px;
    margin-bottom: 15px;
    margin-top: 70px;
  }
  .todo-date {
    /* margin-left: 10px; */
  }

  .print-emo {
    display: flex;
    gap: 10px;
    align-items: center;
    padding-top: 20px;
  }
  .print-emo p {
    color: #ffffff;
  }

  .blue-line {
    width: 4px;
    height: 31px;
    background-color: #0118e3;
  }
  .print-emo img {
    width: 30px;
    height: 30px;
  }
  .print-emo p {
    font-size: 20px;
  }

  /* 수정 */
  .list-add {
    width: 100%;
    /* height: calc(100% - 20%); */
    height: 650px;
    background: #00042d;
    border-radius: 20px;
    padding-left: 30px;
    padding-top: 13px;
    /* margin-bottom: 40px; */
  }
  .todoinput {
    display: flex;
    /* background-color: #ffffff; */
    align-items: center;
    margin-top: 10px;
  }
  .plus-list-bt {
    /* display: flex; */
    border: none;
    /* border: solid 1px; */
    background: transparent;
    cursor: pointer;
    font-weight: 600;
    font-size: 30px;
    color: #ffffff;
    /* padding-top: 20px; */
    padding-bottom: 5px;
    margin-left: 10px;
  }
  .todoinput input {
    width: 250px;
    height: 25px;
    border: 5px solid #ffffff;
    border-radius: 5px;
  }
  .emt-line {
    height: 20px;
    width: 2px;
    background-color: #000;
  }
  .hr-center {
    width: 100%;
    height: 2px;
    /* background-color: #0118e3; */
    /* background-color: #ffffff; */
    background-color: #eec759;

    margin: auto;
    /* margin-top: 10px; */
    /* opacity: 0.6; */
    margin-top: 10px;
  }

  .todo-date {
    padding-top: 20px;
    display: flex;
    color: #ffffff;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-content: space-between;
    align-items: center;
  }

  .todo-list {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 25px;
    gap: 10px;
  }

  .todo-list p {
    font-size: 20px;
    color: #ffffff;
  }

  .delet-bt {
    border: none;
    /* border: solid 1px; */
    background: transparent;
    cursor: pointer;
    /* border: #ffffff solid 1px; */
    margin-left: 10px;
    cursor: pointer;
  }
  .delet-bt img {
    width: 30px;
    height: 30px;
  }

  .red-line {
    width: 4px;
    height: 31px;
    background-color: #eec759;
  }
`;
