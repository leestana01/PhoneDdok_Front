import { useNavigate } from "react-router-dom";

const SignUp1 = () => {
    const movePage = useNavigate();

    function goSignup2() {
        movePage("/SignUp2");
    }

    return (
        <div className="PushAlert">
            <form className="signup1_push_form_container">
                <div className="signup1_content_whole">
                    <h2>
                        쉽게 공부하고
                        <br />
                        스마트폰 똑똑하게 사용하기
                    </h2>
                    <div>
                        <h3 className="signup1_content">
                            폰똑은 쉽고 재밌습니다
                            <br />
                            <span className="signup1_blue_font">Ai 보이스</span>
                            가 쉽게 설명해주는 스마트폰 기능.
                            <br />
                            공부할때마다 올라가는{" "}
                            <span className="signup1_blue_font">레벨</span>레벨!
                        </h3>
                    </div>
                </div>

                <button className="signup1_push_submit_btn" onClick={goSignup2}>
                    확인
                </button>
            </form>
        </div>
    );
};

export default SignUp1;
