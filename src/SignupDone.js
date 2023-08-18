import smile_emoji from "./img/smile.png";

const SignupDone = () => {
    return (
        <div className="SignupDone">
            <div className="push_form_container">
                <div className="push_head_bell_image">
                    <div className="push_head">
                        <h2>회원가입이 완료됐어요!</h2>
                    </div>
                    <div className="bell_image">
                        <img src={smile_emoji} alt="Smile Emoji" />
                    </div>
                </div>
                <div>
                    <h3>
                        자, 이제 폰똑으로 공부하러 가볼까요?
                        <br /> <br />
                        폰똑과 함께라면 스마트폰 완전 정복!
                    </h3>
                </div>

                <button className="signupdone_submit_btn">공부하러 가기</button>
            </div>
        </div>
    );
};

export default SignupDone;
