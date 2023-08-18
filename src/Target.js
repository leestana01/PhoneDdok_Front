import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Target = (props) => {
    const [selectedButton, setSelectedButton] = useState("minutes");

    const handleButtonClick = (value) => {
        setSelectedButton(value);
        console.log(value);
    };
    const movePage = useNavigate();

    const cnffur = () => {
        console.log(props.state);
    };
    function goPushAlert() {
        movePage("/PushAlert", {
            state: {
                identity: props.location.state.identity,
                nickName: props.location.state.nickName,
            },
        });
    }

    return (
        <div className="Target">
            <form className="target_form_container">
                <div className="head">
                    <h2>목표를 설정해주세요</h2>
                    <h3>분명한 목표가 있으면 달성확률이 높아져요!</h3>
                </div>
                <div className="button-group">
                    <button
                        type="button"
                        className={`button ${
                            selectedButton === "day" ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick("day")}
                    >
                        매일 몇 분
                    </button>
                    <button
                        type="button"
                        className={`button ${
                            selectedButton === "week" ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick("week")}
                    >
                        매주 몇 분
                    </button>
                    <button
                        type="button"
                        className={`button ${
                            selectedButton === "month" ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick("month")}
                    >
                        매월 몇 분
                    </button>
                    <button
                        type="button"
                        className={`button ${
                            selectedButton === "later" ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick("later")}
                    >
                        나중에 할래요
                    </button>
                    <button
                        type="submit"
                        className="target_submit_btn"
                        onClick={goPushAlert}
                    >
                        확인
                    </button>
                </div>
            </form>
            <button className="target_submit_btn" onClick={cnffur}>
                확인
            </button>
        </div>
    );
};

export default Target;
