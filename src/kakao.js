import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("page1");
  const [aiVoiceOn, setAiVoiceOn] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="screen_shot_iphone">
      <button type="button" className="back_btn">
        <img src="img/🦆 icon _arrow back ios_.png" alt="back_btn" />
      </button>
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
        <div className="page1">
          <img src="img/pngegg 1.png" alt="character" />
          <p>안녕하세요.</p>
          <p>
            지금부터 저와 함께 <br />
            <b style={{ fontSize: "18px" }}>"카카오톡 활용하기"</b>를 배워봐요!
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
        <div className="page2">
          <br />
          <br />
          <p>카카오톡은 많은 사람들이 사용하고 있는 sns앱이에요.</p>
          <p>
            그래서 카카오톡만 잘 활용한다면 스마트폰을 이용해서 다른 사람과
            소통을 원활하게 할 수 있어요.
          </p>
          <p>그럼 카카오톡 한 번 마스터 하러 가볼까요?</p>
          <div className="category">
            <button
              className="categoryBtn"
              onClick={() => handlePageChange("voiceTalk1")}
            >
              보이스톡 걸기
            </button>
            <button
              className="categoryBtn"
              onClick={() => handlePageChange("sendImg1")}
            >
              사진 보내고 다운 받기
            </button>
            <button
              className="categoryBtn"
              onClick={() => handlePageChange("kakaoHeart")}
            >
              공감 누르기
            </button>
          </div>
        </div>
      )}

      {currentPage === "voiceTalk1" && (
        <div className="voiceTalk1">
          <div className="voiceTalk1">
            <img src="img/pngegg 1.png" alt="character" />
            <p>
              먼저, <br />
              카카오톡 기능 중 하나인
              <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
                보이스톡 거는 법
              </b>
              을 배워봐요!
            </p>
            <p>
              보이스톡은 해외에서도 와이파이만 연결되면 <br />
              원하는 사람에게 전화를 걸 수 있어서 편리해요.
            </p>
            <button
              className="nextBtn"
              type="button"
              onClick={() => handlePageChange("voiceTalk2")}
            >
              <img src="img/left-bottom_character.png" alt="next_btn" />
              다음
            </button>
          </div>
        </div>
      )}

      {currentPage === "voiceTalk2" && (
        <div className="voiceTalk2">
          <img className="exImg" src="img/voiceTalk.jpg" />
          <p>
            방법은 간단해요! 친구 목록에서 전화를 걸고자 <br />
            하는 사람의 이름을 찾아서 클릭해줍니다.
          </p>
          <p>
            그 다음 하단에 있는
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>통화하기 버튼</b>
            을 눌러준 후 <br />
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
              우측에 보이스톡
            </b>
            을 눌러주면 보이스톡 걸기 성공!
          </p>
          <div>
            <button
              className="endBtn"
              id="continueBtn"
              type="button"
              onClick={() => handlePageChange("sendImg1")}
            >
              계속학습하기
            </button>
            <button
              className="endBtn"
              id="endBtn"
              type="button"
              onClick={() => handlePageChange("levelUpPage")}
            >
              종료하기
            </button>
          </div>
        </div>
      )}
      {currentPage === "sendImg1" && (
        <div className="sendImg1">
          <img src="img/pngegg 1.png" alt="character" />
          <p>이번에는 사진을 보내고 다운로드 하는 방법을 배워봐요.</p>
          <p>
            채팅방에서 친구들에게 예쁜 사진을 공유하고 싶을 때 이번에 공부하는게
            도움이 많이 되겠죠?
          </p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => handlePageChange("sendImg2")}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === "sendImg2" && (
        <div className="sendImg2">
          <img className="exImg2" src="img/sendImg1.jpg" />
          <p>우선 사진을 보내고 싶은 채팅방으로 들어가줍니다.</p>
          <p>
            그 다음 채팅방
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
              하단 좌측에 있는 + 버튼
            </b>
            을 눌러줘요.
          </p>
          <img className="exImg2" src="img/sendImg2.jpg" />
          <p>그 중 앨범을 클릭하면 내가 최근에 찍은 사진들이 보이죠?</p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => handlePageChange("sendImg3")}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === "sendImg3" && (
        <div className="sendImg3">
          <img className="exImg" id="emojiImg" src="img/sendImg3.jpg" />
          <p>
            좌측 하단에
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>전체 버튼</b>을
            클릭해줍니다.
          </p>
          <p>이제 내가 보내고 싶은 사진들을 선택해줍니다.</p>
          <p>사진은 한 번에 최대 30개까지 선택할 수 있어요.</p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => handlePageChange("sendImg4")}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === "sendImg4" && (
        <div className="sendImg4">
          <br />
          <br />
          <p>
            다 선택했으면 좌측 하단에
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
              사진 묶어보내기
            </b>
            에
            <br />
            체크를 해줍니다.
          </p>
          <p>
            그러면, 채팅방에 사진이 묶여서 올라가기 때문에
            <br />
            다른 사람이 사진을 받을 때 훨씬 편리해요!
          </p>
          <p>
            마지막으로 우측 상단에
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>전송 버튼</b>을
            눌러주면 전송 완료!
          </p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => handlePageChange("sendImg5")}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === "sendImg5" && (
        <div className="sendImg5">
          <br />
          <br />
          <br />
          <p>
            그러면 상대방이 보낸 사진을 다운 받아서 <br />내 앨범에 저장하려면
            어떻게 해야할까요?
          </p>
          <p>
            정말 간단해요! 다운 받고 싶은 사진을 누르고 <br />
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
              제일 왼쪽 하단에 다운로드 버튼
            </b>
            을 눌러주면 사진이 내 앨범으로 저장이 됩니다!
          </p>
          <div>
            <button
              className="endBtn"
              id="continueBtn"
              type="button"
              onClick={() => handlePageChange("kakaoHeart")}
            >
              계속 학습하기
            </button>
            <button
              className="endBtn"
              id="endBtn"
              type="button"
              onClick={() => handlePageChange("levelUpPage")}
            >
              종료하기
            </button>
          </div>
        </div>
      )}

      {currentPage === "kakaoHeart" && (
        <div className="kakaoHeart">
          <p>
            이번에는 상대방이 보낸 메시지에 <br />
            공감을 누르는 법을 배워볼게요!
          </p>
          <img
            className="exImg"
            id="heartImg"
            src="img/kakaoHeart.jpg"
            alt="kakaoHeart"
          />
          <p>
            먼저 공감하고 싶은
            <b style={{ fontSize: "17px", color: "#1f4ef5" }}>
              상대방의 메세지를 꾹
            </b>
            누르면
            <br />내 감정을 표시할 수 있는 이모티콘들이 뜹니다.
          </p>
          <p>
            내가 원하는 이모티콘을 눌러주면 <br />
            "메시지에 공감하는 법"까지 공부 완료!
          </p>
          <p>이제 제법 카카오톡을 잘 활용할 수 있겠어요!</p>
          <button
            className="nextBtn"
            type="button"
            onClick={() => handlePageChange("levelUpPage")}
          >
            <img src="img/left-bottom_character.png" alt="next_btn" />
            다음
          </button>
        </div>
      )}

      {currentPage === "levelUpPage" && (
        <div className="level_up_page">
          <img src="img/pngegg 1.png" alt="" />
          <p>성공적으로 "카카오톡 활용하기"를 배웠어요!</p>
          <button className="endBtn">학습 종료하기</button>
        </div>
      )}
    </div>
  );
}
export default App;
