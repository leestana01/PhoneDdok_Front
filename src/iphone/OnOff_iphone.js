import React, { useState } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleStartClick = () => {
    setCurrentPage(2);
  };

  const handleNextClick = () => {
    if (currentPage === 2) {
      setCurrentPage(3);
    } else if (currentPage === 3) {
      setCurrentPage("levelUp");
    }
  };

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
              <b style={{ fontSize: "18px" }}>"휴대폰 켜고 끄기"</b>를 배워봐요!
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
              조용한 장소에 머물 때 핸드폰을 꺼야 하는 경우가 많죠.
            </p>
            <p>
              휴대폰을 켜고 끄는 방법을 미리 알아두면 이럴 때 <br />
              바로바로 할 수 있겠죠?
            </p>
            <p>그럼 휴대폰을 켜고 끄는 함께 배워봐요!</p>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        );
      case 3:
        return (
          <div id="pages" className="page3">
            <p style={{ fontSize: "16px" }}>
              먼저, 전원 버튼과 음량 내리기 버튼을 동시에 눌러주세요!
            </p>
            <p>그럼 화면처럼 상단 밀어서 전원 끄기가 보입니다.</p>
            <img
              className="exImg"
              id="offImg"
              src="img/offBtn.jpg"
              alt="offBtn"
            />
            <p>
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                동그라미를 우측으로
              </b>
              밀어주면 전원 끄기 완료!
            </p>
            <p style={{ fontSize: "smaller" }}>
              전원을 켤 때는 우측의 전원 버튼을 꾹 누르면 전원이 켜집니다.
            </p>
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
            <p>성공적으로 "휴대폰 켜고 끄기"를 배웠어요!</p>
            <button className="endBtn">학습 종료하기</button>
          </div>
        );
      default:
        return null;
    }
  }
}

export default App;
