import React, { useState } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleStartClick = () => {
    setCurrentPage(2);
  };

  const handleNextClick = () => {
    if (currentPage === 2) {
      setCurrentPage(3);
    } else if (currentPage === 3) {
      setCurrentPage("quiz");
    } else if (currentPage === "quiz") {
      setCurrentPage("levelUp");
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizAnswered(true);
    setIsCorrect(isCorrect);
  };

  // App 컴포넌트 내에서 useState 추가
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div className="screen_shot_iphone">
      <button type="button" className="back_btn">
        <img src="img/🦆 icon _arrow back ios_.png" alt="back_btn" />
      </button>
      <VoiceButton />
      <NavigationBar />
      {renderPage()}
    </div>
  );

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

  function renderPage() {
    switch (currentPage) {
      case 1:
        return (
          <div id="pages" className="page1">
            <img src="img/pngegg 1.png" alt="character" />
            <p>안녕하세요.</p>
            <p>
              지금부터 저와 함께 <br />
              <b style={{ fontSize: "18px" }}>{"'스피커폰으로 통화하기'"}</b>를
              배워봐요!
            </p>
            <button className="startBtn" onClick={handleStartClick}>
              시작하기
            </button>
          </div>
        );
      case 2:
        return (
          <div id="pages" className="page2">
            <p style={{ fontSize: "15.5px" }}>
              가끔 손으로 무언가를 하면서 통화를 해야하는 순간이 있죠!
            </p>
            <p>
              예를 들면 설거지 하면서 전화통화를 하고 싶을 때 <br />
              스피커폰을 사용하면 굳이 손으로 들고 귀에 <br />
              전화기를 대지 않아도 통화가 가능하답니다.
            </p>
            <p>그럼 한 번 배워볼까요?</p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case 3:
        return (
          <div id="pages" className="page3">
            <img
              className="exImg"
              src="img/speakerPhone.jpg"
              alt="speakerPhone"
            />
            <p>전화를 걸고 있는 상태일 때 휴대폰 화면입니다.</p>
            <p style={{ fontSize: "16px" }}>
              여기서{" "}
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>오디오 버튼</b>
              을 눌러주면 바로 스피커폰으로 전화를 할 수 있게 됩니다!
            </p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case "quiz":
        return (
          <div id="pages" className="quiz_page">
            <img
              src="img/quiz 1.png"
              alt="quiz"
              style={{
                position: "relative",
                left: "-150px",
              }}
            />
            <p
              className="quizMent"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              자, 그럼 이제 퀴즈를 하나 풀어봅시다!
              <br />
              스피커폰을 하기 위해서는 어떤 버튼을 눌러야할까요?
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
                <img
                  className="smileImg"
                  src="img/speaker.jpg"
                  alt="speakerPhone"
                />
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
                <img
                  className="smileImg"
                  src="img/noSpeaker.jpg"
                  alt="noSpeakerPhone"
                />
              </button>
            </div>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case "levelUp":
        return (
          <div id="pages" className="level_up_page">
            <img src="img/pngegg 1.png" alt="" />
            <p>성공적으로 "스피커폰으로 통화하기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        );
      default:
        return null;
    }
  }
}

export default App;
