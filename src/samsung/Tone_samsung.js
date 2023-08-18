import React, { useEffect } from "react";
import "../App.css";

function App() {
  useEffect(() => {
    const startBtn = document.querySelector(".startBtn");
    const nextBtnPage2 = document.querySelector(".page2 .nextBtn");
    const nextBtnPage3 = document.querySelector(".page3 .nextBtn");

    const page1 = document.querySelector(".page1");
    const page2 = document.querySelector(".page2");
    const page3 = document.querySelector(".page3");
    const levelUpPage = document.querySelector(".level_up_page");

    startBtn.addEventListener("click", function () {
      page1.style.display = "none";
      page2.style.display = "block";
    });

    nextBtnPage2.addEventListener("click", function () {
      page2.style.display = "none";
      page3.style.display = "block";
    });

    nextBtnPage3.addEventListener("click", function () {
      page3.style.display = "none";
      levelUpPage.style.display = "block";
    });

    return () => {
      startBtn.removeEventListener("click", function () {
        page1.style.display = "none";
        page2.style.display = "block";
      });

      nextBtnPage2.removeEventListener("click", function () {
        page2.style.display = "none";
        page3.style.display = "block";
      });

      nextBtnPage3.removeEventListener("click", function () {
        page3.style.display = "none";
        levelUpPage.style.display = "block";
      });
    };
  }, []);

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

      <div id="pages" className="page1">
        <img src="img/pngegg 1.png" alt="character" />
        <p>안녕하세요.</p>
        <p>
          지금부터 저와 함께 <br />
          <b style={{ fontSize: "18px" }}>휴대폰 밝기 설정하기</b>를 배워봐요!
        </p>
        <button className="startBtn">시작하기</button>
      </div>

      <div id="pages" className="page2" style={{ display: "none" }}>
        <p style={{ fontSize: "15.5px" }}>
          휴대폰으로 드라마를 보고 있는데 <br />
          화면이 너무 어두운 것 같아요.
        </p>
        <p>
          이럴 때 휴대폰 밝기를 조정해주면 좀 더 밝은 화면으로 볼 수 있겠죠?
        </p>
        <p>그럼 휴대폰 밝기 설정하는 법을 배워볼까요?</p>
        <button className="nextBtn" type="button">
          <img src="img/left-bottom_character.png" alt="next_btn" />
          다음
        </button>
      </div>

      <div id="pages" className="page3" style={{ display: "none" }}>
        <p>방법은 너무 간단해요!</p>
        <p>먼저 휴대폰 상단바를 아래로 밀어주세요.</p>
        <p>그 다음 빠른 메뉴에서 한 번 더 아래로 밀어주세요.</p>
        <p>그러면 화면에 보이 듯 제일 하단에 밝기를 조절하는 바가 있어요</p>
        <p style={{ fontSize: "16px" }}>
          바를 <b style={{ fontSize: "17px", color: "#1f4ef5" }}>좌우로 이동</b>
          시키면 밝기를 높이고 낮출 수 있어요!
        </p>
        <button className="nextBtn" type="button">
          <img src="img/left-bottom_character.png" alt="next_btn" />
          다음
        </button>
      </div>

      <div id="pages" className="level_up_page" style={{ display: "none" }}>
        <img src="img/pngegg 1.png" alt="" />
        <p>성공적으로 "휴대폰 밝기 설정하기"를 배웠어요!</p>
        <button className="endBtn">학습 종료하기</button>
      </div>
    </div>
  );
}

export default App;
