import React, { useState } from "react";
import "../App.css";

function App() {
  const [page, setPage] = useState("page1");

  const handleNext = () => {
    if (page === "page1") setPage("page2");
    else if (page === "page2") setPage("page3");
    else if (page === "page3") setPage("page4");
    else if (page === "page4") setPage("page5");
    else if (page === "page5") setPage("practicePage1");
    else if (page === "practicePage1") setPage("practicePage2");
    else if (page === "practicePage2") setPage("level_up_page");
  };

  const handleSearch = () => {
    const searchTerm = document.getElementById("searchInput").value;

    if (searchTerm === "폰똑이") {
      setPage("practicePage2");
      const phoneddokSection = document.querySelector(".phoneddok");
      phoneddokSection.style.display = "block";
    } else {
      alert("폰똑이를 검색해주세요!");
    }
  };

  const handleAppInstall = () => {
    const infoSection = document.querySelector(".info");
    const storeImgSection = document.querySelector(".storeImg");
    const wellDoneSection = document.querySelector(".wellDone");

    infoSection.style.display = "none"; // "info" 섹션 숨기기
    storeImgSection.style.display = "none"; // "storeImg" 섹션 숨기기
    wellDoneSection.style.display = "block"; // "wellDone" 섹션 표시
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

      {page === "page1" && (
        <div id="pages" className="page1">
          <img src="img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>앱 설치 및 삭제하기</b>를 배워봐요!
          </p>
          <button className="startBtn" onClick={() => handleNext()}>
            시작하기
          </button>
        </div>
      )}

      {page === "page2" && (
        <div id="pages" className="page2">
          <p>
            요즘에는 휴대폰 기본 앱 외에도 <br />
            정말 많은 앱들이 나와있죠.
          </p>
          <p>
            이 앱들을 설치하는 방법을 알고 <br />
            다양한 앱들을 사용하다보면 스마트폰의 유용함을 <br />
            정말 잘 느낄 수 있어요!
          </p>
          <p>그럼 한 번 앱 설치 방법을 배워볼까요?</p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => handleNext()}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {page === "page3" && (
        <div id="pages" className="page3">
          <img src="" alt="kakaotalk" />
          <p style={{ fontSize: "16px" }}>
            앱의 종류는 정말 다양하지만 <br />그 중에서 많은 사람들이 사용하는
            "카카오톡"을 <br />한 번 설치 해봐요!
          </p>
          <div>
            <button
              className="nextBtn"
              type="button"
              onClick={() => handleNext()}
            >
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}

      {page === "page4" && (
        <div id="pages" className="page4">
          <img src="" alt="kakaotalk" />
          <p>먼저, App store에 들어가줍니다.</p>
          <p>
            그 다음 검색 페이지로 들어가 <br />
            검색창에 카카오톡을 검색해줄게요!
          </p>
          <div>
            <button
              className="nextBtn"
              type="button"
              onClick={() => handleNext()}
            >
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}

      {page === "page5" && (
        <div id="pages" className="page5">
          <img src="" alt="kakaotalk" />
          <p>제일 위쪽에 카카오톡이 보이죠?</p>
          <p>옆에 있는 받기 버튼을 눌러줍니다.</p>
          <p>
            그 다음 App store 계정의 비밀번호를 입력해주면 앱 설치가 완료됩니다!
          </p>
          <p>이제 다양한 앱을 설치하고 사용해봐요~!</p>
          <div>
            <button
              className="exBtn"
              type="button"
              onClick={() => handleNext()}
            >
              연습하러 가기
            </button>
            <button
              className="startBtn"
              type="button"
              onClick={() => setPage("level_up_page")}
            >
              종료하기
            </button>
          </div>
        </div>
      )}

      {page === "practicePage1" && (
        <div id="pages" className="practicePage1">
          <img src="img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>앱 설치하기</b>를 연습해봐요!
          </p>
          <button className="startBtn" onClick={() => handleNext()}>
            시작하기
          </button>
        </div>
      )}

      {page === "practicePage2" && (
        <div id="pages" className="practicePage2">
          <p>
            아래의 검색창에서 "폰똑이"을 검색해 <br />
            다운로드 해보세요
          </p>
          <div
            className="search"
            style={{
              backgroundColor: "ghostwhite",
              width: "300px",
              height: "400px",
            }}
          >
            <br />
            <h2 style={{ textAlign: "left" }}>&nbsp;&nbsp;검색</h2>
            <div className="search-container">
              <input
                type="text"
                id="searchInput"
                className="search-input"
                placeholder="게임,앱,스토리 등"
              />
              <button
                id="searchButton"
                className="search-button"
                onClick={() => handleSearch()}
              >
                검색
              </button>
            </div>
            <div className="phoneddok" style={{ display: "none" }}>
              <div className="info">
                <img className="logo" src="img/phoneddok.png" alt="" />
                <div className="appInfo">
                  <p style={{ textAlign: "left" }}>
                    <b>&nbsp;폰똑이</b>
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    당신을 위한 스마트폰 가이드
                  </p>
                </div>
                <button className="downBtn" onClick={() => handleAppInstall()}>
                  받기
                </button>
              </div>
              <div className="storeImg">
                <img src="img/storeImg1.png" alt="" />
                <img src="img/storeImg2.png" alt="" />
                <img src="img/storeImg3.png" alt="" />
              </div>
              <div className="wellDone" style={{ display: "none" }}>
                <p style={{ color: "#007bff" }}>
                  <b>앱 설치 완료!</b>
                </p>
                <button
                  className="nextBtn"
                  type="button"
                  onClick={() => handleNext()}
                >
                  <img src="img/left-bottom_character.png" alt="next_btn" />
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {page === "level_up_page" && (
        <div id="pages" className="level_up_page">
          <img src="img/pngegg 1.png" alt="" />
          <p>성공적으로 "앱 설치 및 삭제하기"를 배웠어요!</p>
          <button className="endBtn">학습 종료하기</button>
        </div>
      )}
    </div>
  );
}

export default App;
