import SignUp3_background from "./img/SignUp3_background.png";
import { useNavigate } from "react-router-dom";
const SignUp3 = () => {
    const movePage = useNavigate();

    function goSignup4() {
        movePage("/SignUp4");
    }
    return (
        <div className="SignUp3">
            <div className="signup3_container">
                <img
                    className="signup3_background_img"
                    src={SignUp3_background}
                ></img>
                <div>
                    <h2>
                        <p>폰똑과 함께라면 나이 상관없이</p>
                    </h2>
                    <h2>즐겁게 공부할 수 있으니까!</h2>
                </div>
                <button className="signup3_push_submit_btn" onClick={goSignup4}>
                    확인
                </button>
            </div>
        </div>
    );
};

export default SignUp3;
