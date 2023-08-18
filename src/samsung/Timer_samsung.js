import React, { useState } from "react";
import "../App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleStartClick = () => {
    setCurrentPage(2);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="screen_shot_iphone">
      <button type="button" className="back_btn">
        <img src="img/🦆 icon _arrow back ios_.png" alt="back_btn" />
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

      {currentPage === 1 && (
        <div className="page1">
          <img src="img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>"타이머와 알람 설정하기"</b>를
            배워봐요!
          </p>
          <button className="startBtn" onClick={handleStartClick}>
            시작하기
          </button>
        </div>
      )}

      {currentPage === 2 && (
        <div className="page2">
          <p>요리 좋아하시나요?</p>
          <p>
            요리할 때 타이머를 자주 사용하는데 스마트폰에서도 타이머를 간단하게
            사용할 수 있답니다.
          </p>
          <p>그럼 먼저, 타이머 설정하는 법부터 배워볼까요?</p>
          <button className="nextBtn" type="button" onClick={handleNextClick}>
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === 3 && (
        <div className="page3">
          <img src="" alt="clockApp" />
          <p>먼저, '시계'앱을 눌러줍니다!</p>
          <p>하단 제일 우측에 있는 '타이머'를 클릭해줍니다.</p>
          <p>
            원하는 시간을 선택하고 '시작'버튼을 눌러주면 타이머 설정이 완료돼요!
          </p>
          <div>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}

      {currentPage === 4 && (
        <div className="page4">
          <p>아침에 정해진 시간에 일어나야 할 때 주로 어떻게 하시나요?.</p>
          <p>
            알람 기능을 이용하면 원하시는 시간에 알람을 맞추고 알람을 받을 수
            있어요.
          </p>
          <p>그럼 이번에는 알람 설정하는 법을 배워봅시다!</p>
          <div>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}

      {currentPage === 5 && (
        <div className="page5">
          <img src="" alt="alarmApp" />
          <p>아까와 마찬가지로 '시계' 앱에 들어갑니다.</p>
          <p>하단 제일 좌측에 있는 '알람'을 클릭해줍니다.</p>
          <p>오른쪽 위에 '+' 버튼을 클릭해서 들어가줍니다.</p>
          <p>원하는 시간을 선택한 뒤 '저장' 버튼을 눌러주면 알람 설정 완료!</p>
          <p>이제 늦게 일어날 걱정 없네요~</p>
          <div>
            <button className="nextBtn" type="button" onClick={handleNextClick}>
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}
      {currentPage === 6 && (
        <div className="level_up_page">
          <img src="img/pngegg 1.png" alt="" />
          <p>성공적으로 "타이머와 알람 설정하기"를 배웠어요!</p>
          <button className="endBtn">학습 종료하기</button>
        </div>
      )}
    </div>
  );
}

export default App;
