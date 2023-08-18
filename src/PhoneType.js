import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PhoneType = () => {
    const [inputPhone, setInputPhone] = useState(1);
    const movePage = useNavigate();

    const location = useLocation();
    const handed_identity = location.state.identity;

    function goSignUpDone() {
        // 선택한 핸드폰 유형과 identity 정보를 서버로 전송
        axios
            .put(`http://server.phoneddok.kro.kr/members/${handed_identity}`, {
                phone: inputPhone,
            })
            .then((response) => {
                // 백엔드 응답 처리
                console.log("전송 성공:", response.data);
                movePage("/SignupDone", {
                    state: {
                        identity: handed_identity,
                    },
                });
            })
            .catch((error) => {
                console.error("전송 실패:", error);
                // 에러 처리
            });
    }

    const handleButtonClick = (value) => {
        setInputPhone(value);
        console.log(value);
    };

    return (
        <div className="PhoneType">
            <form className="target_form_container">
                <h2>핸드폰 기종을 선택 해주세요</h2>
                <h3>내가 보유한 휴대폰에 맞게 진행됩니다</h3>
                <div className="button-group">
                    <button
                        type="button"
                        className={`button ${
                            inputPhone === 1 ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick(1)}
                    >
                        갤럭시
                    </button>
                    <button
                        type="button"
                        className={`button ${
                            inputPhone === 2 ? "selected" : ""
                        }`}
                        onClick={() => handleButtonClick(2)}
                    >
                        아이폰
                    </button>
                    <button
                        type="button"
                        className="target_submit_btn"
                        onClick={goSignUpDone}
                    >
                        확인
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PhoneType;
