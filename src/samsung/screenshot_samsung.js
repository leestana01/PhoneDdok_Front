import React, { useState, useRef } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [aiVoiceOn, setAiVoiceOn] = useState(false);
  const audioRef = useRef(null);
  const audioSources = {
    1: "./audio/34.mp3",
    2: "./audio/35.mp3",
    3: "./audio/38.mp3",
    4: "./audio/39.mp3",
  };

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    setCurrentPage(2);
  };

  const handleNextPage = () => {
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
      setCurrentPage(4);
    } else if (currentPage === 4) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      setCurrentPage(5);
    }
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
        <img src="img/icon _arrow back ios_.png" alt="back_btn" />
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
        <p>AI 보이스 {aiVoiceOn ? "켜짐" : "꺼짐"}</p>
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
              <b style={{ fontSize: "18px" }}>"화면 캡쳐하기"</b>를 배워봐요!
            </p>
            <button className="startBtn" onClick={handleStart}>
              시작하기
            </button>
          </div>
        );

      case 2:
        return (
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
        );

      case 3:
        return (
          <div className="page3">
            <p style={{ fontSize: "smaller" }}>
              먼저, 캡쳐하고 싶은 화면으로 이동을 합니다!
            </p>
            <p style={{ fontSize: "smaller" }}>
              그 다음
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>전원 버튼</b>
              과
              <br />
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                음량 내리기 버튼
              </b>
              을 동시에 눌러주세요!
            </p>
            <button className="nextBtn" type="button" onClick={handleNextPage}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );

      case 4:
        return (
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
                  음량 내리기 버튼
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
                  음량 올리기 버튼
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
        );

      case 5:
        return (
          <div className="level_up_page">
            <img src="img/pngegg 1.png" alt="" />
            <p>성공적으로 "화면 캡쳐하기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        );
    }
  }
}

export default App;
