import React, { useState, useRef } from "react";
import "../App.css"; // Assuming you have the CSS file in the same directory

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [aiVoiceOn, setAiVoiceOn] = useState(false);
  const audioRef = useRef(null);
  const audioSources = {
    1: "./audio/69.mp3",
    2: "./audio/70.mp3",
    3: "./audio/71.mp3",
    4: "./audio/73.mp3",
    5: "./audio/74.mp3",
  };

  const handleStartClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    setCurrentPage(2);
  };

  const handleNextClick = () => {
    if (currentPage === 2) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      setCurrentPage(3);
    } else if (currentPage === 3) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      setCurrentPage("quiz_page");
    } else if (currentPage === "quiz_page") {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      setCurrentPage("level_up_page");
    } // Handle more page transitions here
  };

  const handleAiVoiceToggle = () => {
    setAiVoiceOn(!aiVoiceOn);

    if (audioRef.current) {
      if (!aiVoiceOn && audioSources[currentPage]) {
        audioRef.current.src = audioSources[currentPage];
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    }
  };

  const handlePageChange = (newPage) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = ""; // Set audio source to empty string to stop sound
    }
    setCurrentPage(newPage);
    setAiVoiceOn(false);
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizAnswered(true);
    setIsCorrect(isCorrect);
  };

  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div className="screen_shot_iphone">
      <button type="button" className="back_btn">
        <img src="img/🦆 icon _arrow back ios_.png" alt="back_btn" />
      </button>
      <VoiceButton />
      <NavigationBar />
      {renderPage()}
      <audio ref={audioRef}>
        <source src="" type="audio/mpeg" />
      </audio>
    </div>
  );

  function VoiceButton() {
    return (
      <div className="voice_btn">
        <p>AI 보이스 켜짐</p>
        <div className="wrapper">
          <input
            type="checkbox"
            id="switch"
            checked={aiVoiceOn}
            onChange={handleAiVoiceToggle}
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
          <div className="page1">
            <img src="img/pngegg 1.png" alt="character" />
            <p>안녕하세요.</p>
            <p>
              지금부터 저와 함께 <br />
              <b style={{ fontSize: "18px" }}>"메모장 활용하기"</b>를 배워봐요!
            </p>
            <button className="startBtn" onClick={handleStartClick}>
              시작하기
            </button>
          </div>
        );
      case 2:
        return (
          <div className="page2">
            <p style={{ fontSize: "15.5px" }}>
              기억해야 할 내용들을 메모해야하는 순간들이 있죠?
            </p>
            <p>
              그 순간 종이랑 볼펜이 없으면 곤란할 때가 있습니다. 그럴 때
              휴대폰에 있는 메모 어플을 활용하면 편리해요!
            </p>
            <p>한 번 배워볼까요?</p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );

      case 3:
        return (
          <div className="page3">
            <p>먼저 Samsung notes 어플을 들어가볼까요?</p>
            <p style={{ fontSize: "16px" }}>
              우측 하단에 동그라미 버튼을 누르면 새 메모를 작성할 수 있어요.
            </p>
            <p>메모는 자동적으로 저장되니 너무 편리하죠?</p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case "quiz_page":
        return (
          <div className="quiz_page">
            <img src="img/quiz 1.png" alt="quiz" />
            <p
              className="quizMent"
              style={{ fontWeight: "bold", fontSize: "16px" }}
            >
              자, 그럼 이제 퀴즈를 하나 풀어봅시다!
              <br />새 메모를 작성하려면 어떤 버튼을 눌러야할까요?
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
                  src="img/samsungMemo.jpg"
                  alt="memoBtn"
                />
              </button>
              <hr className="line" />
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
                  src="img/shareBtn.jpg"
                  alt="shareBtn"
                />
              </button>
            </div>
            <button
              className="nextBtn"
              id="lastNext"
              type="button"
              onClick={handleNextClick}
            >
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case "level_up_page":
        return (
          <div className="level_up_page">
            <img src="img/pngegg 1.png" alt="" />
            <p>성공적으로 "메모장 활용하기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        );
    }
  }
}
export default App;
