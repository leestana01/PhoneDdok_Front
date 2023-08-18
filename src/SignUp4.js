import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SignupModal from "./components/SignupModal";
import Button from "@mui/material/Button";
import axios from "axios";

const initialSendData = {
    nickname: "",
    identity: "",
};

const SignUp4 = () => {
    function searchApi() {
        const url = "http://server.phoneddok.kro.kr/members";
        axios
            .get(url)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log("실패");
            });
    }

    const [nickNameErrors, setNickNameErrors] = useState(true);
    const [identifyErrors, setIdentifyErrors] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateCredentials = () => {
        // Implement your logic to validate email and password.
        // Assume successful validation and set isSuccess to true.
        setIsSuccess(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateCredentials();
    };

    const [sendData, setSendData] = useState(initialSendData); // 초기 상태로 설정

    const checkNickName = (e) => {
        var nameRegExp = /^[가-힣]+$/;
        setNickNameErrors(!nameRegExp.test(e.target.value));
    };

    const checkId = (e) => {
        var idRegExp = /^[a-z]+[a-z0-9]{5,19}$/;
        setIdentifyErrors(!idRegExp.test(e.target.value));
    };
    const onchange = (e) => {
        setSendData({
            ...sendData,
            [e.target.name]: e.target.value,
        });
        console.log(sendData);
    };

    return (
        <div className="SignUp4">
            <div className="whole">
                <form onSubmit={handleSubmit} className="form_container">
                    <div className="signup_texfield">
                        <div className="head">
                            <h2>이름을 입력해주세요</h2>
                        </div>
                        <TextField
                            value={sendData.nickname}
                            label="이름"
                            required
                            name="nickname"
                            margin="normal"
                            fullWidth
                            autoFocus
                            error={nickNameErrors && sendData.nickname !== ""}
                            onChange={(e) => {
                                onchange(e);
                                checkNickName(e);
                            }}
                            helperText={
                                nickNameErrors && sendData.nickname !== ""
                                    ? "올바른 이름을 입력해주세요."
                                    : null
                            }
                        />
                    </div>
                    <div className="signup_texfield">
                        <div className="head">
                            <h2>아이디를 입력해주세요</h2>
                        </div>
                        <TextField
                            value={sendData.identity}
                            label="아이디"
                            required
                            name="identity"
                            margin="normal"
                            fullWidth
                            autoFocus
                            error={identifyErrors && sendData.identity !== ""}
                            onChange={(e) => {
                                onchange(e);
                                checkId(e);
                            }}
                            helperText={
                                identifyErrors && sendData.identity !== ""
                                    ? "올바른 아이디를 입력하세요"
                                    : null
                            }
                        />
                    </div>
                    <SignupModal
                        isSuccess={isSuccess}
                        isError={!identifyErrors && !nickNameErrors}
                        validateCredentials={validateCredentials}
                        handleClose={() => setIsSuccess(false)}
                        sendData={sendData}
                    />
                    <Button
                        className="submit_button"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        확인
                    </Button>
                </form>
                <button onClick={searchApi}>data</button>
            </div>
        </div>
    );
};

export default SignUp4;
