import SignUp2_background from "./img/SignUp2_background.png";
import { useNavigate } from "react-router-dom";
const SignUp2 = () => {
    const movePage = useNavigate();

    function goSignup3() {
        movePage("/SignUp3");
    }
    return (
        <div className="SignUp2">
            <div className="signup2_container">
                <div>
                    <img
                        className="signup2_background_img"
                        src={SignUp2_background}
                    ></img>
                </div>
                <div>
                    <h3>
                        스마트폰 속 수많은 기능 <br />
                        <br />
                    </h3>
                    <div style={{ fontSize: "20px" }}>
                        <strong>
                            <span style={{ fontSize: "23px" }}>
                                재밌고 쉽게
                            </span>{" "}
                            공부할 수는 없을까?
                        </strong>
                    </div>
                </div>
                <button className="push_submit_btn" onClick={goSignup3}>
                    확인
                </button>
            </div>
        </div>
    );
};

export default SignUp2;
