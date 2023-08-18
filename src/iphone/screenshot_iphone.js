import React, { useState } from "react";
import "../App.css";

function App() {
  const [page, setPage] = useState(1);
  const [aiVoiceOn, setAiVoiceOn] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleStart = () => {
    setPage(2);
  };

  const handleNextPage = () => {
    if (page === 2) setPage(3);
    else if (page === 3) setPage("quiz");
    else if (page === "quiz") setPage("levelUp");
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizAnswered(true);
    setIsCorrect(isCorrect);
  };
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div>
      <div className="screen_shot_iphone">
        <div className="back_btn">
          <img src="img/🦆 icon _arrow back ios_.png" alt="back_btn" />
        </div>
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
          <button className="menuBtn" type="button">
            <img
              src="img/home.png"
              alt="homeNoneSelect"
              style={{ display: "none" }}
            />
            <img src="img/home1.png" alt="homeSelect" />
          </button>
          <button className="menuBtn" type="button">
            <img src="img/menu.png" alt="menuNoneSelect" />
            <img
              src="img/menu1.png"
              alt="menuSelect"
              style={{ display: "none" }}
            />
          </button>
          <button className="menuBtn" type="button">
            <img src="img/check.png" alt="checkNoneSelct" />
            <img
              src="img/check1.png"
              alt="checkSelct"
              style={{ display: "none" }}
            />
          </button>
          <button className="menuBtn" type="button">
            <img src="img/user.png" alt="userNoneSelect" />
            <img
              src="img/user1.png"
              alt="userSelect"
              style={{ display: "none" }}
            />
          </button>
        </div>
        {page === 1 && (
          <div className="page1">
            <img src="img/pngegg 1.png" alt="character" />
            <p>안녕하세요.</p>
            <p>
              지금부터 저와 함께 <br />
              <b style={{ fontSize: "18px" }}>"화면 캡쳐하기"</b>를 배워봐요!
            </p>
            <button className="startBtn" onClick={handleStart}>
              시작하기
            </button>
          </div>
        )}
        {page === 2 && (
          <div className="page2">
            <img className="exImg" src="img/jejuStay.png" alt="screenEx" />
            <p style={{ fontSize: "smaller" }}>
              인터넷을 보는데,마음에 쏙 드는 숙소를 발견했어요!
            </p>
            <p style={{ fontSize: "smaller" }}>
              가족과 함께 공유하고 싶은데...어떻게 저장하지?
            </p>
            <p style={{ fontSize: "smaller" }}>
              이럴 때, <b style={{ fontSize: "medium" }}>화면 캡쳐 기능</b>을
              이용하면 유용하답니다!
            </p>
            <button className="nextBtn" type="button" onClick={handleNextPage}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        )}
        {page === 3 && (
          <div className="page3">
            <img
              className="exImg"
              src="img/screenshot.png"
              alt="screenshotEx"
            />
            <p style={{ fontSize: "smaller" }}>
              먼저, 캡쳐하고 싶은 화면으로 이동을 합니다!
            </p>
            <p style={{ fontSize: "smaller" }}>
              그 다음 화면에 보이는
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                화면 잠금 버튼
              </b>
              과
              <br />
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                음량 올리기 버튼
              </b>
              을 동시에 눌러주세요!
            </p>
            <button className="nextBtn" type="button" onClick={handleNextPage}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        )}
        {page === "quiz" && (
          <div className="quiz_page">
            <img src="img/quiz 1.png" alt="quiz" />
            <p
              className="quizMent"
              style={{ fontWeight: "bold", fontSize: "17px" }}
            >
              자, 그럼 이제 퀴즈를 하나 풀어봅시다!
              <br />
              화면 캡쳐를 하려면 어떤 버튼을 눌러야할까요?
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
                  전원 버튼과 <br />
                  음량 올리기 버튼
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
                  전원 버튼과
                  <br />
                  음량 내리기 버튼
                </b>
              </button>
            </div>
            <button
              id="lastNext"
              className="nextBtn"
              type="button"
              onClick={handleNextPage}
            >
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        )}
        {page === "levelUp" && (
          <div className="level_up_page">
            <img src="img/pngegg 1.png" alt="" />
            <p>성공적으로 "화면 캡쳐하기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
