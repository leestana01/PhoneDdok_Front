import bell from "./img/bell.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PushAlert = (props) => {
    const [selectedButton, setSelectedButton] = useState(false); // 초기값을 false로 설정

    const handleButtonClick = (value) => {
        setSelectedButton(value);
        console.log(value);
    };
    const movePage = useNavigate();

    function goCharacter() {
        movePage("/Character", {
            state: {
                identity: props.state.identity,
                nickName: props.state.nickName,
            },
        });
    }

    return (
        <div className="PushAlert">
            <form className="push_form_container">
                <div className="push_head_bell_image">
                    <div className="push_head">
                        <h2>푸시 알림을 활성화 해주세요</h2>
                    </div>
                    <div className="bell_image">
                        <img src={bell} alt="Bell Icon" />
                    </div>
                </div>
                <div>
                    <h3>분명한 목표가 있으면 달성확률이 높아져요!</h3>
                </div>
                <div className="button-group">
                    <button
                        type="button"
                        className={`button ${
                            selectedButton === false ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick(false)}
                    >
                        안 할래요
                    </button>
                    <button
                        type="button"
                        className={`button ${
                            selectedButton === true ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick(true)}
                    >
                        좋아요
                    </button>
                </div>
                <button className="push_submit_btn" onClick={goCharacter}>
                    확인
                </button>
            </form>
        </div>
    );
};

export default PushAlert;
