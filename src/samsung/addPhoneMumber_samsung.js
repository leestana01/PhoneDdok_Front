import React, { useState } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleStartButtonClick = () => {
    setCurrentPage(2);
  };

  const handleNextButtonClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePracticeButtonClick = () => {
    setCurrentPage(6);
  };

  const handleAddNumberButtonClick = () => {
    setCurrentPage(8);
  };

  const handleLevelUpButtonClick = () => {
    setCurrentPage(9);
  };

  const handlePractice2ButtonClick = () => {
    setCurrentPage(7);
  };

  const handlePractice3ButtonClick = () => {
    setCurrentPage(10);
  };

  const [inputValues, setInputValues] = useState({
    lastName: "",
    firstName: "",
    workplace: "",
    phoneNumber: "",
  });
  const [isInputNotEmpty, setInputNotEmpty] = useState(false);
  const [showWellDone, setShowWellDone] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setInputNotEmpty(
      value.trim() !== "" ||
        inputValues.firstName.trim() !== "" ||
        inputValues.workplace.trim() !== "" ||
        inputValues.phoneNumber.trim() !== ""
    ); // 입력 값이 있는지 확인
  };
  const handleCompleteButtonClick = () => {
    setShowWellDone(true);
    setCurrentPage(9); // You can change this to the desired page
  };

  return (
    <div className="screen_shot_iphone">
      <button type="button" className="back_btn">
        <img src="/img/🦆 icon _arrow back ios_.png" alt="back_btn" />
      </button>
      <div className="voice_btn">
        <p>AI 보이스 켜짐</p>
        <div className="wrapper">
          <input type="checkbox" id="switch" />
          <label htmlFor="switch" className="switch_label">
            <span className="onf_btn"></span>
          </label>
        </div>
      </div>
      <div className="navi_bar">
        <div>
          <button className="menuBtn" type="button">
            <img src="/img/home.png" alt="homeNoneSelect" />
            <img
              src="/img/home1.png"
              alt="homeSelect"
              style={{ display: "none" }}
            />
          </button>
        </div>
        <div>
          <button className="menuBtn" type="button">
            <img src="/img/menu.png" alt="menuNoneSelect" />
            <img
              src="/img/menu1.png"
              alt="menuSelect"
              style={{ display: "none" }}
            />
          </button>
        </div>
        <div>
          <button className="menuBtn" type="button">
            <img src="/img/check.png" alt="checkNoneSelct" />
            <img
              src="/img/check1.png"
              alt="checkSelct"
              style={{ display: "none" }}
            />
          </button>
        </div>
        <div>
          <button className="menuBtn" type="button">
            <img src="/img/user.png" alt="userNoneSelect" />
            <img
              src="/img/user1.png"
              alt="userSelect"
              style={{ display: "none" }}
            />
          </button>
        </div>
      </div>
      {currentPage === 1 && (
        <div className="page1">
          <img src="/img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>"연락처 추가 및 삭제하기"</b>를
            배워봐요!
          </p>
          <button className="startBtn" onClick={handleStartButtonClick}>
            시작하기
          </button>
        </div>
      )}
      {currentPage === 2 && (
        <div className="page2">
          <p>모든 사람들의 휴대폰 번호를 다 외우기 정말 어려워요.</p>
          <p>그래서 휴대폰에는 연락처를 추가하고 삭제하는 기능이 있답니다.</p>
          <p>연락처를 추가하는 법부터 배워볼까요?</p>
          <button
            className="nextBtn"
            type="button"
            onClick={handleNextButtonClick}
          >
            <img src="/img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}
      {currentPage === 3 && (
        <div className="page3">
          <img className="exImg" src="/img/callApp.jpg" alt="callApp" />
          <p>
            먼저 전화 앱으로 들어가봅시다. 하단 메뉴에서 연락처를 클릭합니다.
          </p>
          <div>
            <button
              className="nextBtn"
              type="button"
              onClick={() => setCurrentPage(4)}
            >
              <img src="/img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}
      {currentPage === 4 && (
        <div className="page4">
          <img className="exImg2" src="/img/addNumber.jpg" alt="addNumber" />
          <p>
            여기서 <b style={{ color: "#007bff" }}>우측 상단의 + 버튼</b>을
            누르면
            <br />새 연락처를 추가할 수 있어요!
          </p>
          <p>
            성, 이름, 전화번호를 입력하고 완료 버튼을 누르면
            <br />
            전화번호 추가가 완료됩니다!
          </p>
          <div>
            <button
              className="nextBtn"
              type="button"
              onClick={() => setCurrentPage(5)}
            >
              <img src="/img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}
      {currentPage === 5 && (
        <div className="page5" style={{ position: "relative", top: "-90px" }}>
          <p>이번에는 전화번호를 삭제해볼게요!</p>
          <p>
            이전과 동일하게 연락처에 들어가서 삭제하고 싶은 사람의 이름을
            검색합니다.
          </p>
          <img className="exImg2" src="/img/editImg.jpg" alt="eidtImg" />
          <p>
            해당 사람의 이름을 클릭하고 우측 상단에{" "}
            <b style={{ color: "#007bff" }}>편집</b>이라고 쓰여진 부분을
            클릭해줍니다.
          </p>
          <img className="exImg2" src="/img/deleteImg.jpg" alt="deleteImg" />
          <p>
            아래로 내리다 보면 있는 연락처 삭제 버튼을 클릭해주고 연락처 삭제
            버튼을 한 번 더 클릭해주면 삭제가 완료 됩니다!
          </p>
          <div>
            <button
              className="exBtn"
              type="button"
              onClick={handlePracticeButtonClick}
            >
              연습하러 가기
            </button>
            <button
              className="startBtn"
              type="button"
              onClick={handleLevelUpButtonClick}
            >
              종료하기
            </button>
          </div>
        </div>
      )}
      {currentPage === 6 && (
        <div className="practicePage1">
          <img src="/img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>"연락처 추가하기"</b>를 연습해봐요!
          </p>
          <button className="startBtn" onClick={handlePractice2ButtonClick}>
            시작하기
          </button>
        </div>
      )}
      {currentPage === 7 && (
        <div className="practicePage2" style={{ textAlign: "left" }}>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            우측 상단의 + 버튼을 눌러 연락처를 추가해보세요
          </p>
          <div
            className="addNewNumber"
            style={{
              backgroundColor: "ghostwhite",
              width: "300px",
              height: "400px",
            }}
          >
            <button
              className="numberAddBtn"
              onClick={handleAddNumberButtonClick}
            >
              +
            </button>
            <h2 style={{ textAlign: "left" }}>&nbsp;&nbsp;연락처</h2>
            <div className="search-container">
              <input
                type="text"
                id="searchInput2"
                className="search-input2"
                placeholder="검색"
              />
            </div>
            <p style={{ color: "lightgray", fontSize: "10px" }}>ㄱ</p>
            <hr />
            <p>김철수</p>
            <hr />
            <p style={{ color: "lightgray", fontSize: "10px" }}>ㅍ</p>
            <hr />
            <p>폰똑이</p>
          </div>
        </div>
      )}
      {currentPage === 8 && (
        <div className="practicePage3">
          <p>
            <b>이름:김철수 전화번호:010-1234-1234를 저장해보아요!</b>
          </p>
          <div
            className="addNewNumber"
            style={{
              backgroundColor: "ghostwhite",
              width: "300px",
              height: "400px",
            }}
          >
            <div className="fisrtLine">
              <br />
              <br />
              <p style={{ fontWeight: "bold" }}>새로운 연락처</p>
              {isInputNotEmpty ? (
                <button
                  className="completeBtn"
                  style={{ color: "#007bff" }}
                  onClick={handleCompleteButtonClick}
                >
                  완료
                </button>
              ) : (
                <button
                  className="completeBtn1"
                  style={{ color: "lightgray" }}
                  onClick={handleCompleteButtonClick}
                >
                  완료
                </button>
              )}
            </div>
            <button className="profile">프로필</button>
            <br />
            <br />
            <br />
            <div className="numberInfo">
              <input
                type="text"
                id="lastName"
                className="search-input3"
                placeholder="성"
                onChange={handleInputChange}
                value={inputValues.lastName}
              />
              <hr />
              <input
                type="text"
                id="firstName"
                className="search-input3"
                placeholder="이름"
                onChange={handleInputChange}
                value={inputValues.firstName}
              />
              <hr />
              <input
                type="text"
                id="workplace"
                className="search-input3"
                placeholder="직장"
                onChange={handleInputChange}
                value={inputValues.workplace}
              />
            </div>
            <br />
            <div className="numberInfo">
              <input
                type="text"
                id="phoneNumber"
                className="search-input3"
                placeholder="전화번호"
                onChange={handleInputChange}
                value={inputValues.phoneNumber}
              />
              <hr />
            </div>
          </div>
          {showWellDone && (
            <div className="wellDone">
              <p style={{ color: "#007bff" }}>
                <b>전화번호 추가 완료!</b>
              </p>
              <button
                className="nextBtn"
                type="button"
                onClick={handlePractice3ButtonClick}
              >
                <img
                  src="public/img/left-bottom_character.png"
                  alt="next_btn"
                />
                다음
              </button>
            </div>
          )}
        </div>
      )}
      {currentPage === 9 && (
        <div className="level_up_page">
          <img src="/img/pngegg 1.png" alt="" />
          <p>성공적으로 "앱 설치하기"를 배웠어요!</p>
          <button className="endBtn">학습 종료하기</button>
        </div>
      )}
    </div>
  );
}

export default App;
