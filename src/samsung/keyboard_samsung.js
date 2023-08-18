import React, { useState, useRef } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [aiVoiceOn, setAiVoiceOn] = useState(false);
  const audioRef = useRef(null);
  const audioSources = {
    1: "./audio/18.mp3",
    2: "./audio/19.mp3",
    3: "./audio/20.mp3",
    4: "./audio/22.mp3",
    5: "./audio/24.mp3",
    6: "./audio/25.mp3",
  };

  const handleStartClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    setCurrentPage(2);
  };

  const handleNextClick = () => {
    if (currentPage === 4) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      setCurrentPage("quiz");
    } else if (currentPage === "quiz") {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      setCurrentPage("levelUp");
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      setCurrentPage(currentPage + 1);
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
              <b style={{ fontSize: "18px" }}>키보드 활용하기</b>를 배워봐요!
            </p>
            <button className="startBtn" onClick={handleStartClick}>
              시작하기
            </button>
          </div>
        );
      case 2:
        return (
          <div className="page2">
            <p>
              키보드는{" "}
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>언어를 변경</b>
              할 수도 있고{" "}
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>이모티콘</b>도
              보낼 수 있다는 사실 아셨나요?
            </p>
            <p>
              언어를 변경해서 외국인과 소통할 수도 있고 이모티콘으로 내 감정을
              생생하게 전달할 수도 있어요!
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
            <img className="exImg" src="img/koToEng.jpg" alt="koToEng" />
            <p>언어를 변경하는 방법은 정말 쉬워요!</p>
            <p>
              키보드 하단의{" "}
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>'한/영' 키</b>를
              눌러주면 언어가 영어로 바뀐답니다.
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
            <img
              className="exImg"
              id="emojiImg"
              src="img/emoji.jpg"
              alt="emoji"
            />
            <p>그럼 이모티콘을 사용해볼까요?</p>
            <p>
              키보드 상단 좌측에 있는{" "}
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                사람 얼굴 모양
              </b>
              의 아이콘을 누르면 이모티콘을 사용할 수 있어요!
            </p>
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
              style={{ fontWeight: "bold", fontSize: "16px" }}
            >
              자, 그럼 이제 퀴즈를 하나 풀어봅시다! 언어를 변경하기 위해서는
              어떤 버튼을 눌러야할까요?
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
                <img src="img/earthEmoji.jpg" alt="earthEmoji" />
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
                  src="img/smileEmoji.jpg"
                  alt="smileEmoji"
                />
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
            <p>성공적으로 "키보드 활용하기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        );
      default:
        return null;
    }
  }
}
export default App;
