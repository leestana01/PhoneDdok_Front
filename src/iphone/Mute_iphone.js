import React, { useState } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [aiVoiceOn, setAiVoiceOn] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleStartClick = () => {
    setCurrentPage(2);
  };

  const handleNextClick = () => {
    if (currentPage === 4) {
      setCurrentPage("quiz");
    } else if (currentPage === "quiz") {
      setCurrentPage("levelUp");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizAnswered(true);
    setIsCorrect(isCorrect);
  };

  // App 컴포넌트 내에서 useState 추가
  const [isCorrect, setIsCorrect] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page1">
            <img src="img/pngegg 1.png" alt="character" />
            <p>안녕하세요.</p>
            <p>
              지금부터 저와 함께 <br />
              <b style={{ fontSize: "18px" }}>"소리 및 무음 설정하기"</b>를
              배워봐요!
            </p>
            <button className="startBtn" onClick={handleStartClick}>
              시작하기
            </button>
          </div>
        );
      case 2:
        return (
          <div className="page2">
            <p>영화관에 왔는데 벨소리를 꺼달라는 안내가 나오네요!</p>
            <p>
              이럴 때,{" "}
              <b style={{ fontSize: "medium" }}>진동 설정과 무음 설정</b>하는
              방법을 알고 있다면 쉽게 벨소리를 끌 수 있겠죠?
            </p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case 3:
        return (
          <div className="page3">
            <p>방법은 정말 간단해요!</p>
            <p>
              휴대폰{" "}
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                좌측 맨 위의 스위치
              </b>
              를 똑딱 소리가 나게 화면과 반대 방향으로 내리면 무음 모드가 돼요.
            </p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case 4:
        return (
          <div className="page4">
            <p>
              그렇다면 영화가 끝난 후 <br />
              스마트폰 소리를 켜려면 어떻게 해야할까요?
            </p>
            <p>
              아까 똑딱 소리나게 내린{" "}
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                스위치를 다시 화면 방향으로 올려주면{" "}
              </b>
              소리가 나게 됩니다!
            </p>
            <p>어때요 정말 쉽죠?</p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case "quiz":
        return (
          <div className="quiz_page">
            <img src="img/quiz 1.png" alt="quiz" />
            <p
              className="quizMent"
              style={{ fontWeight: "bold", fontSize: "17px" }}
            >
              자, 그럼 이제 퀴즈를 하나 풀어봅시다!
              <br />
              무음 설정을 하려면 어떤 행동을 해야할까요?
            </p>
            {quizAnswered && (
              <div>
                {isCorrect ? (
                  <p
                    className="correct"
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      textAlign: "center",
                    }}
                  >
                    와, 훌륭해요! 정답이에요🙂
                  </p>
                ) : (
                  <p
                    className="wrong"
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      textAlign: "center",
                    }}
                  >
                    아쉽지만 틀렸어요😢
                  </p>
                )}
              </div>
            )}
            <br />
            <br />
            <div className="quiz">
              <button
                className="quizBtn"
                id="collectAnswer"
                onClick={() => {
                  handleQuizAnswer(false);
                  setClickedButton("collectAnswer");
                }}
                disabled={clickedButton === "collectAnswer"}
              >
                <b>
                  좌측 상단의 스위치를 <br />
                  앞으로 당기기
                </b>
              </button>
              <hr className="line" />
              <button
                className={`quizBtn ${
                  clickedButton === "collectAnswer" ? "clicked" : ""
                }`}
                id="collectAnswer"
                onClick={() => {
                  handleQuizAnswer(true);
                  setClickedButton("collectAnswer");
                }}
                disabled={clickedButton === "collectAnswer"}
              >
                <b>
                  좌측 상단의 스위치를
                  <br />
                  뒤로 밀기
                </b>
              </button>
            </div>
            <button
              id="lastNext"
              className="nextBtn"
              type="button"
              onClick={handleNextClick}
            >
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case "levelUp":
        return (
          <div className="level_up_page">
            <img src="img/pngegg 1.png" alt="" />
            <p>성공적으로 "소리 및 무음 설정하기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="screen_shot_iphone">
      <button type="button" className="back_btn">
        <img src="img/icon _arrow back ios_.png" alt="back_btn" />
      </button>
      <VoiceButton />
      <NavigationBar />
      {renderPage()}
    </div>
  );
}

function VoiceButton() {
  const [aiVoiceOn, setAiVoiceOn] = useState(false);

  return (
    <div className="voice_btn">
      <p>AI 보이스 {aiVoiceOn ? "켜짐" : "꺼짐"}</p>
      <div className="wrapper">
        <input
          type="checkbox"
          id="switch"
          checked={aiVoiceOn}
          onChange={() => setAiVoiceOn(!aiVoiceOn)}
        />
        <label htmlFor="switch" className="switch_label">
          <span className="onf_btn"></span>
        </label>
      </div>
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="navi_bar">
      <div>
        <button className="menuBtn" type="button">
          <img
            src="img/home.png"
            alt="homeNoneSelect"
            style={{ display: "none" }}
          />
          <img src="img/home1.png" alt="homeSelect" />
        </button>
      </div>
      <div>
        <button className="menuBtn" type="button">
          <img src="img/menu.png" alt="menuNoneSelect" />
          <img
            src="img/menu1.png"
            alt="menuSelect"
            style={{ display: "none" }}
          />
        </button>
      </div>
      <div>
        <button className="menuBtn" type="button">
          <img src="img/check.png" alt="checkNoneSelct" />
          <img
            src="img/check1.png"
            alt="checkSelct"
            style={{ display: "none" }}
          />
        </button>
      </div>
      <div>
        <button className="menuBtn" type="button">
          <img src="img/user.png" alt="userNoneSelect" />
          <img
            src="img/user1.png"
            alt="userSelect"
            style={{ display: "none" }}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
