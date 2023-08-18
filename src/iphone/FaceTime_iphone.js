import React, { useState, useRef } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [aiVoiceOn, setAiVoiceOn] = useState(false);
  const audioRef = useRef(null);
  const audioSources = {
    1: "./audio/50.mp3",
    2: "./audio/51.mp3",
    3: "./audio/53.mp3",
    4: "./audio/54.mp3",
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
      setCurrentPage("levelUp");
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
          <div id="pages" className="page1">
            <img src="img/pngegg 1.png" alt="character" />
            <p>안녕하세요.</p>
            <p>
              지금부터 저와 함께 <br />
              <b style={{ fontSize: "18px" }}>"영상통화 걸기"</b>를 배워봐요!
            </p>
            <button className="startBtn" onClick={handleStartClick}>
              시작하기
            </button>
          </div>
        );
      case 2:
        return (
          <div id="pages" className="page2">
            <p style={{ fontSize: "16px" }}>
              멀리 떨어져 있는 사람과 통화 할 때 서로의 얼굴을 보면서 통화하고
              싶었던 적 있지 않나요?
            </p>
            <p>그럴 때 영상통화 기능을 이용하면 됩니다.</p>
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
            <img className="exImg" src="img/faceTime.jpg" alt="facetime" />
            <p style={{ fontSize: "16px" }}>
              먼저, 전화하고자 하는 상대에게 전화를 건 다음 화면에 보이는
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                Face time 버튼
              </b>
              을 눌러주면 영상통화로 전환이 됩니다.
            </p>
            <p>어떤가요, 쉽죠?</p>
            <div>
              <button
                className="nextBtn"
                type="button"
                onClick={handleNextClick}
              >
                <img src="img/left-bottom_character.png" alt="next_btn" />
                다음
              </button>
            </div>
          </div>
        );
      case "levelUp":
        return (
          <div id="pages" className="level_up_page">
            <img src="img/pngegg 1.png" alt="" />
            <p>성공적으로 "영상통화 걸기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        );
      default:
        return null;
    }
  }
}

export default App;
