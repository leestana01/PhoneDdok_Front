import React, { useState } from "react";
import "../App.css";

function App() {
  const [wifiSwitchOn, setWifiSwitchOn] = useState(false);
  const [aiVoiceOn, setAiVoiceOn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showWellDone, setShowWellDone] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [currentPage, setCurrentPage] = useState("page1");
  const [showPassword, setShowPassword] = useState(false);

  const handleWifiSwitchChange = () => {
    setWifiSwitchOn(!wifiSwitchOn);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleCompleteBtnClick = () => {
    if (passwordInput === "wifi12345") {
      setShowWellDone(true);
    }
  };

  const handleNextBtnWellDoneClick = () => {
    setShowWellDone(false);
    setShowLevelUp(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="screen_shot_iphone">
      <button type="button" className="back_btn">
        <img src="img/🦆 icon _arrow back ios_.png" alt="back_btn" />
      </button>
      <div className="voice_btn">
        <p>AI 보이스 켜짐 {aiVoiceOn ? "켜짐" : "꺼짐"}</p>
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

      {currentPage === "page1" && (
        <div id="pages" className="page1">
          <img src="img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>와이파이 연결하기</b>를 배워봐요!
          </p>
          <button
            className="startBtn"
            onClick={() => handlePageChange("page2")}
          >
            시작하기
          </button>
        </div>
      )}

      {currentPage === "page2" && (
        <div id="pages" className="page2">
          <p>
            외출했을 때 데이터가 부족하면 외부의 와이파이를 연결해서 사용할 수
            있어요.
          </p>
          <p>연결하는 방법을 미리미리 공부해둘 필요가 있겠죠?</p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => handlePageChange("page3")}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === "page3" && (
        <div id="pages" className="page3">
          <img src="" alt="wifi" />
          <p>먼저 '설정' 앱에서 '연결'에 들어가요.</p>
          <p>
            그 다음 와이파이를 사용중으로 켜주면,'사용 가능한 네트워크'에 <br />{" "}
            근처에 있는 와이파이가 뜨게 됩니다.
          </p>
          <div>
            <button
              className="nextBtn"
              type="button"
              onClick={() => handlePageChange("page4")}
            >
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}

      {currentPage === "page4" && (
        <div id="pages" className="page4">
          <img src="" alt="connectWifi" />
          <p>그 중 내가 연결하고자 하는 와이파이를 클릭합니다.</p>
          <p>암호를 입력해주면 와이파이가 연결됩니다!</p>
          <p>
            대부분 식당이나 카페에는 와이파이 비밀번호가 적혀 있는 경우가 많아서
            이것을 찾아서 입력해주면 됩니다!
          </p>
          <div>
            <button
              className="exBtn"
              type="button"
              onClick={() => handlePageChange("practicePage1")}
            >
              연습하러 가기
            </button>
            <button
              className="startBtn"
              type="button"
              onClick={() => handlePageChange("level_up_page")}
            >
              종료하기
            </button>
          </div>
        </div>
      )}

      {currentPage === "practicePage1" && ( //css 변경해야함
        <div id="pages" className="practicePage1">
          <img src="img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>와이파이 연결하기</b>를 연습해봐요!
          </p>
          <button
            className="startBtn"
            onClick={() => handlePageChange("practicePage2")}
          >
            시작하기
          </button>
        </div>
      )}

      {currentPage === "practicePage2" && (
        <div id="pages" className="practicePage2">
          <p style={{ fontSize: "small" }}>
            아래의 와이파이 이름과 비밀번호 정보를 가지고 <br />
            와이파이 연결을 연습해보세요!
          </p>
          <p style={{ fontSize: "15px" }}>
            <b>와이파이 이름: 폰똑이/비번: wifi12345</b>
          </p>
          <div
            className="search"
            style={{
              backgroundColor: "ghostwhite",
              width: "300px",
              height: "370px",
            }}
          >
            <div
              className="chooseWifi"
              style={{ display: showPassword ? "none" : "block" }}
            >
              <br />
              <br />
              <div className="wifi_btn">
                <p style={{ position: "relative", top: "-7px" }}>
                  <b> wifi</b>
                </p>
                <label className="form-switch">
                  <input
                    type="checkbox"
                    id="wifiSwitch"
                    onChange={handleWifiSwitchChange}
                  />
                  <i></i>
                </label>
              </div>
              <br />
              <br />
            </div>
            <div
              className="network"
              style={{
                display: wifiSwitchOn ? "block" : "none",
                display: showPassword ? "none" : "block",
              }}
            >
              <p>네트워크</p>
              <div className="wifiList">
                <button
                  className="wifiName"
                  onClick={() => setShowPassword(true)}
                >
                  폰똑이
                </button>
              </div>
            </div>
            <div
              className="wifiPassword"
              style={{ display: showPassword ? "block" : "none" }}
            >
              <button
                className="completeBtn2"
                onClick={() => {
                  if (passwordInput === "wifi12345") {
                    setCurrentPage("wellDone2Page"); // Update currentPage when password is correct
                  }
                }}
                style={{
                  color:
                    passwordInput === "wifi12345" ? "#007bff" : "lightgrey",
                }}
              >
                연결
              </button>
              <div className="inputpassword">
                <p> 암호</p>
                <input
                  type="text"
                  id="searchInput3"
                  className="search-input4"
                  placeholder=""
                  value={passwordInput}
                  onChange={handlePasswordInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === "wellDone2Page" && (
        <div className="wellDone" id="wellDone2">
          <p style={{ color: "#007bff" }}>
            <b>와이파이 연결 성공!</b>
          </p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => setCurrentPage("level_up_page")}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === "level_up_page" && (
        <div id="pages" className="level_up_page">
          <img src="img/pngegg 1.png" alt="" />
          <p>성공적으로 "와이파이 연결하기"를 배웠어요!</p>
          <button className="endBtn">학습 종료하기</button>
        </div>
      )}
    </div>
  );
}

export default App;
